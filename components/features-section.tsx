"use client"

import { motion } from "framer-motion"
import { UserPlus, CreditCard, Calendar, FileText, BarChart3, MessageSquare } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <UserPlus className="h-12 w-12 text-primary" />,
      title: "Student Registration",
      description: "Simple registration process with document upload and profile creation.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "Fee Payment",
      description: "Secure online payment processing with receipt generation and payment history.",
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: "Event Management",
      description: "Schedule and manage events, send notifications, and track attendance.",
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Academic Records",
      description: "Store and manage grades, attendance, and progression through academic years.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Reports & Analytics",
      description: "Generate comprehensive reports on student performance and institutional metrics.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Communication",
      description: "Built-in messaging system between students, teachers, and administration.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features for Modern Educational Institutions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Everything you need to manage your institution efficiently in one platform
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg p-8 shadow-sm border transition-all hover:shadow-md"
              variants={item}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

