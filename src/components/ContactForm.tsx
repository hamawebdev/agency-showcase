
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: 'Message sent!',
      description: 'Thanks for reaching out. We\'ll get back to you shortly.',
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 appear-animate">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-agency-dark mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full py-3 rounded-lg border-gray-200 focus:border-agency-blue focus:ring-1 focus:ring-agency-blue/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-agency-dark mb-1">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full py-3 rounded-lg border-gray-200 focus:border-agency-blue focus:ring-1 focus:ring-agency-blue/20 transition-colors"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-agency-dark mb-1">
          Company (Optional)
        </label>
        <Input
          id="company"
          name="company"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full py-3 rounded-lg border-gray-200 focus:border-agency-blue focus:ring-1 focus:ring-agency-blue/20 transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-agency-dark mb-1">
          How can we help?
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[120px] w-full rounded-lg border-gray-200 focus:border-agency-blue focus:ring-1 focus:ring-agency-blue/20 transition-colors"
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full md:w-auto py-6 px-8 bg-agency-blue hover:bg-agency-blue/90 text-white font-medium rounded-lg transition-all"
      >
        {isLoading ? (
          <div className="flex items-center">
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            Sending...
          </div>
        ) : (
          <div className="flex items-center">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </div>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
