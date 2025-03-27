
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'All', slug: '' },
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
  { name: 'Cybersecurity', slug: 'cybersecurity' },
  { name: 'Data Science', slug: 'data-science' },
  { name: 'Mobile Development', slug: 'mobile-development' },
];

const CategoryFilter: React.FC = () => {
  const location = useLocation();
  const currentCategory = location.pathname.includes('/category/') 
    ? location.pathname.split('/category/')[1] 
    : '';

  return (
    <div className="flex items-center space-x-1 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
      {categories.map((category) => {
        const isActive = category.slug === currentCategory || 
          (category.slug === '' && currentCategory === '');
        
        return (
          <Link
            key={category.slug}
            to={category.slug ? `/category/${category.slug}` : '/'}
            className={cn(
              "whitespace-nowrap rounded-full px-3 py-1 text-sm transition-colors",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
