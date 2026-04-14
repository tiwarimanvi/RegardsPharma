/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { MessageSquare, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-slate-900 p-8 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/5">
          {/* Vibrant background gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full -mr-64 -mt-64 blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full -ml-64 -mb-64 blur-[100px]" />

          <div className="text-center lg:text-left space-y-6 relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to scale your <span className="text-blue-400">pharmacy?</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              Join 500+ healthcare providers getting bulk medicines at wholesale prices.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto relative z-10">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white h-14 sm:h-16 px-4 sm:px-10 text-base sm:text-xl font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all hover:scale-105 active:scale-95 border-none">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageSquare className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" /> WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 sm:h-16 px-4 sm:px-10 text-base sm:text-xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105 active:scale-95 border-none">
              <Link to="/products" className="flex items-center justify-center">
                <BookOpen className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" /> Catalog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
