/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { pharmaData } from "@/data/pharmaData";
import CompanyCard from "@/components/CompanyCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Building2, Package, Search, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Companies() {
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get("id");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCompany = pharmaData.find((c) => c.id === companyId);

  const filteredCompanies = useMemo(() => {
    return pharmaData.filter((company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {selectedCompany ? (
            <motion.div
              key="company-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 lg:w-1/4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-32">
                    <Button asChild variant="ghost" className="mb-6 -ml-2 text-slate-500 hover:text-primary">
                      <Link to="/companies">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Companies
                      </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">{selectedCompany.name}</h1>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {selectedCompany.description}
                    </p>
                    <Separator className="mb-6" />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 flex items-center">
                          <Package className="h-4 w-4 mr-2" /> Total Products
                        </span>
                        <span className="font-bold text-slate-900">{selectedCompany.products.length}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Product Catalog</h2>
                    <p className="text-slate-500">Browsing all medicines manufactured by {selectedCompany.name}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedCompany.products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <ProductCard product={product} companyName={selectedCompany.name} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="companies-list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="text-left max-w-3xl space-y-4">
                  <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Partner Companies</h1>
                  <p className="text-lg text-slate-600">
                    We collaborate with {pharmaData.length} leading pharmaceutical manufacturers to bring you high-quality healthcare products.
                  </p>
                </div>
                <div className="w-full md:w-80 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Search manufacturers..."
                    className="pl-10 h-12 bg-white border-slate-200 focus:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompanies.map((company, index) => (
                  <motion.div
                    key={company.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.02 }}
                  >
                    <CompanyCard company={company} />
                  </motion.div>
                ))}
              </div>
              
              {filteredCompanies.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-slate-500">No manufacturers found matching "{searchQuery}"</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
