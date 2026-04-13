/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Truck, Zap, Users } from "lucide-react";

const features = [
  {
    title: "Reliable Supply Chain",
    description: "End-to-end logistics management ensuring your stock is always replenished on time.",
    icon: Truck,
    color: "bg-accent text-primary",
  },
  {
    title: "Quality Assurance",
    description: "We only partner with WHO-GMP certified manufacturers to ensure the highest standards.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Competitive Pricing",
    description: "Direct distribution model allows us to offer the best bulk rates in the market.",
    icon: Zap,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Expert Support",
    description: "Dedicated account managers to help you with orders and regulatory compliance.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl tracking-tight">
            Why Choose Regards Pharma?
          </h2>
          <p className="text-lg text-slate-600">
            We are committed to excellence in pharmaceutical distribution, focusing on reliability, quality, and affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className={`inline-flex p-3 rounded-xl mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
