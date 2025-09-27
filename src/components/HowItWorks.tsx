
import React from "react";

const StepCard = ({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-teachGrow-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Register Once & Pay ₹999",
      description: "Complete a simple registration and make a one-time annual payment to unlock all platform features.",
    },
    {
      number: 2,
      title: "Set Up Your Classes",
      description: "Create courses, schedule classes, and set your prices—all with our intuitive, one-click tools.",
    },
    {
      number: 3,
      title: "Get Students & Teach",
      description: "We help promote your profile while you focus on delivering exceptional educational experiences.",
    },
    {
      number: 4,
      title: "Collect Payments Automatically",
      description: "Students pay upfront, and you receive 90% of all fees directly to your bank account—no chasing required.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-teachGrow-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teachGrow-dark mb-4">How Learn X Works For You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform eliminates the technical and administrative hurdles of online teaching, so you can focus on what you do best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
