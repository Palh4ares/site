import { motion } from "framer-motion";

export default function Services() {
  const servicos = [
    {
      title: "Sites Profissionais",
      desc: "Criação de sites rápidos, modernos e responsivos.",
    },
    {
      title: "Sistemas sob Medida",
      desc: "Desenvolvimento completo para sua empresa.",
    },
    {
      title: "Aplicativos",
      desc: "Apps de delivery, negócios e muito mais.",
    },
    {
      title: "Consultorias",
      desc: "Orientação especializada para o seu negócio.",
    },
    {
      title: "Monitoração e Suporte",
      desc: "Monitoramento contínuo e suporte técnico para seus sistemas.",
    },
    {
      title: "AgroTech",
      desc: "Soluções tecnológicas para o setor agrícola.",
    },
  ];

  return (
    <section id="services" className="py-56 px-6 bg-white text-[#003366]">
      <h2 className="text-4xl text-center font-bold mb-10">Serviços</h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {servicos.map((s, i) => (
          <motion.div
            key={i}
            className="bg-[#E6F3FF] p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}

            // 🔥 Novo hover — apenas um aumento suave
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.25 },
            }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#0066CC]">{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
