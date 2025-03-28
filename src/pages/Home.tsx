import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Layout from "@/components/layout/Layout";
import FeaturedPost from "@/components/blog/FeaturedPost";
import PostCard from "@/components/blog/PostCard";
import { blogPosts, getTrendingPosts } from "@/lib/data";

const Home = () => {
  const trendingPosts = getTrendingPosts(4);

  // Get the first post for the hero section
  const heroPost = blogPosts[0];

  // Get the next 2 featured posts
  const featuredPosts = blogPosts.slice(1, 3);

  // Get the rest of the posts for the main grid
  const mainPosts = blogPosts.slice(3, 9);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Category filter */}

        {/* Hero post */}
        <div className="mb-12">
          <FeaturedPost post={heroPost} isHero />
        </div>

        {/* Featured posts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold">
              Featured Articles
            </h2>
            <Link
              to="/category/all"
              className="text-primary flex items-center text-sm font-medium hover:underline"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Main content grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold">Latest Articles</h2>
            <Link
              to="/category/all"
              className="text-primary flex items-center text-sm font-medium hover:underline"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Trending section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold">Trending Now</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
