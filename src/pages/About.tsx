
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Github, Twitter, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-3xl">
          {/* Page header */}
          <div className="mb-12 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">About TechBlog</h1>
            <p className="text-muted-foreground text-lg">
              A modern technology blog focused on helping students in the tech field.
            </p>
          </div>
          
          {/* About content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Welcome to TechBlog, where we're passionate about making technology accessible and
              understandable for students and professionals alike. Our mission is to provide high-quality,
              in-depth articles that not only explain technical concepts but also show practical applications.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              We believe that technology education should be accessible to everyone. Our goal is to break down
              complex topics into understandable articles, tutorials, and guides that help our readers build
              their skills and advance their careers in the tech industry.
            </p>
            
            <h2>Our Team</h2>
            <p>
              TechBlog is powered by a team of passionate technology professionals, educators, and writers who
              are committed to sharing their knowledge and experience with the community. Our contributors include:
            </p>
            <ul>
              <li>Experienced software developers</li>
              <li>Cybersecurity specialists</li>
              <li>AI and machine learning researchers</li>
              <li>Data scientists and analysts</li>
              <li>UX/UI designers and front-end specialists</li>
            </ul>
            
            <h2>Our Focus Areas</h2>
            <p>
              While we cover a broad range of technology topics, we have particular expertise in:
            </p>
            <ul>
              <li>Web Development (Frontend and Backend)</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Cybersecurity and Privacy</li>
              <li>Mobile Development</li>
              <li>Data Science and Analytics</li>
            </ul>
            
            <h2>Join Our Community</h2>
            <p>
              We believe in the power of community learning. We encourage our readers to engage with our content,
              share their insights, and connect with fellow technology enthusiasts. Follow us on social media
              and subscribe to our newsletter to stay updated on the latest articles and technology trends.
            </p>
          </div>
          
          {/* Team section */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">Meet Our Contributors</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card rounded-lg p-6 border">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Chen"
                  className="h-16 w-16 rounded-full mb-4 object-cover"
                />
                <h3 className="font-heading text-lg font-bold mb-2">Sarah Chen</h3>
                <p className="text-muted-foreground mb-4">
                  Senior Frontend Developer with 8 years of experience specializing in React and Next.js.
                  Sarah is passionate about creating performant and accessible web applications.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Michael Johnson"
                  className="h-16 w-16 rounded-full mb-4 object-cover"
                />
                <h3 className="font-heading text-lg font-bold mb-2">Michael Johnson</h3>
                <p className="text-muted-foreground mb-4">
                  AI Research Scientist with a PhD in Computer Science. Michael focuses on making
                  machine learning concepts accessible to beginners.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
