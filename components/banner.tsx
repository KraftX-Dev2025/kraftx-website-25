"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicBanner() {
  const hooks = [
    {
      text: "Transform your online presence with data-driven strategies",
      bg: "/background1.jpg",
    },
    {
      text: "Attract more patients with targeted digital campaigns",
      bg: "/background2.jpg",
    },
    {
      text: "Boost engagement with compelling healthcare content",
      bg: "/background3.jpg",
    },
    {
      text: "Maximize ROI with our specialized marketing approach",
      bg: "/background4.jpg",
    },
  ];

  const [currentHook, setCurrentHook] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentHook((prev) => (prev + 1) % hooks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hooks.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHook}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{ backgroundImage: `url(${hooks[currentHook].bg})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-navy" />
      <div className="container mx-auto px-4 z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentHook}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white mb-4 mt-4"
          >
            {hooks[currentHook].text}
          </motion.h1>  
        </AnimatePresence>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg pt-4 text-white max-w-3xl mx-auto"
        >
          KRAFTX is your dedicated digital marketing partner, specializing in healthcare practices. We drive growth,
          engagement, and results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <button className="bg-blue-950 shadow-lg border-white border-2 hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Get Started
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="text-lg mb-4 text-white">Limited Time Offer Ends In:</p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/10 rounded-lg p-4 w-20 text-white">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-xs">Days</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 w-20 text-white">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs">Hours</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 w-20 text-white">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs">Minutes</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 w-20 text-white">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs">Seconds</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

