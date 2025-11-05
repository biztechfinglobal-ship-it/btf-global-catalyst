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
      content: "HN 1847, Sector 04, Rewari, Haryana 123401",
      action: () => window.open("https://maps.google.com/?q=HN+1847+Sector+04+Rewari+Haryana+123401", "_blank"),
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
      content: "contact@btfglobal.com",
      action: () => window.location.href = "mailto:contact@btfglobal.com",
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-smooth cursor-pointer"
                onClick={info.action}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-10">
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8882195726383!2d76.6215!3d28.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzAwLjEiTiA3NsKwMzcnMTcuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BTF Global Office Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 shadow-glow">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth"
                      placeholder="your@email.com"
                      required
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
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-input bg-background text-foreground rounded-md focus:outline-none focus:border-primary transition-smooth resize-none"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                  Send via WhatsApp
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
