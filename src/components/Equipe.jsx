import { useState } from "react";
import { motion } from "framer-motion";

export default function Equipe({ onMemberClick }) {
    const members = [
        {
            name: "Eraldo Palhares",
            role: "CEO",
            image: "/public/Eraldo.jpg",
            text: "Eraldo Palhares - CEO & Desenvolvedor\n\nFundador da PotiguarDev, desenvolvedor full-stack e apaixonado por tecnologia.",
            social: {
                linkedin: "https://www.linkedin.com/",
                whatsapp: "https://wa.me/5584991696213",
                instagram: "https://instagram.com/eraldopalhares",
            },
        },
        {
            name: "Lourival Barbosa",
            role: "CO-FUNDUNDADOR",
            image: "/public/Lourival.jpg",
            text: "Lourival Barbosa - Co-Fundador & Desenvolvedor\n\nEspecialista em back-end, integra soluções modernas e eficientes.",
            social: {
                linkedin: "https://www.linkedin.com/",
                whatsapp: "https://wa.me/5584994810078",
                instagram: "https://instagram.com/lourival.dev",
            },
        },
        {
            name: "Wilton Araújo",
            role: "UX/UI DESIGNER",
            image: "/public/Wilton.jpg",
            text: "Wilton Araujo - UX/UI Designer\n\nResponsável por criar interfaces intuitivas e experiências incríveis.",
            social: {
                linkedin: "https://www.linkedin.com/",
                whatsapp: "https://wa.me/5584994799700",
                instagram: "https://instagram.com/wil_araujo_",
            },
        },
        {
            name: "Juliany Fonseca",
            role: "GRT DE MARKETING",
            image: "/public/juliany.jpg",
            text: "Juliany Fonseca — Gerente de Marketing\n\nResponsável por liderar estratégias de comunicação, branding e criação de campanhas.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584994310642",
                instagram: "https://www.instagram.com/julianyfonseca_",
            },
        },
        {
            name: "Leticia",
            role: "MARKETING",
            image: "/public/Leticia.jpg",
            text: "Leticia — Marketing\n\nCriação de conteúdos, gestão das redes sociais e apoio às campanhas de marketing.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584996108529",
                instagram: "https://www.instagram.com/pim_leticia",
            },
        },
        {
            name: "Rafael Cavalcante",
            role: "GERENTE DE PROJETO",
            image: "/public/Rafael.jpg",
            text: "Rafael Cavalcante — Gerente de Projeto\n\nCoordena equipes, organiza processos e garante entregas de alta qualidade.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584986230135",
                instagram: "https://www.instagram.com/rafael_cavalcante29",
            },
        },
        {
            name: "Gabriel Rocha",
            role: "DEV FRONT-END",
            image: "/public/perfil.jpg",
            text: "Gabriel Rocha — Desenvolvedor Front-End\n\nCriação de interfaces modernas e responsivas, experiência fluida.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584996425776",
                instagram: "https://www.instagram.com/gabrielrochacab",
            },
        },
        {
            name: "Wesley Santos",
            role: "DEV BACK-END",
            image: "/public/Wesley.jpg",
            text: "Wesley Santos — Desenvolvedor Back-End\n\nAPIs seguras, alto desempenho e integrações eficientes.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5534991806189",
                instagram: "https://www.instagram.com/wesley.dss",
            },
        },
        {
            name: "Marcos Junior",
            role: "DEV FULL-STACK",
            image: "/public/Marco.png",
            text: "Marcos Junior — Desenvolvedor Full-Stack\n\nAtua tanto no front quanto no back-end.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584998635428",
                instagram: "https://www.instagram.com/marcojr1997",
            },
        },
        {
            name: "Denilson Barreto",
            role: "DEV BACK-END",
            image: "/public/Denilson.jpg",
            text: "Denilson Barreto — Desenvolvedor Back-End\n\nAPIs escaláveis e arquitetura robusta.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584988982052",
                instagram: "https://instagram.com/denilsonlb",
            },
        },
        {
            name: "Kaio Henrique",
            role: "GERENTE DE PROJETO",
            image: "/public/Kaio.png",
            text: "Kaio Henrique — Gerente de Projeto\n\nOrganiza demandas e garante alinhamento entre equipes.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584920011584",
                instagram: "https://www.instagram.com/kkaiohenrique",
            },
        },
        {
            name: "João Victor",
            role: "GRTE DE RH",
            image: "/public/Joao.jpg",
            text: "João Victor — Gerente de RH\n\nGestão de talentos e clima organizacional.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584999733338",
                instagram: "https://www.instagram.com/petals_for__armor",
            },
        },
        {
            name: "Carlos Alberto",
            role: "ANALISTA DE REQUISITOS",
            image: "/public/Carlos.jpg",
            text: "Carlos Alberto — Analista de Requisitos\n\nTransforma necessidades em soluções claras.",
            social: {
                linkedin: "#",
                whatsapp: "https://wa.me/5584997078265",
                instagram: "https://www.instagram.com/",
            },
        },
    ];

    const [index, setIndex] = useState(0);
    const itemsPerPage = 5;

    const next = () => {
        if (index + itemsPerPage < members.length) setIndex(index + itemsPerPage);
    };

    const prev = () => {
        if (index > 0) setIndex(index - itemsPerPage);
    };

    const currentMembers = members.slice(index, index + itemsPerPage);

    return (
        <section id="equipe" className="py-56 px-6 bg-white text-[#003366]">

  <motion.h2
    className="text-4xl text-center font-bold mb-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    Nossa Equipe
  </motion.h2>

            <div className="relative max-w-6xl mx-auto">

                {/* SETA ESQUERDA */}
                <button
                    onClick={prev}
                    disabled={index === 0}
                    className={`absolute -left-10 top-1/2 -translate-y-1/2 text-4xl px-3
                    ${index === 0 ? "text-gray-300" : "text-[#003366] hover:text-[#0066CC]"}`}
                >
                    ‹
                </button>

                {/* GRID DE MEMBROS */}
                <div className="grid md:grid-cols-5 gap-5 px-10">
                    {currentMembers.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: idx * 0.10,
                            }}
                            className="
                                bg-white p-6 rounded-2xl text-center shadow-lg 
                                cursor-pointer hover:-translate-y-2 
                                transition-all
                            "
                            onClick={() =>
                                onMemberClick({
                                    image: m.image,
                                    text: m.text,
                                    social: m.social,
                                })
                            }
                        >
                            <div className="w-32 h-32 rounded-full bg-[#CCEAFF] mx-auto mb-4 overflow-hidden">
                                <img src={m.image} className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-xl font-semibold">{m.name}</h3>
                            <p className="text-[#0066CC]">{m.role}</p>
                        </motion.div>
                    ))}
                </div>

                {/* SETA DIREITA */}
                <button
                    onClick={next}
                    disabled={index + itemsPerPage >= members.length}
                    className={`absolute -right-10 top-1/2 -translate-y-1/2 text-4xl px-3
                    ${index + itemsPerPage >= members.length
                        ? "text-gray-300"
                        : "text-[#003366] hover:text-[#0066CC]"}`}
                >
                    ›
                </button>
            </div>
        </section>
    );
}
