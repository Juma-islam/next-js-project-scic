import React from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[3rem] px-8 py-16 md:px-16 md:py-20 shadow-2xl">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-6">
              <Mail className="text-white w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font- mb-4 ">
              Don't Miss the <span className="text-purple-300">New Drops.</span>
            </h2>
            
            <p className="text-purple-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-80">
              Subscribe to get early access to new Electronics, Fashion trends, and exclusive member-only discounts.
            </p>

            <form  className="max-w-md mx-auto">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all group-hover:bg-white/15"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 bg-white text-purple-900 font-bold rounded-xl hover:bg-purple-100 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span className="hidden sm:inline">Join Now</span>
                  <Send size={18} />
                </button>
              </div>
              <p className="mt-4 text-xs text-purple-300 opacity-60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;