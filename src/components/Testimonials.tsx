import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "TechVentures India",
      role: "Managing Director",
      review: "BTF Global transformed our business operations completely. Their technology services helped us automate processes and increase efficiency by 40%. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Mehta",
      company: "Global Exports Ltd",
      role: "CEO",
      review: "The financial advisory team at BTF Global provided exceptional guidance during our expansion. Their strategic insights were invaluable for our growth journey.",
      rating: 5
    },
    {
      name: "Amit Verma",
      company: "StartUp Hub",
      role: "Founder",
      review: "As a startup, we needed comprehensive support in business strategy and technology. BTF Global delivered beyond expectations with their service-first approach.",
      rating: 5
    },
    {
      name: "Sunita Agarwal",
      company: "Retail Solutions",
      role: "Operations Head",
      review: "Professional, reliable, and results-driven. BTF Global's business consulting services helped us streamline our operations and reduce costs significantly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-10 sm:py-14 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-up">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied clients say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-smooth hover-lift shadow-soft group relative overflow-hidden"
            >
              <CardContent className="p-5 sm:p-6">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 italic">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="text-base sm:text-lg font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
