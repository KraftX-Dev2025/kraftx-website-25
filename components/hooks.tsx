"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Hooks() {
  const hooks = [
    "Transform your online presence with data-driven strategies",
    "Attract more patients with targeted digital campaigns",
    "Boost engagement with compelling healthcare content",
    "Maximize ROI with our specialized marketing approach",
  ]

  const [currentHook, setCurrentHook] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHook((prev) => (prev + 1) % hooks.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [hooks.length])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHook}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-primary">{hooks[currentHook]}</h2>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

