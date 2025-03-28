
import { BlogPost, Author, Category } from '../types/blog';

export async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('YOUR_API_ENDPOINT/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`YOUR_API_ENDPOINT/posts/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}
