
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl">TechBlog</h3>
            <p className="text-muted-foreground text-sm">
              Modern insights and tutorials for students in the tech field.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/web-development" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/category/artificial-intelligence" className="text-muted-foreground hover:text-primary transition-colors">Artificial Intelligence</Link>
              </li>
              <li>
                <Link to="/category/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors">Cybersecurity</Link>
              </li>
              <li>
                <Link to="/category/data-science" className="text-muted-foreground hover:text-primary transition-colors">Data Science</Link>
              </li>
              <li>
                <Link to="/category/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">Mobile Development</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Subscribe</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest articles and resources in your inbox weekly.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 bg-background border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
