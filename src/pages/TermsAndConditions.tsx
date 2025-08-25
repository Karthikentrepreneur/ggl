import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-20 container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-700">Review the policies governing the use of our freight and logistics services.</p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
