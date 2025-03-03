"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "EduHub transformed how we manage our school. Student registration is now a breeze, and the financial tracking is exceptional.",
      author: "Dr. Sarah Johnson",
      role: "School Principal",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The student profiles and academic tracking features have made it so much easier to monitor progress and communicate with parents.",
      author: "Michael Thompson",
      role: "Head Teacher",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a school administrator, the payment tracking and event management tools have saved me countless hours of work.",
      author: "Jennifer Rodriguez",
      role: "Administrative Officer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Educators Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what educational professionals are saying about our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-muted/20 p-8 rounded-lg border relative"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10,8H6A6,6,0,0,0,6,20h4V16H8a2,2,0,0,1,0-4h2Zm16,8H24a2,2,0,0,1,0-4h2V8H22a6,6,0,0,0,0,12h4Z" />
                </svg>
              </div>
              <p className="mb-4 text-lg italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

