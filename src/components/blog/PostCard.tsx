
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PostCardProps {
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
}

const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md",
        className
      )}>
        <div 
          className="aspect-[16/9] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />
        <div className="flex flex-1 flex-col p-4">
          <Badge variant="secondary" className="mb-2 w-fit">{post.category}</Badge>
          <h3 className="font-heading mb-2 line-clamp-2 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="h-6 w-6 rounded-full mr-2 object-cover"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
