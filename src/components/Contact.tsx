import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPinned, PhoneCall, AtSign, MessageSquareMore } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject || "General Inquiry")}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/919990131102?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Success",
      description: "Opening WhatsApp to send your message",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  const contactInfo = [
    {
      icon: <MapPinned className="w-6 h-6 text-primary" />,
      title: "Office Address",
      content: "Sector 4, Rewari, Haryana 123401",
      action: () => window.open("https://maps.google.com/?q=Sector+4+Rewari+Haryana+123401", "_blank"),
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+91 9990131102",
      action: () => window.location.href = "tel:+919990131102",
    },
    {
      icon: <MessageSquareMore className="w-6 h-6 text-primary" />,
      title: "WhatsApp",
      content: "+91 9990131102",
      action: () => window.open("https://wa.me/919990131102", "_blank"),
    },
    {
      icon: <AtSign className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "biztechfin.global@gmail.com",
      action: () => window.location.href = "mailto:biztechfin.global@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-10 sm:py-14 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-up">
            Get In <span className="bg-clip-text text-transparent gradient-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Contact us today
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-smooth cursor-pointer hover-lift shadow-soft group"
                onClick={info.action}
              >
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="flex justify-center mb-2 p-2.5 rounded-lg bg-primary/5 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all mx-auto w-fit">
                    <div className="text-primary group-hover:text-white group-hover:scale-110 transition-all">{info.icon}</div>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs break-words">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
            <Card className="border-2 overflow-hidden shadow-soft hover-lift order-2 lg:order-1 h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d76.6181048!3d28.1863301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d50055857ea2b%3A0x8a76ec7bef874838!2sSector%204%2C%20Rewari%2C%20Haryana%20123401!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '450px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BTF Global Office Location - Sector 4, Rewari, Haryana"
                ></iframe>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-soft hover-lift order-1 lg:order-2 h-full">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-5">Send us a Message</h3>
                <form className="space-y-3.5" onSubmit={handleSubmit}>
                  <div className="space-y-3.5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 border-2 border-input bg-background text-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth text-sm"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 border-2 border-input bg-background text-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth text-sm"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 border-2 border-input bg-background text-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth text-sm"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 border-2 border-input bg-background text-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth resize-none text-sm"
                        placeholder="Tell us about your project"
                        required
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full gradient-hero hover:opacity-90 text-white font-semibold py-2.5 shadow-glow hover:shadow-accent transition-all">
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
