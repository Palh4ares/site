import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#top" },
    { label: "Serviços", href: "#services" },
    { label: "Eventos", href: "#eventos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#top" className="flex items-center gap-2">
          <img src="/src/public/potiguardev.png" alt="PotiguarDev" className="h-10" />
          <span className="text-2xl font-bold text-[#003366]"></span>
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#003366] font-medium hover:text-[#0066CC] transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-3xl text-[#003366]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 animate-fadeIn">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#003366] text-lg font-medium hover:text-[#0066CC]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
