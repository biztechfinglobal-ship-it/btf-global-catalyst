import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, UsersRound } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-14 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-up">
            About <span className="text-primary">BTF Global</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A pure service-based company specializing in Business, Technology, and Finance solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-smooth hover-lift shadow-soft group">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-primary shadow-glow group-hover:scale-110 transition-bounce">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To be the most trusted service partner for businesses seeking excellence in consulting, 
                technology integration, and financial advisory services across industries.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-smooth hover-lift shadow-soft group">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-accent shadow-accent group-hover:scale-110 transition-bounce">
                  <UsersRound className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">Our Expertise</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                Our expert team delivers end-to-end service solutions:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Business Consulting & Strategy</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Technology Services & Support</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Financial Advisory & Planning</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> End-to-End Service Delivery</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
