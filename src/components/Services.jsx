import { motion } from "framer-motion";
import { FaGlobe, FaCode, FaLightbulb } from "react-icons/fa";

export default function Services() {
  const servicos = [
    {
      title: "Web",
      icon: <FaGlobe size={40} className="text-white" />,
      desc: `Desenvolvemos sistemas web personalizados que atendem às
necessidades do seu negócio, garantindo desempenho,
segurança e escalabilidade.`,
    },
    {
      title: "Softwares",
      icon: <FaCode size={40} className="text-white" />,
      desc: `Desenvolvemos softwares exclusivos para atender às necessidades
específicas do seu negócio. Nossas soluções são projetadas para
aumentar a produtividade, otimizar processos e oferecer a melhor
experiência ao usuário.`,
    },
    {
      title: "Consultoria",
      icon: <FaLightbulb size={40} className="text-white" />,
      desc: `Auxiliamos empresas a transformarem seus desafios em oportunidades
com estratégias tecnológicas inteligentes. Oferecemos consultoria
especializada para otimizar processos, implementar inovações e
alcançar melhores resultados.`,
    },
  ];

  return (
    <section id="services" className="py-56 px-6 bg-white text-[#003366]">

      <motion.h2
        className="text-4xl text-center font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Serviços
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {servicos.map((s, i) => (
          <motion.div
            key={i}
            className="bg-[#E6F3FF] p-8 rounded-2xl shadow-lg text-lg leading-relaxed flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.09,
              transition: { duration: 0.25 },
            }}
          >
            {/* ÍCONE REDONDO */}
            <div className="w-28 h-28 rounded-full bg-[#0066CC] flex items-center justify-center mb-6 shadow-xl">
              {s.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-[#0066CC]">
              {s.title}
            </h3>

            <p className="whitespace-pre-line text-center">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
