import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KRAFTX</h3>
            <p className="mb-4">Your dedicated digital marketing partner for healthcare practices.</p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className=" hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className=" hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className=" hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-we-grow" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#client-details" className="hover:text-accent transition-colors">
                  Client Details
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>SEO Optimization</li>
              <li>Content Marketing</li>
              <li>Social Media Management</li>
              <li>PPC Advertising</li>
              <li>Website Development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-accent" />
                <span>123 Healthcare Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-accent" />
                <span>contact@kraftx.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KRAFTX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

