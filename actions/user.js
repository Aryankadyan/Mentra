"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  const devUserId = "clerk_12345"; // fallback for dev
  const clerkUserId = userId || devUserId;

  console.log("🪵 updateUser - Clerk userId:", userId);
  console.log("🪵 updateUser - Using clerkUserId for DB query:", clerkUserId);

  let user = await db.user.findUnique({
    where: { clerkUserId },
  });

  // Auto-create user if not found
  if (!user) {
    console.log("⚠️ User not found in DB. Creating new user...");
    user = await db.user.create({
      data: {
        clerkUserId,
        email: "placeholder@example.com",
        name: "New User",
      },
    });
    console.log("✨ Auto-created user:", user.id);
  }

  try {
    const result = await db.$transaction(async (tx) => {
      // Check if industry exists
      let industryInsight = await tx.industryInsight.findUnique({
        where: { industry: data.industry },
      });

      // If industry doesn't exist, create with AI insights
      if (!industryInsight) {
        console.log("⚠️ Industry not found. Generating insights...");
        const insights = await generateAIInsights(data.industry);

        industryInsight = await tx.industryInsight.create({
          data: {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week later
          },
        });
        console.log("✨ Created new IndustryInsight:", industryInsight.id);
      }

      // Update user
      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: {
          industry: data.industry,
          experience: data.experience,
          bio: data.bio,
          skills: data.skills,
        },
      });

      return { updatedUser, industryInsight };
    }, { timeout: 10000 });

    revalidatePath("/");
    return result.updatedUser;
  } catch (error) {
    console.error("❌ Error in updateUser:", error.message);
    throw new Error("Failed to update profile");
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  const devUserId = "clerk_12345"; // fallback for dev
  const clerkUserId = userId || devUserId;

  console.log("🪵 getUserOnboardingStatus - Clerk userId:", userId);
  console.log("🪵 getUserOnboardingStatus - Using clerkUserId for DB query:", clerkUserId);

  let user = await db.user.findUnique({
    where: { clerkUserId },
    select: { industry: true },
  });

  // Auto-create user if not found
  if (!user) {
    console.log("⚠️ User not found in DB. Creating new user...");
    user = await db.user.create({
      data: {
        clerkUserId,
        email: "placeholder@example.com",
        name: "New User",
      },
      select: { industry: true },
    });
    console.log("✨ Auto-created user:", clerkUserId);
  }

  return { isOnboarded: !!user.industry };
}



