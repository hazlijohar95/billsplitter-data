
import React from 'react';
import BillSplitter from '../components/BillSplitter';
import HitCounter from '../components/HitCounter';
import { Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center bg-black" style={{ 
      backgroundImage: `url('/lovable-uploads/49dccefb-254e-4922-b92b-bdb992c26cdd.png')`,
      backgroundBlendMode: 'screen',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Matrix-like overlay with slight opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-0"></div>
      
      <div className="relative z-10 w-full max-w-md p-6 backdrop-blur-md bg-black/40 border border-green-500/20 rounded-lg shadow-xl shadow-green-500/10 animate-fade-in">
        <BillSplitter />
      </div>
      
      {/* Invoice button */}
      <div className="mt-6 z-10 relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <a 
          href="https://www.cynco.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-center"
        >
          <Button
            className="px-8 py-6 bg-black text-green-400 border border-green-500/50 rounded-lg font-mono relative overflow-hidden group-hover:text-white transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
            <Sparkles className="mr-2 h-5 w-5 inline-block relative" />
            <span className="relative">Try my free invoice</span>
          </Button>
        </a>
      </div>
      
      <div className="mt-4 text-green-400 text-sm font-semibold z-10 hover:text-green-300 transition-all duration-300">
        Like this? <a href="https://buymeacoffee.com/hazlijohar" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300 transition-colors">Donate</a>
      </div>
      
      <HitCounter />
    </div>
  );
};

export default Index;
