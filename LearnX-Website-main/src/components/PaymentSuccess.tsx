
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="max-w-lg mx-auto text-center py-12 px-4">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-20 w-20 text-teachGrow-secondary" />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-teachGrow-dark">Payment Successful!</h1>
      <p className="text-lg mb-6 text-gray-600">
        Thank you for joining LearnX as a teacher. Your registration is now complete.
      </p>

      <div className="bg-teachGrow-muted p-6 rounded-lg mb-8">
        <h3 className="text-xl font-medium mb-4">What happens next?</h3>
        <ul className="text-left space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-teachGrow-secondary font-bold mr-2">1.</span>
            You&apos;ll receive a welcome email with login details within the next 24 hours
          </li>
          <li className="flex items-start">
            <span className="text-teachGrow-secondary font-bold mr-2">2.</span>
            Our team will contact you to schedule your one-on-one onboarding session
          </li>
          <li className="flex items-start">
            <span className="text-teachGrow-secondary font-bold mr-2">3.</span>
            You can start setting up your teacher profile and creating your first course
          </li>
        </ul>
      </div>

      <div className="space-x-4">
        <Button
          variant="default"
          className="bg-teachGrow-primary hover:bg-teachGrow-primary/90"
          asChild
        >
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
