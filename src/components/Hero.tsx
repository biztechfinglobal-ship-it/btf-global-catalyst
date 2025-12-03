import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-india-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 animate-fade-in">
            <p className="text-xs sm:text-sm text-primary font-semibold">LiayanaWap BizCorp</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-5 animate-fade-up leading-tight">
            Your Trusted Partner in <span className="text-primary">Business, Technology & Finance</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            A pure service-based company delivering expert solutions in Business Consulting, Technology Services, and Financial Advisory
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 animate-scale-in">
            <Button 
              variant="hero" 
              size="lg" 
              className="group w-full sm:w-auto shadow-glow hover:shadow-accent transition-all"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-bounce" size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto hover-lift border-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
