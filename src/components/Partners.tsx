import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/200x100/1e40af/ffffff?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/200x100/0891b2/ffffff?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/200x100/1e40af/ffffff?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/200x100/0891b2/ffffff?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/200x100/1e40af/ffffff?text=Partner+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/200x100/0891b2/ffffff?text=Partner+6" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
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
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-2">
                  <Card className="border-2 hover:border-primary/50 transition-smooth">
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
