
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block text-2xl font-bold text-agency-dark tracking-tight">
              Agency<span className="text-agency-blue">.</span>
            </Link>
            <p className="text-agency-text mt-4 max-w-xs">
              We create exceptional digital experiences that drive growth and transform businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialLink icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialLink icon={<Instagram size={18} />} href="#" label="Instagram" />
              <SocialLink icon={<Linkedin size={18} />} href="#" label="LinkedIn" />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold text-agency-dark mb-4">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Custom Software', 'SEO', 'Social Media'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-agency-text hover:text-agency-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold text-agency-dark mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-agency-text hover:text-agency-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-agency-dark mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-agency-blue flex-shrink-0" />
                <span className="text-agency-text">
                  123 Innovation Drive<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-agency-blue flex-shrink-0" />
                <span className="text-agency-text">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-agency-blue flex-shrink-0" />
                <span className="text-agency-text">hello@agency.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-agency-text">
            © {new Date().getFullYear()} Agency. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-agency-text hover:text-agency-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-agency-text hover:text-agency-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-agency-text hover:text-agency-blue transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a 
    href={href}
    aria-label={label}
    className="h-9 w-9 rounded-full bg-gray-100 hover:bg-agency-blue hover:text-white flex items-center justify-center transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
