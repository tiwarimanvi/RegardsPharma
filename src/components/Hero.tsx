/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-accent border border-primary/10 px-3 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Trusted Wholesale Partner
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Supplying <span className="text-primary">Quality</span> Healthcare Solutions
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Regards Pharma is a premier wholesale distributor, bridging the gap between top pharmaceutical manufacturers and healthcare providers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-16 px-10 font-bold shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
                <Link to="/products">
                  Explore Catalog <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg h-16 px-10 border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  Get a Quote
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-xs text-slate-500 uppercase font-medium tracking-wider">Companies</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-xs text-slate-500 uppercase font-medium tracking-wider">Products</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-xs text-slate-500 uppercase font-medium tracking-wider">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
                alt="Pharmaceutical Distribution"
                className="w-full h-auto rounded-xl object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center space-x-3 z-20"
            >
              <div className="bg-green-100 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Fast Delivery</div>
                <div className="text-[10px] text-slate-500">Reliable Logistics</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center space-x-3 z-20"
            >
              <div className="bg-accent p-2 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Certified Quality</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
