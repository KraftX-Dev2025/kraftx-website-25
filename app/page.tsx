import Banner from "@/components/banner"
import Hooks from "@/components/hooks"
import AboutUs from "@/components/about-us"
import HowWeGrow from "@/components/how-we-grow"
import ClientDetail from "@/components/client-detail"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Banner />
      {/* <Hooks /> */}
      <AboutUs />
      <HowWeGrow />
      <ClientDetail />
      <ContactUs />
      {/* <CallToAction /> */}
      <Footer />
    </main>
  )
}

