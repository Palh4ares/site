import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imagens = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 4000); // troca a cada 4 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Fade suave entre imagens */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imagens[index]})`,
            backgroundPosition: "50% 40%", // foco no rosto
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>

      {/* Camada escura para contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Transforme sua ideia em realidade
        </h1>
        <p className="text-xl">
          Desenvolvimento de sites, sistemas e apps feito com qualidade PotiguarDev.
        </p>
      </div>
    </section>
  );
}
