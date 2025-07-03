import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      <section>
        <div>
          <h2>Powerful Features for your Career Growth</h2>
          <div>
            {features.map((feature, index) => {
              return (
                <Card>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              )
            })}</div>
        </div>
      </section>
    </div>
  );
}
