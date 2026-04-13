/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/pharmaData";

interface ProductCardProps {
  product: Product;
  companyName: string;
}

export default function ProductCard({ product, companyName }: ProductCardProps) {
  return (
    <Card className="group hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-accent p-2 rounded-lg text-primary">
            <Package className="h-5 w-5" />
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center text-xs text-slate-500 mb-4">
          <Building2 className="h-3 w-3 mr-1" />
          {companyName}
        </div>
        
        <p className="text-sm text-slate-600 leading-relaxed">
          {product.description}
        </p>
      </CardContent>
    </Card>
  );
}
