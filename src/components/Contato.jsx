export default function Contato() {
  return (
    
    <section
    
      id="contato"
      className="relative py-5 px-6 bg-[#003366] text-white rounded-tl-[300px] rounded-tr-[300px]  shadow-2xl overflow-hidden"
    >
      

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Fale Conosco</h2>

        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-14">
          Entre em contato com a PotiguarDev e receba um orçamento rápido e sem complicação.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="https://instagram.com/potiguardev"
            target="_blank"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition shadow-lg backdrop-blur-sm border border-white/10 hover:scale-[1.03]"
          >
            <img src="/instagram.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Instagram</h3>
            <p className="text-blue-200 text-sm">@potiguardev</p>
          </a>

          <a
            href="https://wa.me/557900000000"
            target="_blank"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition shadow-lg backdrop-blur-sm border border-white/10 hover:scale-[1.03]"
          >
            <img src="/whatsapp.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <p className="text-blue-200 text-sm">(84) 9145-6441</p>
          </a>

          <a
            href="https://www.linkedin.com/company/potiguardev"
            target="_blank"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition shadow-lg backdrop-blur-sm border border-white/10 hover:scale-[1.03]"
          >
            <img src="/linkedin.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-blue-200 text-sm">PotiguarDev</p>
          </a>

          <a
            href="mailto:contato@potiguardev.com"
            className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition shadow-lg backdrop-blur-sm border border-white/10 hover:scale-[1.03]"
          >
            <img src="/mail.png" className="w-10 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">E-mail</h3>
            <p className="text-blue-200 text-sm">contato@potiguardev.com</p>
          </a>
        </div>
      </div>
    
      <div className="w-full flex justify-end pr-6 mt-10 opacity-80">
        <p className="text-sm">Desenvolvido por PotiguarDev • 2025</p>
      </div>
    </section>
  );
}
