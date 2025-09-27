
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataDeletion from "@/components/DataDeletion";

const DataDeletionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <DataDeletion />
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletionPage;
