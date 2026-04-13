/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Company } from "@/data/pharmaData";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="overflow-hidden group hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-accent p-3 rounded-xl text-primary">
            <Building2 className="h-6 w-6" />
          </div>
          <Badge variant="secondary" className="bg-slate-100 text-primary">
            {company.products.length} Products
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
          {company.name}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {company.description}
        </p>
        <Link
          to={`/companies?id=${company.id}`}
          className="text-sm font-semibold text-primary flex items-center group/link"
        >
          View Products <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}
