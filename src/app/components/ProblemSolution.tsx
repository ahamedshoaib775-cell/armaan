"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  ShieldAlert,
  CheckCircle2,
  BarChart3,
  Route,
  Leaf,
} from "lucide-react";

const problemItems = [
  { icon: AlertTriangle, text: "Overflowing bins & unclean surroundings" },
  { icon: ShieldAlert, text: "Health risks from waste accumulation" },
  { icon: MapPin, text: "Inefficient collection routes" },
  { icon: Clock, text: "Wasted fuel & time" },
  { icon: DollarSign, text: "Higher operational costs" },
];

const solutionItems = [
  { icon: TrendingUp, text: "Real-time bin monitoring" },
  { icon: CheckCircle2, text: "Instant fill-level alerts" },
  { icon: BarChart3, text: "Data-driven insights & analytics" },
  { icon: Route, text: "Optimized collection routes" },
  { icon: Leaf, text: "Lower costs, higher efficiency" },
];

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<"problem" | "solution">("problem");

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            OVERFLOW ISN&apos;T A WASTE PROBLEM.
            <br />
            <span className="gradient-text">IT&apos;S A DATA PROBLEM.</span>
          </h2>
        </motion.div>

        {/* Toggle Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-full glass">
            <button
              onClick={() => setActiveTab("problem")}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "problem"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "problem" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-red-500/20 rounded-full border border-red-500/30"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                The Current Reality
              </span>
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "solution"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "solution" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-emerald-500/20 rounded-full border border-emerald-500/30"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The BinSense Solution
              </span>
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "problem" ? (
              <motion.div
                key="problem"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  {problemItems.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass rounded-3xl p-8 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    No Real-Time Data.
                    <br />
                    No Visibility.
                    <br />
                    <span className="text-red-400">Just Problems.</span>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Traditional waste management operates blindly, leading to
                    inefficiencies and mounting costs.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4 order-2 md:order-1">
                  {solutionItems.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass rounded-3xl p-8 text-center order-1 md:order-2"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center pulse-glow">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Smarter Data.
                    <br />
                    Smarter Decisions.
                    <br />
                    <span className="gradient-text">Better Cities.</span>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    BinSense transforms waste management with intelligent IoT
                    sensors and real-time analytics.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
