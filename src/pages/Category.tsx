import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PostCard from "@/components/blog/PostCard";
import { getPostsByCategory } from "@/lib/data";

const Category = () => {
  const { category } = useParams();
  const formattedCategory = category ? category.replace("-", " ") : "";

  const posts = getPostsByCategory(formattedCategory);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold">
            {formattedCategory
              ? `${
                  formattedCategory.charAt(0).toUpperCase() +
                  formattedCategory.slice(1)
                } Articles`
              : "All Articles"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {`Showing ${posts.length} article${posts.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {/* Posts grid */}
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              We couldn't find any articles in this category. Please check back
              later.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
