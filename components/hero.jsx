"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = imageRef.current;
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      // ✅ SAFEGUARD to prevent error
      if (!imageElement) return;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 bg-black text-white">
      <div className="space-y-8 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] md:text-xl text-muted-foreground">
            Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 py-4 text-lg">
              Get Started
            </Button>
          </Link>

          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            Watch Demo
          </Button>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image transition-transform duration-500">
            <Image
              src="/banner.jpeg"
              width={1300}
              height={750}
              alt="Banner Mentra"
              className="rounded-lg shadow-2xl border mx-auto mt-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

