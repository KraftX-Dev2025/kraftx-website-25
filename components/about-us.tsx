"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface FlipCardProps {
  title: string
  content: string
  icon: React.ReactNode
}

function FlipCard({ title, content, icon }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-64 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
          <div className="text-navy text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-secondary text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center rotate-y-180">
          <p className="text-center text-navy">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default function AboutUs() {
  const cards = [
    {
      title: "Our Vision",
      content:
        "To revolutionize healthcare marketing by bridging the gap between innovative practices and the patients who need them most.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      title: "Our Mission",
      content:
        "To empower healthcare providers with cutting-edge digital marketing strategies that enhance patient acquisition and retention.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      title: "Our Values",
      content:
        "Integrity, innovation, and results drive everything we do. We're committed to ethical marketing practices and measurable outcomes for our clients.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Us</h2>
          <p className="text-lg text-navy max-w-3xl mx-auto">
            KRAFTX is a specialized digital marketing agency dedicated to helping healthcare practices thrive in the
            digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FlipCard title={card.title} content={card.content} icon={card.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

