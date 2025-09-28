
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-teachGrow-primary text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Teaching Career Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join Learn X and focus on what matters most—delivering quality education—while we handle the rest. Keep 90% of what you earn.
          
        </p>
        <div className="bg-white/10 backdrop-blur p-6 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-3">What You Get for Just ₹999/Year:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
            <div className="flex items-start">
              <span className="text-teachGrow-secondary font-bold mr-2 mt-1">✓</span>
              <p>One-click class setup</p>
            </div>
            <div className="flex items-start">
              <span className="text-teachGrow-secondary font-bold mr-2 mt-1">✓</span>
              <p>Automated payment collection</p>
            </div>
            <div className="flex items-start">
              <span className="text-teachGrow-secondary font-bold mr-2 mt-1">✓</span>
              <p>Secure teaching environment</p>
            </div>
            <div className="flex items-start">
              <span className="text-teachGrow-secondary font-bold mr-2 mt-1">✓</span>
              <p>Student acquisition support</p>
            </div>
            <div className="flex items-start">
              <span className="text-teachGrow-secondary font-bold mr-2 mt-1">✓</span>
              <p>Personal branding tools</p>
            </div>
            <div className="flex items-start">
              <span className="text-teachGrow-secondary font-bold mr-2 mt-1">✓</span>
              <p>90% revenue share</p>
            </div>
          </div>
        </div>
        <Button
          size="lg"
          className="bg-white text-teachGrow-primary hover:bg-gray-100 text-lg px-8"
          asChild
        >
          <Link to="/register">Start Your Teaching Journey</Link>
        </Button>
        <p className="mt-6 text-sm opacity-90">
          Annual fee is non-refundable. First 20 teachers get additional premium features!
        </p>
      </div>
    </section>
  );
};

export default CTA;
