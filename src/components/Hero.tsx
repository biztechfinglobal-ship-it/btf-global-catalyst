import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-business.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/50 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 mb-4 sm:mb-6 animate-fade-in leading-tight drop-shadow-lg">
            Transforming Business Through Innovation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 max-w-2xl mx-auto px-2 font-semibold drop-shadow-md">
            Our Vision
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 drop-shadow-md">
            Perform in the market of Business, Technology and Finance for reformation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={18} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-sm sm:text-base">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
