// src/types/blog.ts

export interface Author {
    name: string;
    avatar: string;
    bio: string;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: string;
    author: Author;
    readingTime: string;
    date: string;
    views: number;
    related?: string[];
  }