"use client";

import { motion } from "framer-motion";
import { Quote, Leaf, TrendingDown, TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 sm:pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#020202]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder's Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 mb-8">
            <Quote className="w-8 h-8 text-emerald-400" />
          </div>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed max-w-4xl mx-auto mb-8">
            &ldquo;We&apos;re not just building a product. We&apos;re building a cleaner future.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Armaan Shariff</p>
              <p className="text-emerald-400 text-sm">Founder, BinSense</p>
            </div>
          </div>
        </motion.div>

        {/* Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-12 mb-16"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Lower Costs</h3>
              <p className="text-gray-400 text-sm">Reduce operational expenses with optimized collection routes.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Higher Efficiency</h3>
              <p className="text-gray-400 text-sm">Data-driven decisions for maximum operational output.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Cleaner Tomorrow</h3>
              <p className="text-gray-400 text-sm">Building sustainable cities for future generations.</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">BinSense</span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              Building the future of intelligent waste management, one bin at a time.
            </p>
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} BinSense. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
