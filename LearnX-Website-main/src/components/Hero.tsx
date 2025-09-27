
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-teachGrow-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-slide-up">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-teachGrow-dark mb-6">
              Teach Professionally Online. <span className="text-teachGrow-primary">Get Paid On Time.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Join Learn X and transform your online teaching experience. No more payment hassles, link sharing confusion, or student acquisition struggles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teachGrow-primary hover:bg-teachGrow-primary/90 text-white text-lg px-8"
                asChild
              >
                <Link to="/register">Start Teaching</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-teachGrow-primary text-teachGrow-primary hover:bg-teachGrow-primary/10"
                asChild
              >
                <Link to="/#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <div className="bg-teachGrow-primary text-white px-4 py-2 rounded-t-md -mt-12 mb-6 inline-block">
                Limited Time Offer
              </div>
              <h2 className="text-2xl font-bold mb-4">Join for Just ₹999/Year</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-teachGrow-secondary font-bold mr-2">✓</span>
                  Keep 90% of all student fees
                </li>
                <li className="flex items-start">
                  <span className="text-teachGrow-secondary font-bold mr-2">✓</span>
                  One-click professional class setup
                </li>
                <li className="flex items-start">
                  <span className="text-teachGrow-secondary font-bold mr-2">✓</span>
                  Automated payment collection
                </li>
                <li className="flex items-start">
                  <span className="text-teachGrow-secondary font-bold mr-2">✓</span>
                  Secure, private teaching environment
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-lg font-semibold text-center mb-4">
                  First 20 teachers get special features
                </p>
                <Button
                  className="w-full bg-teachGrow-secondary hover:bg-teachGrow-secondary/90 text-white text-lg"
                  asChild
                >
                  <Link to="/register">Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
