"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CircleIcon, Layers, Sparkles, UserRound } from "lucide-react"
import Link from "next/link"
import { SpaceBackground } from "@/components/space-background"

// Dynamic services data
const services = [
  {
    id: 1,
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and workflows without disruption. Our platform adapts to your ecosystem, not the other way around.",
    icon: Layers,
    details: ["API-first architecture", "Pre-built connectors for popular tools", "Custom webhook support"],
  },
  {
    id: 2,
    title: "AI-Powered Efficiency",
    description:
      "Leverage advanced AI algorithms to automate repetitive tasks and uncover insights that drive productivity and innovation.",
    icon: Sparkles,
    details: ["Natural language processing", "Predictive analytics", "Automated workflows"],
  },
  {
    id: 3,
    title: "User-Friendly Interface",
    description:
      "Intuitive design that makes powerful automation accessible to everyone, regardless of technical expertise.",
    icon: UserRound,
    details: ["Drag-and-drop builder", "Customizable dashboards", "Mobile-responsive design"],
  },
]

export default function LandingPage() {
  // Smooth scroll function for navbar links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <SpaceBackground />

      <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <CircleIcon className="h-6 w-6 text-white" />
            <span className="text-xl font-bold">Apollify.ai</span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, "features")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Apollify.ai
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Intelligent automation solutions tailored for your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Floating planet decoration */}
          <div className="absolute right-[10%] top-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 opacity-60 animate-float-slow hidden md:block"></div>
          <div className="absolute left-[15%] bottom-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-950 opacity-40 animate-float hidden md:block"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center p-1 px-3 mb-4 text-sm rounded-full bg-gray-800 text-gray-300">
                  <span className="relative px-2">Powerful Capabilities</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Features</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Discover how Apollify.ai can transform your workflow with these powerful features
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl mt-16">
              {services.map((service, index) => (
                <div key={service.id} className="mb-16 group" style={{ animationDelay: `${index * 150}ms` }}>
                  <div
                    className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="w-full lg:w-1/2">
                      <div className="p-1 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-transparent">
                        <div className="bg-gray-900 p-6 sm:p-10 rounded-xl h-full">
                          <div className="rounded-full bg-gray-800 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                            <service.icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 mb-6 text-lg">{service.description}</p>

                          <ul className="space-y-3">
                            {service.details.map((detail, i) => (
                              <li key={i} className="flex items-center">
                                <div className="mr-3 h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                <p className="text-gray-300">{detail}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                      <div className="relative w-full max-w-md aspect-square">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-transparent opacity-20 animate-pulse-slow"></div>
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 opacity-40 animate-float"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <service.icon className="h-16 w-16 text-white opacity-80" />
                        </div>
                        <div className="absolute inset-0 rounded-full border border-gray-700 opacity-50"></div>

                        {/* Orbiting dots */}
                        <div className="absolute inset-0 animate-spin-slow">
                          <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-white opacity-70 transform -translate-x-1/2"></div>
                        </div>
                        <div className="absolute inset-0 animate-spin-slow-reverse">
                          <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-white opacity-70 transform -translate-x-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Constellation decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="constellation"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Apollify.ai</h2>
                <p className="text-gray-400 md:text-xl">
                  At Apollify.ai, we're on a mission to democratize automation and artificial intelligence, making these
                  powerful technologies accessible to businesses of all sizes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-white" />
                    <p className="text-gray-400">Innovation that solves real problems</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-white" />
                    <p className="text-gray-400">Simplicity in design and functionality</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-white" />
                    <p className="text-gray-400">Transparency in our processes and pricing</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-white" />
                    <p className="text-gray-400">Customer success as our primary metric</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Floating planet decoration */}
          <div className="absolute left-[5%] top-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 opacity-30 animate-pulse-slow hidden lg:block"></div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Have questions or ready to get started? Reach out to our team.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-6 mt-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-gray-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px] bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-gray-700"
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
              </form>
            </div>
          </div>

          {/* Star field decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
            <div className="stars"></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-black relative z-10">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <CircleIcon className="h-5 w-5 text-white" />
            <span className="text-lg font-bold">Apollify.ai</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} Apollify.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
