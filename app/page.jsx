import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { Image } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-34 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-lighter text-center mb-12">
            Powerful Features for your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">75+</h3>
              <p className="text-muted-foreground">Industries Covered</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">97%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-34 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">

            <h2 className="text-3xl font-bold mb-12">
              How Mentra Works
            </h2>

            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth with AI-driven coaching and resources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => {
              return (
                <div key={index}
                  className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-34 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-lighter text-center mb-12">
            What our users say?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => {
              return (
                <Card
                  key={index}
                  className="bg-background">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative h-11 w-11 flex-shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {/* Add testimonial content here if needed */}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
