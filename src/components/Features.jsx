
import { motion } from "framer-motion"

export default function Features() {
  const items = ["Rápido", "Moderno", "Animado"]

  return (
    <section className="p-20 bg-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold mb-10"
      >
        Recursos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-6 bg-gray-200 rounded-xl"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
