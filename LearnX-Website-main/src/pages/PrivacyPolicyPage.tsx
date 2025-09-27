
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
