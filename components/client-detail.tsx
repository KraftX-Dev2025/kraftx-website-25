"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram, Facebook, Linkedin, Youtube, Globe } from "lucide-react"
import { useState } from "react"

interface ClientCardProps {
  name: string
  title: string
  description: string
  image: string
  socialLinks: {
    instagram?: string
    facebook?: string
    linkedin?: string
    youtube?: string
    website?: string
  }
}

function ClientCard({ name, title, description, image, socialLinks }: ClientCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side - Image */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-sm text-white/90">{title}</p>
          </div>
        </div>

        {/* Back side - Details and social links */}
        <div className="absolute w-full h-full backface-hidden bg-accent rounded-xl shadow-lg p-6 flex flex-col justify-between rotate-y-180">
          <div>
            <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
            <p className="text-sm font-medium text-secondary mb-3">{title}</p>
            <p className="text-primary mb-6">{description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-3">Connect with {name.split(" ")[0]}</h4>
            <div className="flex space-x-4">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Youtube size={20} />
                </a>
              )}
              {socialLinks.website && (
                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Globe size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ClientDetail() {
  const clients = [
    {
      name: "Dr. Sarah Johnson",
      title: "Dental Practice Owner",
      description: "Leading dental expert specializing in cosmetic dentistry with over 15 years of experience.",
      image: "/placeholder.svg?height=400&width=300",
      quote:
        "KRAFTX transformed our online presence. We've seen a 40% increase in new patient inquiries since working with them.",
      socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        youtube: "https://youtube.com",
        website: "https://example.com",
      },
    },
    {
      name: "Dr. Michael Chen",
      title: "Medical Director",
      description: "Board-certified physician focused on innovative healthcare delivery and patient experience.",
      image: "/placeholder.svg?height=400&width=300",
      quote:
        "Their understanding of healthcare marketing is unmatched. They helped us navigate compliance while still creating engaging campaigns.",
      socialLinks: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
    {
      name: "Lisa Rodriguez",
      title: "Practice Manager",
      description: "Healthcare administration expert who transformed patient scheduling and practice efficiency.",
      image: "/placeholder.svg?height=400&width=300",
      quote:
        "The ROI we've seen from KRAFTX's strategies has been remarkable. They truly understand the unique challenges of healthcare marketing.",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
    {
      name: "Dr. James Wilson",
      title: "Orthodontist",
      description: "Specialist in advanced orthodontic techniques with a focus on patient comfort and results.",
      image: "/placeholder.svg?height=400&width=300",
      quote:
        "Working with KRAFTX has been a game-changer for our practice. Their team is responsive, creative, and delivers results.",
      socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        youtube: "https://youtube.com",
        website: "https://example.com",
      },
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="client-details" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Clients</h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            We're proud to work with leading healthcare professionals. Hover over each card to learn more about our
            amazing clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ClientCard
                name={client.name}
                title={client.title}
                description={client.description}
                image={client.image}
                socialLinks={client.socialLinks}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <svg className="h-8 w-8 text-secondary mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-primary mb-4">{client.quote}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={client.image || "/placeholder.svg"}
                        alt={client.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-primary">{client.name}</p>
                      <p className="text-sm text-secondary">{client.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Our Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-primary">Average increase in new patient inquiries</p>
            </div>
            <div className="bg-accent rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">65%</div>
              <p className="text-primary">Improvement in search engine rankings</p>
            </div>
            <div className="bg-accent rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">3.5x</div>
              <p className="text-primary">Average return on marketing investment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

