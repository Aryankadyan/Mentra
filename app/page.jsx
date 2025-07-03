"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function LandingPage() {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-400 to-yellow-500 rounded-full blur-2xl opacity-25 animate-spin-slow"></div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full py-16 md:py-28 bg-background dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16 dark:text-white">
            ✨ Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="hover:scale-105 transition-transform duration-300"
              >
                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-2xl">
                  <CardContent className="pt-8 pb-6 text-center flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full py-16 md:py-24 bg-gradient-to-r from-primary/10 via-muted/30 to-primary/10 dark:from-primary/20 dark:to-muted/50"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1,000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-5xl font-extrabold text-primary dark:text-yellow-400">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full py-16 md:py-28 bg-background dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-3 dark:text-white">
              🚀 How It Works
            </h2>
            <p className="text-muted-foreground text-lg dark:text-gray-300">
              Four simple steps to accelerate your career growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex flex-col items-center text-center space-y-4 hover:scale-105 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl dark:text-white">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full py-16 md:py-28 bg-muted/50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 dark:text-white">
            💬 What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonial.map((t, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="hover:scale-105 transition-transform duration-300"
              >
                <Card className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-md border border-primary/10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="pt-6 pb-4 space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        width={48}
                        height={48}
                        src={t.image}
                        alt={t.author}
                        className="rounded-full border-2 border-primary/30"
                      />
                      <div>
                        <p className="font-semibold dark:text-white">
                          {t.author}
                        </p>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          {t.role}
                        </p>
                        <p className="text-sm text-primary">{t.company}</p>
                      </div>
                    </div>
                    <blockquote className="italic text-muted-foreground dark:text-gray-300">
                      “{t.quote}”
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full py-16 md:py-28 bg-background dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
              ❓ Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg dark:text-gray-300">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-lg dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-muted-foreground dark:text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full"
      >
        <div className="mx-auto py-24 rounded-lg bg-gradient-to-r from-primary to-secondary shadow-2xl">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Ready to Accelerate Your Career?
            </h2>
            <p className="max-w-xl mx-auto text-lg text-white/90">
              Join thousands of professionals advancing their careers with
              AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 bg-black text-primary hover:bg-primary hover:text-teal-300 transition-colors duration-300 animate-bounce"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}

