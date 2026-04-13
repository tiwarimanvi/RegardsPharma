/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a server
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            Have questions about our products or want to place a bulk order? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-none shadow-sm bg-primary text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <CardContent className="p-8 lg:p-12 space-y-10 relative z-10">
                <h3 className="text-3xl font-bold">Contact Information</h3>
                <p className="text-primary-foreground/80 text-lg">
                  Reach out to us directly for bulk orders, partnerships, or product inquiries.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <Phone className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-foreground/80 mb-1">Call or WhatsApp</div>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-accent transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <Mail className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-foreground/80 mb-1">Email Us</div>
                      <a href="mailto:info@regardspharma.com" className="text-2xl font-bold hover:text-accent transition-colors">
                        info@regardspharma.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-foreground/80 mb-1">Visit Us</div>
                      <div className="text-lg font-bold leading-relaxed">
                        123 Pharma Plaza, Medical District,<br />Mumbai, India
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Card className="border-slate-200">
                <CardContent className="p-8 flex items-center space-x-6">
                  <div className="bg-slate-100 p-4 rounded-2xl text-slate-600">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Working Hours</div>
                    <div className="text-xl font-bold text-slate-900">Mon - Sat: 9AM - 7PM</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-8 flex items-center space-x-6">
                  <div className="bg-slate-100 p-4 rounded-2xl text-slate-600">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Live Support</div>
                    <div className="text-xl font-bold text-slate-900">Available 24/7 via WhatsApp</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Button asChild size="lg" className="w-full h-16 bg-green-600 hover:bg-green-700 text-xl font-bold">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <MessageSquare className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
