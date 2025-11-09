import { Card, CardContent } from "@/components/ui/card";
import { Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-8 sm:py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            About Us
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Driving transformation in Business, Technology, and Finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-smooth hover:shadow-glow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Perform in the sector of innovation, technology, business growth, and strategic thinking. 
                We aim to transform businesses through cutting-edge solutions in Business, Technology, and Finance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-smooth hover:shadow-glow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">Our Team</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                Led by experienced professionals with expertise across multiple domains:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                <li>• Business Education & Consulting</li>
                <li>• Technology & AI Solutions</li>
                <li>• Financial Services & Planning</li>
                <li>• Strategic Development & Operations</li>
                <li>• Digital Transformation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
