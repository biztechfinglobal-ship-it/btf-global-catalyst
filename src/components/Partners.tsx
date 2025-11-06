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
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Partners
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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
          <CarouselContent className="-ml-2 md:-ml-3">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <Card className="border-2 hover:border-primary/50 transition-smooth h-full">
                  <CardContent className="flex aspect-video items-center justify-center p-4 sm:p-5">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </CardContent>
                </Card>
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
