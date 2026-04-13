/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Building2, Target, Heart, Award, CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business dealings.",
    icon: Award,
  },
  {
    title: "Quality",
    description: "Every product we distribute undergoes rigorous quality checks.",
    icon: CheckCircle2,
  },
  {
    title: "Customer First",
    description: "Our logistics and support are designed around our clients' needs.",
    icon: Heart,
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                Our Mission is to <span className="text-primary">Empower</span> Healthcare
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Regards Pharma is a trusted wholesale pharmaceutical distributor led by Mr. M. Tiwari, committed to delivering high-quality medicines from reputed companies to pharmacies and healthcare providers.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="bg-primary p-3 rounded-lg text-white">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Our Vision</h3>
                  <p className="text-sm text-slate-600">To be the most reliable link in the healthcare supply chain.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                  alt="Medical Professional"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide every decision we make at Regards Pharma.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm text-primary mb-2">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 space-y-8">
                <div className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  Leadership
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                  Guided by Experience
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Under the visionary leadership of Mr. M. Tiwari, Regards Pharma has grown from a local distributor to a trusted partner. His commitment to quality and ethical business practices remains the cornerstone of our success.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl">
                    MT
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Mr. M. Tiwari</div>
                    <div className="text-secondary text-sm">Founder & Managing Director</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Office Building"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
