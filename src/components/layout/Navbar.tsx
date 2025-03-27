
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-heading font-bold text-xl bg-gradient-to-r from-techpurple-600 to-techblue-600 text-transparent bg-clip-text">TechBlog</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <Link to="/category/web-development" className="transition-colors hover:text-primary">Web Dev</Link>
            <Link to="/category/artificial-intelligence" className="transition-colors hover:text-primary">AI</Link>
            <Link to="/category/cybersecurity" className="transition-colors hover:text-primary">Security</Link>
            <Link to="/about" className="transition-colors hover:text-primary">About</Link>
            <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link to="/" className="flex items-center">
              <span className="font-heading font-bold text-xl">TechBlog</span>
            </Link>
            <div className="my-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-muted-foreground">Home</Link>
                <Link to="/category/web-development" className="text-muted-foreground">Web Dev</Link>
                <Link to="/category/artificial-intelligence" className="text-muted-foreground">AI</Link>
                <Link to="/category/cybersecurity" className="text-muted-foreground">Security</Link>
                <Link to="/about" className="text-muted-foreground">About</Link>
                <Link to="/contact" className="text-muted-foreground">Contact</Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className={cn("flex items-center", isSearchOpen ? "w-full" : "hidden md:flex")}>
            {isSearchOpen && (
              <Button 
                variant="ghost" 
                className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close Search</span>
              </Button>
            )}
            <div className={cn("relative", isSearchOpen ? "w-full" : "w-60")}>
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search articles..." 
                className="w-full pl-8"
              />
            </div>
          </div>
          
          {!isSearchOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
