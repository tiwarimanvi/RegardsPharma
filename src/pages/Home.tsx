/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import CompanyCard from "@/components/CompanyCard";
import { pharmaData } from "@/data/pharmaData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Home() {
  const featuredCompanies = pharmaData.slice(0, 3);

  return (
    <main>
      <Hero />
      <Highlights />
      
      {/* Featured Companies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl tracking-tight">
                Partnered with Industry Leaders
              </h2>
              <p className="text-lg text-slate-600">
                We distribute products from the most trusted names in the pharmaceutical industry.
              </p>
            </div>
            <Button asChild variant="outline" className="border-slate-200">
              <Link to="/companies">
                View All Companies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CompanyCard company={company} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white sm:text-5xl tracking-tight">
              Ready to partner with us for your medical supplies?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Join hundreds of pharmacies and hospitals that trust Regards Pharma for their bulk medicine requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 text-base font-bold shadow-lg shadow-green-900/20">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-slate-50 border-white h-14 px-8 text-base font-bold">
                <Link to="/products">Browse Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
