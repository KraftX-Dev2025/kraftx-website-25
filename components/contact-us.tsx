"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <section id="contact-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-navy font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-navy max-w-3xl mx-auto">
            Have questions or ready to elevate your healthcare practice? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl bg-navy text-white shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-navy hover:bg-green-700 font-bold py-3 px-6 rounded-md transition-colors flex items-center"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="bg-navy text-white rounded-xl shadow-lg p-4">
              <h3 className="text-2xl font-bold mb-6">Get in Touch </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-secondary">123 Healthcare Avenue, Medical District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone Number</h4>
                    <p className="text-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Address</h4>
                    <p className="text-secondary">contact@kraftx.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-navy text-white rounded-xl shadow-lg p-6">
              <h4 className="font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="">Monday - Friday</span>
                  <span className="">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="">Saturday</span>
                  <span className="">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="">Sunday</span>
                  <span className="">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

