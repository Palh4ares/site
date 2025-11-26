import { useState } from "react";

export default function Equipe({ onMemberClick }) {
    const members = [
        {
    name: "Eraldo Palhares",
    role: "CEO",
    image: "/Eraldo.jpg", // Caminho correto para imagens na pasta /public
    text: "Eraldo Palhares - CEO & Desenvolvedor\n\nFundador da PotiguarDev, desenvolvedor full-stack e apaixonado por tecnologia.",
    social: {
        linkedin: "https://www.linkedin.com/",
        whatsapp: "https://wa.me/5584991696213",
        instagram: "https://instagram.com/",
    },
}

        {
            name: "Lourival Barbosa",
            role: "Co-Fundador",
            image: "/public/Lourival.jpg",
            text: "Lourival Barbosa - Co-Fundador & Desenvolvedor\n\nEspecialista em back-end, integra soluções modernas e eficientes.",
            social: {
                linkedin: "https://www.linkedin.com/",
                whatsapp: "https://wa.me/5584999999999",
                instagram: "https://instagram.com/",
            },
        },
        {
            name: "Wilton Araújo",
            role: "UX/UI Designer",
            image: "/public/Wilton.jpg",
            text: "Wilton Araujo - UX/UI Designer\n\nResponsável por criar interfaces intuitivas e experiências incríveis.",
            social: {
                linkedin: "https://www.linkedin.com/",
                whatsapp: "https://wa.me/5584988888888",
                instagram: "https://instagram.com/",
            },
        },

        // ADICIONE OS MEMBROS AQUI (mantém o formato)
        {
            name: "juliany Fonseca",
            role: "GERENTE DE MARKETING",
            image: "/public/juliany.jpg",
            text: "Juliany Fonseca — Gerente de Marketing\n\nResponsável por liderar estratégias de comunicação, branding e criação de campanhas que fortalecem a presença digital da PotiguarDev.",
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Leticia",
            role: "MARKETING",
            image: "/public/Leticia.jpg",
            text: "Leticia — Marketing\n\nAtua na criação de conteúdos, gestão das redes sociais e apoio às campanhas de marketing, garantindo uma presença online consistente e atraente.",
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Rafael cavalcante",
            role: "GERENTE DE PROJETO",
            image: "/public/Rafael.jpg",
            text: "Rafael Cavalcante — Gerente de Projeto\n\nCoordena equipes, organiza processos e garante que cada projeto seja entregue com qualidade, eficiência e dentro do prazo."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Gabriel Rocha",
            role: "DEV - FRONT-END",
            image: "/public/",
            text: "Gabriel Rocha — Desenvolvedor Front-End\n\nEspecialista em interfaces modernas e responsivas, transforma ideias em experiências visuais fluidas e intuitivas."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Wesley Santos",
            role: "DEV - BACK-END",
            image: "/public/Wesley.jpg",
            text: "Wesley Santos — Desenvolvedor Back-End\n\nConstrói a estrutura técnica dos sistemas, garantindo desempenho, segurança e integração eficiente entre serviços."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Marcos Junior",
            role: "DEV - FULL-STACK",
            image: "/public/",
            text: "Marcos Junior — Desenvolvedor Full-Stack\n\nAtua tanto no front quanto no back-end, entregando soluções completas e contribuindo em todas as fases do desenvolvimento."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Denilson Barreto",
            role: "DEV - BACK-END",
            image: "/public/Denilson.jpg",
            text: "Denilson Barreto — Desenvolvedor Back-End\n\nFocado em arquiteturas robustas, APIs eficientes e estruturas escaláveis que garantem a estabilidade dos sistemas."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Kaio Henrique",
            role: "GERENTE DE PROJETO",
            image: "/public/#",
            text: "Kaio Henrique — Gerente de Projeto\n\nResponsável por organizar demandas, alinhar equipes e garantir que cada produto siga o planejamento estratégico da empresa."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "João Victor",
            role: "GERENTE DE RH",
            image: "/public/JoaoVictor.jpg",
            text: "João Victor — Gerente de RH\n\nCuida da gestão de talentos, clima organizacional e processos internos que fortalecem o crescimento e bem-estar da equipe."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
        {
            name: "Carlos Alberto",
            role: "ANALISTA DE REQUISITOS",
            image: "/public/Carlos.jpg",
            text: "Carlos Alberto — Analista de Requisitos\n\nEspecialista em entender as necessidades dos clientes e transformá-las em requisitos claros para o desenvolvimento de soluções eficientes."
,
            social: { linkedin: "#", whatsapp: "#", instagram: "#" },
        },
    ];

    const [index, setIndex] = useState(0);
    const itemsPerPage = 4;

    const next = () => {
        if (index + itemsPerPage < members.length) setIndex(index + itemsPerPage);
    };

    const prev = () => {
        if (index > 0) setIndex(index - itemsPerPage);
    };

    const currentMembers = members.slice(index, index + itemsPerPage);

    return (
        <section id="equipe" className="py-56 px-6 bg-[#E6F3FF] text-[#003366]">
            <h2 className="text-4xl text-center font-bold mb-12">Nossa Equipe</h2>

            <div className="relative max-w-6xl mx-auto">

                {/* SETA ESQUERDA */}
                <button
                    onClick={prev}
                    disabled={index === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 text-4xl px-3
                    ${index === 0 ? "text-gray-300" : "text-[#003366] hover:text-[#0066CC]"}`}
                >
                    ‹
                </button>

                {/* GRID DE MEMBROS */}
                <div className="grid md:grid-cols-4 gap-8 px-10">
                    {currentMembers.map((m, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl text-center shadow-lg cursor-pointer hover:scale-105 transition"
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
                        </div>
                    ))}
                </div>

                {/* SETA DIREITA */}
                <button
                    onClick={next}
                    disabled={index + itemsPerPage >= members.length}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 text-4xl px-3
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
