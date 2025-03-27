
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    coverImage: string;
    category: string;
    author: {
      name: string;
      avatar: string;
    };
    readingTime: string;
    date: string;
  };
  className?: string;
  isHero?: boolean;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, className, isHero = false }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article 
        className={cn(
          "group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md",
          isHero ? "md:grid md:grid-cols-2 md:gap-4" : "",
          className
        )}
      >
        <div 
          className={cn(
            "aspect-[16/9] w-full bg-cover bg-center bg-no-repeat",
            isHero ? "md:aspect-auto md:h-full" : ""
          )}
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />
        <div className="p-4 md:p-6">
          <Badge variant="secondary" className="mb-3">{post.category}</Badge>
          <h2 className={cn(
            "font-heading mb-2 line-clamp-2 font-bold text-card-foreground group-hover:text-primary transition-colors",
            isHero ? "text-2xl md:text-3xl" : "text-xl"
          )}>
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="h-6 w-6 rounded-full mr-2 object-cover"
              />
              <span>{post.author.name}</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedPost;
