"use server";

import {db} from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  let user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  // 👇 If user not found in DB, auto-create it
  if (!user) {
    console.log("⚠️ User not found. Creating new user...");
    user = await db.user.create({
      data: {
        clerkUserId: userId,
        email: "placeholder@example.com", // 📝 Replace later
        name: "New User",
      },
    });
    console.log("✨ Auto-created user:", user.id);
  }

  try {
    const result = await db.$transaction(
      async (tx) => {
        // Check if industry exists
        let industryInsight = await tx.industryInsight.findUnique({
          where: { industry: data.industry },
        });

        // If not, generate & create it
        if (!industryInsight) {
          console.log("⚠️ Industry not found. Generating insights...");
          const insights = await generateAIInsights(data.industry);

          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
          console.log("✨ Created IndustryInsight:", industryInsight.id);
        }

        // Update user profile
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
      },
      { timeout: 10000 }
    );

    revalidatePath("/dashboard");
    return result.updatedUser;
  } catch (error) {
    console.error("❌ Error in updateUser:", error);
    throw new Error("Failed to update profile");
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  let user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true },
  });

  // 👇 Auto-create user if not found
  if (!user) {
    console.log("⚠️ User not found in DB. Creating new user...");
    user = await db.user.create({
      data: {
        clerkUserId: userId,
        email: "placeholder@example.com",
        name: "New User",
      },
      select: { industry: true },
    });
    console.log("✨ Auto-created user:", userId);
  }

  return { isOnboarded: !!user.industry };
}




