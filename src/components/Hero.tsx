
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Key, Lock } from "lucide-react";
import GlassmorphicCard from './GlassmorphicCard';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-eternavault-accent/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-eternavault-blue/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex mb-6 px-4 py-2 rounded-full bg-eternavault-dark border border-eternavault-accent/20 text-sm text-eternavault-accent font-medium">
              Secure Your Digital Legacy
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              <span className="heading-gradient">Preserve Your Digital Legacy</span> For Eternity
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              EternaVault empowers you to secure your digital assets and share them with trusted individuals, ensuring your legacy lives on through blockchain technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-eternavault-accent to-eternavault-blue hover:opacity-90 transition-opacity text-white border-none">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-eternavault-accent/30 text-white hover:bg-eternavault-accent/10">
                Learn More
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-eternavault-accent mb-2" />
                <p className="text-xs text-gray-400">Bank-grade Security</p>
              </div>
              <div className="flex flex-col items-center">
                <Lock className="h-8 w-8 text-eternavault-blue mb-2" />
                <p className="text-xs text-gray-400">End-to-end Encryption</p>
              </div>
              <div className="flex flex-col items-center">
                <Key className="h-8 w-8 text-eternavault-magenta mb-2" />
                <p className="text-xs text-gray-400">Blockchain Verified</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-eternavault-magenta/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-eternavault-blue/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
              
              {/* Main showcase card */}
              <GlassmorphicCard className="p-6 md:p-8 relative z-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-eternavault-accent/20">
                      <Shield className="h-6 w-6 text-eternavault-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-medium text-white">Your Digital Vault</h3>
                      <p className="text-sm text-gray-400">Securely stored for your nominees</p>
                    </div>
                  </div>
                  
                  {/* Vault preview */}
                  <div className="grid grid-cols-2 gap-4">
                    <GlassmorphicCard className="p-4 text-center" intensity="light">
                      <h4 className="text-sm font-medium text-eternavault-blue mb-1">Digital Assets</h4>
                      <p className="text-2xl font-bold font-heading">14</p>
                    </GlassmorphicCard>
                    <GlassmorphicCard className="p-4 text-center" intensity="light">
                      <h4 className="text-sm font-medium text-eternavault-magenta mb-1">Nominees</h4>
                      <p className="text-2xl font-bold font-heading">3</p>
                    </GlassmorphicCard>
                    <GlassmorphicCard className="p-4 text-center col-span-2" intensity="light">
                      <h4 className="text-sm font-medium text-eternavault-accent mb-1">NFTs Created</h4>
                      <p className="text-2xl font-bold font-heading">5</p>
                    </GlassmorphicCard>
                  </div>
                  
                  <div className="h-px w-full bg-white/10"></div>
                  
                  <Button className="w-full bg-eternavault-accent hover:bg-eternavault-accent2 text-white">
                    Create Your Vault
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
