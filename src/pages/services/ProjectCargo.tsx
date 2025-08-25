import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ProjectCargo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Project Cargo Services
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-justify">
              GGL Australia specializes in project cargo logistics, providing tailored solutions for
              the transport of heavy and oversized equipment. Our services include route surveys,
              lifting plans, and end-to-end project management to ensure safe and efficient delivery.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCargo;
