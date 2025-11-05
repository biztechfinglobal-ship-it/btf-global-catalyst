import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Laptop, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Business Education",
      description: "Comprehensive training programs and workshops designed to elevate business acumen and leadership skills across all organizational levels.",
    },
    {
      icon: <Laptop className="w-12 h-12 text-primary" />,
      title: "Technology Support",
      description: "Cutting-edge technological solutions and IT infrastructure support to streamline operations and drive digital transformation.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Financial Impact",
      description: "Strategic financial consulting and planning services to optimize growth, maximize ROI, and ensure sustainable business success.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-smooth hover:shadow-glow group"
            >
              <CardHeader>
                <div className="mb-4 transform group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
