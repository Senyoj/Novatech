
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import { getPostsByAuthor, blogPosts } from '@/lib/data';

const Author = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  
  // Find the author by converting the username back to a name format
  // This is a simplification; in a real app, you'd use a unique ID
  const formattedName = username ? username.replace('-', ' ').split(' ').map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') : '';
  
  const authorPosts = getPostsByAuthor(formattedName);
  
  if (authorPosts.length === 0) {
    navigate('/not-found', { replace: true });
    return null;
  }
  
  const author = authorPosts[0].author;
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Author header */}
        <div className="mb-12 text-center">
          <img 
            src={author.avatar}
            alt={author.name}
            className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            {author.name}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            {author.bio}
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        
        {/* Author stats */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8">
            <div className="text-center">
              <p className="text-2xl font-bold">{authorPosts.length}</p>
              <p className="text-muted-foreground">Articles</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {authorPosts.reduce((total, post) => total + post.views, 0).toLocaleString()}
              </p>
              <p className="text-muted-foreground">Views</p>
            </div>
          </div>
        </div>
        
        {/* Author's posts */}
        <div>
          <h2 className="font-heading text-2xl font-bold mb-6">Articles by {author.name}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {authorPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Author;
