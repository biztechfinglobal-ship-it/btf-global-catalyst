import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import logoLimart from "@/assets/logo-limart.png";
import logoShreeTravels from "@/assets/logo-shree-travels.png";
import logoPyaoo from "@/assets/logo-pyaoo.png";
import logoOldcar from "@/assets/logo-oldcar.png";
import logoTechhub from "@/assets/logo-techhub.png";
import logoFinancepro from "@/assets/logo-financepro.png";
import logoSmartBusiness from "@/assets/logo-smart-business.png";
import logoDigitalSolutions from "@/assets/logo-digital-solutions.png";
import logoInnovationLabs from "@/assets/logo-innovation-labs.png";
import logoGlobalTrade from "@/assets/logo-global-trade.png";

const Partners = () => {
  const partners = [
    { name: "Limart Online Shopping Store", logo: logoLimart },
    { name: "Shree Travels", logo: logoShreeTravels },
    { name: "Pyaoo.com", logo: logoPyaoo },
    { name: "Oldcar.com", logo: logoOldcar },
    { name: "TechHub India", logo: logoTechhub },
    { name: "Finance Pro", logo: logoFinancepro },
    { name: "Smart Business", logo: logoSmartBusiness },
    { name: "Digital Solutions", logo: logoDigitalSolutions },
    { name: "Innovation Labs", logo: logoInnovationLabs },
    { name: "Global Trade", logo: logoGlobalTrade },
  ];

  return (
    <section className="py-8 sm:py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            Our Partners
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="group cursor-pointer">
                  <Card className="border-2 border-border hover:border-primary/50 transition-smooth h-full overflow-hidden hover:shadow-glow">
                    <CardContent className="flex aspect-video items-center justify-center p-4 sm:p-5 bg-card relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10"
                      />
                    </CardContent>
                  </Card>
                  <p className="text-xs text-center mt-2 text-muted-foreground group-hover:text-foreground transition-smooth opacity-0 group-hover:opacity-100">
                    {partner.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-8 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-8 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
