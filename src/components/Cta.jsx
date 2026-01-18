import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Sparkles } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-8 relative bg-white overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0"></div>
      
      {/* Abstract Decorative Shapes */}
   
      <div className="container mx-auto px-6  relative z-10">
        <div className="max-w-4xl mx-auto  backdrop-blur-xl border border-white/20 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 text-black py-2 rounded-full   text-sm font-medium mb-8">
            <Sparkles size={16} className="text-black" />
            <span>Limited Time: Free shipping on first order</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight tracking-tight">
            Ready to Elevate Your <br />
            <span className="font-bold text-black ">
              Digital Lifestyle?
            </span>
          </h2>
          
          <p className="text-black text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ shoppers who trust ItemHub for the latest in electronics, premium fashion, and high-end accessories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/items"
              className="group relative px-10 py-5 bg-white text-purple-900 font-black rounded-2xl hover:bg-purple-50 transition-all shadow-xl hover:shadow-white/20 flex items-center gap-3 overflow-hidden"
            >
              <ShoppingCart size={20} />
              <span>Browse Products</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/login"
              className="px-10 py-5 bg-transparent border-2 border-white/30 text-black font-bold rounded-2xl hover:bg-white/10 hover:border-white transition-all"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;