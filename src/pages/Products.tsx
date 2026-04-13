/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { pharmaData } from "@/data/pharmaData";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search, Filter, X, PackageSearch } from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCompany]);

  const allProducts = useMemo(() => {
    return pharmaData.flatMap((company) =>
      company.products.map((product) => ({
        ...product,
        companyName: company.name,
        companyId: company.id,
      }))
    );
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCompany = selectedCompany === "all" || product.companyId === selectedCompany;
      return matchesSearch && matchesCompany;
    });
  }, [allProducts, searchQuery, selectedCompany]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Product Catalog</h1>
            <p className="text-lg text-slate-600">
              Browse our extensive range of pharmaceutical products. Search by name or filter by manufacturer.
            </p>
          </div>
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Search medicines, categories..."
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64">
            <div className="bg-white p-4 lg:p-6 rounded-2xl border border-slate-200 shadow-sm lg:sticky lg:top-32">
              <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                <Filter className="h-4 w-4 text-primary" />
                <h3 className="font-bold text-slate-900">Manufacturers</h3>
              </div>
              
              {/* Desktop Sidebar / Mobile Horizontal Scroll */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                <button
                  onClick={() => setSelectedCompany("all")}
                  className={`whitespace-nowrap lg:whitespace-normal px-4 py-2 rounded-lg text-sm transition-colors shrink-0 lg:shrink ${
                    selectedCompany === "all"
                      ? "bg-accent text-primary font-bold"
                      : "text-slate-600 hover:bg-slate-50 border border-transparent lg:border-0"
                  }`}
                >
                  All Companies
                </button>
                {pharmaData.map((company) => (
                  <button
                    key={company.id}
                    onClick={() => setSelectedCompany(company.id)}
                    className={`whitespace-nowrap lg:whitespace-normal px-4 py-2 rounded-lg text-sm transition-colors shrink-0 lg:shrink ${
                      selectedCompany === company.id
                        ? "bg-accent text-primary font-bold"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent lg:border-0"
                    }`}
                  >
                    {company.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500">
                Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> products
              </p>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={`${product.companyId}-${product.id}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductCard product={product} companyName={product.companyName} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="bg-slate-100 p-6 rounded-full">
                    <PackageSearch className="h-12 w-12 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">No products found</h3>
                  <p className="text-slate-500 max-w-xs">
                    We couldn't find any products matching your search criteria. Try adjusting your filters.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCompany("all");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
