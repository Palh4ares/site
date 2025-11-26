export default function Eventos({ onImageClick }) {
  return (
    <section id="eventos" className="py-16 px-6 bg-[#E6F3FF] text-[#003366]">
      <h2 className="text-4xl text-center font-bold mb-10">Eventos</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* EVENTO 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#0066CC]/20">
          <div
            className="w-full h-40 rounded-xl mb-4 overflow-hidden cursor-pointer"
            onClick={() => onImageClick({
              image: "/public/ConexaoODS.jpg",
              text: "Incubadas pela INEAGRO Cabugi (UFERSA Angicos), brilharam no Conexão ODS 2025."
            })}
          >
            <img src="/public/ConexaoODS.jpg" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-xl font-semibold">Conexão ODS - Natal/RN</h3>
          <p className="text-[#0066CC] mt-2">
            incubadas pela INEAGRO Cabugi (UFERSA Angicos), brilharam no Conexão ODS 2025.
          </p>
          <p className="text-[#003366] mt-2 text-sm italic">xx/xx/2025</p>
        </div>

        {/* EVENTO 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#0066CC]/20">
          <div
            className="w-full h-40 rounded-xl mb-4 overflow-hidden cursor-pointer"
            onClick={() => onImageClick({
              image: "/public/GoRN.jpg",
              text: "Levamos a PotiguarDev ao GO!RN e garantimos o 3º lugar no Desafio EliAgro!"
            })}
          >
            <img src="/public/GoRN.jpg" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-xl font-semibold">GoRN - Natal/RN</h3>
          <p className="text-[#0066CC] mt-2">
            Levamos a PotiguarDev ao GO!RN e garantimos o 3º lugar no Desafio EliAgro!
          </p>
          <p className="text-[#003366] mt-2 text-sm italic">xx/xx/2025</p>
        </div>

        {/* EVENTO 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#0066CC]/20">
          <div
            className="w-full h-40 rounded-xl mb-4 overflow-hidden cursor-pointer"
            onClick={() => onImageClick({
              image: "/public/CPWAracaju.jpg",
              text: "Vivemos uma experiência incrível na #CPWeekendAracaju!"
            })}
          >
            <img src="/public/CPWAracaju.jpg" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-xl font-semibold">#CPWeekendAracaju</h3>
          <p className="text-[#0066CC] mt-2">
            Vivemos uma experiência incrível na #CPWeekendAracaju!
          </p>
          <p className="text-[#003366] mt-2 text-sm italic">xx/xx/2025</p>
        </div>
        

      </div>
    </section>
  );
}
