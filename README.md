# Tech Blog - Customization Guide

This document provides instructions on how to customize the blog application and integrate it with external data sources for dynamic content.

## Table of Contents

- [Project Overview](#project-overview)
- [Customizing the Blog](#customizing-the-blog)
- [Fetching Blog Posts Dynamically](#fetching-blog-posts-dynamically)
- [Development Guide](#development-guide)
- [Deployment](#deployment)

## Project Overview

This is a modern, responsive blog application built with:

- **React** - UI framework
- **React Router** - For navigation and routing
- **TypeScript** - For type safety
- **Tailwind CSS** - For styling
- **shadcn/ui** - For UI components

## Customizing the Blog

### Theme and Styling

The blog uses Tailwind CSS for styling. To customize the theme:

1. Modify the `tailwind.config.ts` file to adjust colors, fonts, and other design tokens.

```typescript
// Example: Updating primary color
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // Change this to your preferred color
          // Add other shades as needed
        },
        // Add other color customizations
      },
    },
  },
}
```

2. To change fonts, update the font imports in the `index.css` file:

```css
/* Add your custom font imports here */
@import url('https://fonts.googleapis.com/css2?family=Your+Font+Name:wght@400;500;700&display=swap');

/* Then update the font-family in tailwind.config.ts */
```

### Layout Customization

To modify the layout structure:

1. Edit the `src/components/layout/Layout.tsx` file to change the main layout structure
2. Update `src/components/layout/Navbar.tsx` to customize the navigation
3. Update `src/components/layout/Footer.tsx` to modify the footer

## Fetching Blog Posts Dynamically

By default, the blog uses mock data from `src/lib/data.ts`. To fetch data from an external source:

### 1. Create API Service

Create a new file for your API service:

```typescript
// src/services/blogService.ts

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

// Add more functions for other data fetching needs
```

### 2. Create Types for Your Data

Define types that match your API response structure:

```typescript
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

// Add more types as needed
```

### 3. Use React Query for Data Fetching

Install React Query if it's not already installed:

```bash
npm install @tanstack/react-query
```

Then update your components to use React Query:

```typescript
// Example: Home.tsx
import { useQuery } from '@tanstack/react-query';
import { fetchPosts, fetchTrendingPosts } from '../services/blogService';

const Home = () => {
  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
  
  const { data: trendingPosts, isLoading: trendingLoading } = useQuery({
    queryKey: ['trending-posts'],
    queryFn: () => fetchTrendingPosts(4),
  });
  
  if (postsLoading || trendingLoading) {
    return <div>Loading...</div>;
  }
  
  // Render your components with the fetched data
  // ...
};
```

### 4. Handle Environment Variables

Create a `.env` file for your API configuration:

```
VITE_API_BASE_URL=https://your-api-domain.com/api
```

Then use it in your service:

```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    // Rest of the code
  }
  // ...
}
```

### 5. Seamlessly Switch Between Mock and Real Data

Create a configuration file to easily switch between mock and real data:

```typescript
// src/config.ts

export const config = {
  useMockData: false, // Set to true to use mock data, false to use real API
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
};
```

Then in your data service:

```typescript
// src/services/dataService.ts
import { config } from '../config';
import * as mockData from '../lib/data';

export async function getPosts() {
  if (config.useMockData) {
    return mockData.blogPosts;
  }
  
  // Real API call
  const response = await fetch(`${config.apiBaseUrl}/posts`);
  return await response.json();
}
```

## Development Guide

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd your-project-name

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

To deploy this application:

1. Build the project using `npm run build`
2. Deploy the contents of the `dist` directory to your web server or hosting platform

### Specific Deployment Options

- **Netlify**: Connect your GitHub repository and configure build settings
- **Vercel**: Import your project from GitHub and configure build settings
- **GitHub Pages**: Push the `dist` directory to the `gh-pages` branch

## Troubleshooting

If you encounter issues:

1. Check the console for error messages
2. Verify your API endpoints are correct and responding
3. Ensure your environment variables are properly set
4. Check that your data structure matches the expected types

## Contributing

To contribute to this project, please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
