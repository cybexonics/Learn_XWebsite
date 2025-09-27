
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Payment from "@/components/Payment";

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-teachGrow-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">Complete Your Payment</h1>
          <Payment />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
