import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
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
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office Address",
      content: "Sector 4, Rewari, Haryana 123401",
      action: () => window.open("https://maps.google.com/?q=Sector+4+Rewari+Haryana+123401", "_blank"),
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+91 9990131102",
      action: () => window.location.href = "tel:+919990131102",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "WhatsApp",
      content: "+91 9990131102",
      action: () => window.open("https://wa.me/919990131102", "_blank"),
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "biztechfin.global@gmail.com",
      action: () => window.location.href = "mailto:biztechfin.global@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Contact us today
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-smooth cursor-pointer hover:shadow-glow group"
                onClick={info.action}
              >
                <CardContent className="p-3 sm:p-5 text-center">
                  <div className="flex justify-center mb-2 sm:mb-3 text-primary group-hover:scale-110 transition-transform">{info.icon}</div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs break-words">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <Card className="border-2 overflow-hidden shadow-glow order-2 lg:order-1 h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8882195726383!2d76.6215!3d28.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzAwLjEiTiA3NsKwMzcnMTcuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BTF Global Office Location - Sector 4, Rewari, Haryana"
                ></iframe>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-glow order-1 lg:order-2 h-full">
              <CardContent className="p-5 sm:p-6 md:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5 sm:mb-6">Send us a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth text-sm"
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
                        className="w-full px-3 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth text-sm"
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
                        className="w-full px-3 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth text-sm"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth resize-none text-sm"
                        placeholder="Tell us about your project"
                        required
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5">
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
