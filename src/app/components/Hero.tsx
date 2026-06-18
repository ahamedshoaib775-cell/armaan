"use client";

import { motion } from "framer-motion";
import { Wifi, Battery, Signal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg: aesthetic px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium tracking-wide">
                IoT-POWERED WASTE MANAGEMENT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">SMART BINS.</span>
              <br />
              <span className="gradient-text">SMARTER CITIES.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-emerald-400 text-lg sm:text-xl font-semibold tracking-wide mb-4"
            >
              REAL-TIME WASTE MONITORING POWERED BY IoT.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              BinSense is an intelligent IoT device that tracks garbage levels in
              real time and helps build cleaner, smarter and more sustainable
              communities.
            </motion.p>

          </motion.div>

          {/* Right Content - Smart Bin Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Main Smart Bin */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative w-64 h-80 sm:w-80 sm:h-96">
                  {/* Bin Body */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl">
                    {/* Bin Lid */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-56 sm:w-72 h-8 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-t-2xl shadow-lg" />
                    
                    {/* IoT Device on Bin */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center pulse-glow">
                        <Wifi className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Fill Level Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48">
                      <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span>FILL LEVEL</span>
                        <span className="text-emerald-400 font-semibold">75%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Status Dots */}
                    <div className="absolute top-1/2 right-4 flex flex-col gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/30" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Mobile App UI */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-4 sm:-right-8 top-1/4 z-20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="glass rounded-2xl p-4 w-48 shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Signal className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">BIN STATUS</p>
                      <p className="text-sm font-bold text-white">75% Filled</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400">Live Tracking</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-4 sm:-left-8 bottom-1/4 z-20"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="glass rounded-2xl p-4 w-44 shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Battery className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs text-gray-400">DEVICE STATUS</span>
                  </div>
                  <p className="text-lg font-bold text-white">Active</p>
                  <p className="text-xs text-emerald-400 mt-1">Signal: Strong</p>
                </motion.div>
              </motion.div>

              {/* Orbital Rings */}
              <div className="absolute inset-0 -m-20 pointer-events-none">
                <div className="absolute inset-0 border border-emerald-500/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 border border-emerald-500/5 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-emerald-500/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
