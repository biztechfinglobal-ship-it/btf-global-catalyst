import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office Address",
      content: "HN 1847, Sector 04, Rewari, Haryana 123401",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+91 9990131102",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "contact@btfglobal.com",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Let's start a conversation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 shadow-glow">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth resize-none"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <Button variant="hero" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
