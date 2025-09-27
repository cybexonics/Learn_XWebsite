import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-teachGrow-primary">
            <span className="text-teachGrow-dark">Learn</span>
            <span className="text-teachGrow-accent">X</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/#features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/#how-it-works">How It Works</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/#faq">FAQ</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button
            variant="default"
            className="bg-teachGrow-primary text-white hover:bg-teachGrow-primary/90"
            asChild
          >
            <Link to="/register">Register Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 sm:px-6">
          <div className="flex flex-col gap-2">
            <Button variant="ghost" asChild onClick={toggleMenu}>
              <Link to="/#features" className="w-full text-left">Features</Link>
            </Button>
            <Button variant="ghost" asChild onClick={toggleMenu}>
              <Link to="/#how-it-works" className="w-full text-left">How It Works</Link>
            </Button>
            <Button variant="ghost" asChild onClick={toggleMenu}>
              <Link to="/#faq" className="w-full text-left">FAQ</Link>
            </Button>
            <Button variant="ghost" asChild>
            <Link to="/contact" className="w-full text-left">Contact Us</Link>
          </Button>
            <Button
              variant="default"
              className="bg-teachGrow-primary text-white hover:bg-teachGrow-primary/90 w-full"
              asChild
              onClick={toggleMenu}
            >
              <Link to="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
