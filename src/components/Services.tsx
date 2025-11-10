import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Cpu, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Business Education",
      description: "Comprehensive training programs and workshops designed to elevate business acumen and leadership skills.",
      subServices: [
        "Corporate Training Programs",
        "Leadership Development",
        "Strategic Business Planning",
        "Workshop & Seminars"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "Technology Support",
      description: "Cutting-edge technological solutions and IT infrastructure to streamline operations and drive digital transformation.",
      subServices: [
        "IT Infrastructure & Support",
        "Digital Transformation",
        "AI & Automation Solutions",
        "Cloud Integration"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Financial Impact",
      description: "Strategic financial consulting and planning services to optimize growth, maximize ROI, and ensure business success.",
      subServices: [
        "Financial Planning & Analysis",
        "Investment Strategy",
        "Risk Management",
        "Business Valuation"
      ]
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-14 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-smooth hover:shadow-glow group"
            >
              <CardHeader className="pb-2">
                <div className="mb-2 transform group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl mb-1">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-3">
                  {service.description}
                </CardDescription>
                <ul className="space-y-1.5 mt-3">
                  {service.subServices.map((sub, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
