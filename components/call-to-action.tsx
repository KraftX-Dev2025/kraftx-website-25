"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CallToAction() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Healthcare Practice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8"
          >
            Book a free consultation today and receive a complimentary dental marketing hamper worth $250!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-lg mb-4">Limited Time Offer Ends In:</p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/10 rounded-lg p-4 w-20">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs">Days</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 w-20">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 w-20">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs">Minutes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 w-20">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs">Seconds</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="bg-navy text-white hover:bg-accent/90 hover:text-navy font-bold py-4 px-10 rounded-full text-lg transition-colors">
              Book Your Free Consultation
            </button>
            <p className="mt-4 text-sm">No obligation. Cancel anytime.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

