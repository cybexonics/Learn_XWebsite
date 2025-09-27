
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentSuccess from "@/components/PaymentSuccess";

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-teachGrow-muted">
        <PaymentSuccess />
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;
