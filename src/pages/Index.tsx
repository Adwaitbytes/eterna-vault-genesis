
import React from 'react';
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-eternavault-dark text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
