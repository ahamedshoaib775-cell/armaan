"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Bell, TreePine } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Live Tracking",
    description: "Track bin status in real time with continuous IoT sensor updates.",
    size: "col-span-1 row-span-2",
  },
  {
    icon: Gauge,
    title: "Fill-Level Detection",
    description: "Accurate monitoring of waste levels with ultrasonic sensors.",
    size: "col-span-1",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified when the bin is almost full.",
    size: "col-span-1",
  },
  {
    icon: TreePine,
    title: "Sustainable Future",
    description: "Promoting cleaner and greener cities through data-driven waste management.",
    size: "col-span-1 md:col-span-2",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            CORE <span className="gradient-text">FEATURES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to transform waste management into an intelligent, data-driven operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${feature.size} group`}
            >
              <div className="h-full glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-white/5 hover:border-emerald-500/20">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
