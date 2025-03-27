
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import { getPostBySlug, getRelatedPosts } from '@/lib/data';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = getPostBySlug(slug || '');
  const relatedPosts = post ? getRelatedPosts(post.id) : [];
  
  useEffect(() => {
    if (!post) {
      navigate('/not-found', { replace: true });
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to articles
            </Link>
          </div>
          
          {/* Article header */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Link to={`/category/${post.category.toLowerCase().replace(' ', '-')}`}>
                  {post.category}
                </Link>
              </Badge>
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <Link to={`/author/${post.author.name.toLowerCase().replace(' ', '-')}`} className="font-medium text-foreground hover:text-primary">
                    {post.author.name}
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
          
          {/* Cover image */}
          <div 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center rounded-lg mb-10"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          />
          
          {/* Article content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Article footer */}
          <div className="flex justify-between items-center py-6 border-t border-b mb-12">
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                <Bookmark className="h-4 w-4" />
                Save
              </button>
            </div>
          </div>
          
          {/* Author bio */}
          <div className="bg-muted rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <img 
                src={post.author.avatar}
                alt={post.author.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {post.author.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.author.bio}
                </p>
                <Link 
                  to={`/author/${post.author.name.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;
