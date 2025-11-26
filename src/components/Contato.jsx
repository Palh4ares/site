export default function Contato() {
  return (
    <section id="contato" className="py-16 px-6 bg-[#003366] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Fale Conosco</h2>

        <p className="text-blue-200 text-xl mb-12">
          Entre em contato com a PotiguarDev e receba um orçamento rápido e sem complicação.
        </p>

        {/* GRID DOS CONTATOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

          {/* Instagram */}
          <a
            href="https://instagram.com/potiguardev"
            target="_blank"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition text-center"
          >
            <img src="/instagram.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Instagram</h3>
            <p className="text-blue-200 text-sm">@potiguardev</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/557900000000"
            target="_blank"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition text-center"
          >
            <img src="/whatsapp.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <p className="text-blue-200 text-sm">(79) 00000-0000</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/potiguardev"
            target="_blank"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition text-center"
          >
            <img src="/linkedin.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-blue-200 text-sm">PotiguarDev</p>
          </a>

          {/* Email */}
          <a
            href="mailto:contato@potiguardev.com"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition text-center"
          >
            <img src="/mail.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">E-mail</h3>
            <p className="text-blue-200 text-sm">contato@potiguardev.com</p>
          </a>

        </div>
      </div>

      {/* RODAPÉ */}
      <div className="w-full flex justify-end pr-6 mt-10">
        <p className="text-sm opacity-80">
          Desenvolvido por PotiguarDev • 2025
        </p>
      </div>
    </section>
  );
}
