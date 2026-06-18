"use client";

import { motion } from "framer-motion";
import { MapPin, Route, TrendingUp, Users, Truck, Clock } from "lucide-react";

const metrics = [
  { icon: Route, label: "Optimized Routes", value: "124", change: "+23%" },
  { icon: MapPin, label: "Active Locations", value: "Sector 12", sub: "Main Street" },
  { icon: TrendingUp, label: "Efficiency", value: "94%", change: "+12%" },
  { icon: Users, label: "Cities Served", value: "48", change: "+8" },
];

export default function Dashboard() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="text-sm text-emerald-400 font-medium tracking-wide">
              PLATFORM
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Command Center for
            <br />
            <span className="gradient-text">Smart Waste Management</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The BinSense Dashboard gives you complete visibility and control
            over your entire waste management ecosystem.
          </p>
        </motion.div>

        {/* Dashboard Showcase */}
        <div className="relative">
          {/* Main Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Laptop Frame */}
            <div className="relative mx-auto max-w-5xl">
              {/* Screen */}
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-t-2xl sm:rounded-t-3xl border border-gray-800/50 p-4 sm:p-6 overflow-hidden">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-gray-800/50 rounded-full flex items-center px-3">
                      <span className="text-xs text-gray-500">dashboard.binsense.io</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Top Stats Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="glass rounded-xl p-3 sm:p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <metric.icon className="w-4 h-4 text-emerald-400" />
                          <span className="text-xs text-gray-400">{metric.label}</span>
                        </div>
                        <div className="flex items-end gap-2">
                          <span className="text-lg sm:text-2xl font-bold text-white">
                            {metric.value}
                          </span>
                          {metric.change && (
                            <span className="text-xs text-emerald-400 mb-1">
                              {metric.change}
                            </span>
                          )}
                        </div>
                        {metric.sub && (
                          <p className="text-xs text-gray-500 mt-1">{metric.sub}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="glass rounded-xl p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-white">
                        Fill Level Trends
                      </h3>
                      <div className="flex gap-2">
                        <span className="text-xs text-gray-400 px-2 py-1 rounded-full bg-gray-800/50">
                          Last 7 Days
                        </span>
                      </div>
                    </div>
                    {/* Simulated Chart */}
                    <div className="h-32 sm:h-48 flex items-end gap-2">
                      {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                          className="flex-1 bg-gradient-to-t from-emerald-500/40 to-emerald-400/20 rounded-t-lg relative group"
                        >
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-emerald-400 font-medium">
                            {height}%
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg mx-8" />
              <div className="h-2 bg-gray-800 rounded-b-xl mx-16" />
            </div>

            {/* Floating Mobile UI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -right-4 sm:right-8 top-1/4 z-20 hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 glass rounded-3xl p-4 border border-emerald-500/20 shadow-2xl"
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-xs font-semibold text-white">Main Street</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>

                {/* Status Card */}
                <div className="bg-gray-800/50 rounded-xl p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Bin Status</span>
                    <span className="text-xs text-emerald-400 font-semibold">
                      75% Full
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                    <Truck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">Next Pickup</p>
                    <p className="text-xs font-semibold text-white">2h 30m</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                    <Clock className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">Last Update</p>
                    <p className="text-xs font-semibold text-white">Just now</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Notification */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -left-4 sm:left-8 top-1/3 z-20 hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass rounded-2xl p-4 border border-emerald-500/20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center pulse-glow">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Route Optimized
                    </p>
                    <p className="text-xs text-gray-400">
                      Saved 2.4 hours today
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
