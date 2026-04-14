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
    </main>
  );
}
