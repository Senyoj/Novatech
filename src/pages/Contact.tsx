
import React from 'react';
import { MailOpen, MapPin, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would connect to Supabase to store the contact form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
  };
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          {/* Page header */}
          <div className="mb-12 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions, feedback, or collaboration ideas? We'd love to hear from you!
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-5">
            {/* Contact form */}
            <div className="md:col-span-3">
              <div className="bg-card rounded-lg p-6 border">
                <h2 className="font-heading text-xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="md:col-span-2">
              <div className="bg-card rounded-lg p-6 border mb-6">
                <h2 className="font-heading text-xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <MailOpen className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@techblog.com" className="text-muted-foreground hover:text-primary">
                        info@techblog.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h2 className="font-heading text-xl font-bold mb-4">Frequent Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">How can I contribute an article?</h3>
                    <p className="text-sm text-muted-foreground">
                      We welcome guest contributions! Email us with your article idea and writing samples.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">I found a bug or error in an article</h3>
                    <p className="text-sm text-muted-foreground">
                      Please let us know through the contact form, and we'll fix it as soon as possible.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Do you offer advertising opportunities?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we have sponsorship and advertising options. Contact us for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
