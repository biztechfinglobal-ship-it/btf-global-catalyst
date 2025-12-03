import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award, HeartHandshake, Target } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Service-First Approach",
      description: "We prioritize client satisfaction above all, delivering personalized solutions tailored to your unique needs."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "Our seasoned professionals bring decades of combined experience in business, technology, and finance."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business growth and profitability."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trusted Partner",
      description: "Build long-term relationships based on transparency, integrity, and consistent delivery."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Timely Delivery",
      description: "We respect your time and ensure all projects are completed within agreed timelines."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      description: "Every service we deliver undergoes rigorous quality checks to meet the highest standards."
    }
  ];

  return (
    <section id="why-choose-us" className="py-10 sm:py-14 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-up">
            Why Choose <span className="text-primary">BTF Global</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A pure service-based company committed to excellence in every engagement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-smooth hover-lift shadow-soft group bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-bounce shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
