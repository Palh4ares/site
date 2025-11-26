import Hero from "./components/Hero";
import Services from "./components/Services";
import Eventos from "./components/Eventos";
import Sobre from "./components/Sobre";
import Equipe from "./components/Equipe";
import Contato from "./components/Contato";
import Header from "./components/Header";   // <<< ADICIONE ESTE
import React, { useState } from "react";

export default function App() {
  const [popupData, setPopupData] = useState(null);

  return (
    <div className="font-sans">

      {/* HEADER VOLTOU AQUI */}
      <Header />

      <Hero />
      <Services />
      <Eventos onImageClick={(data) => setPopupData(data)} />
      <Sobre />
      <Equipe onMemberClick={(data) => setPopupData(data)} />
      <Contato />

      {/* POPUP */}
      {popupData && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setPopupData(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popupData.image}
              className="max-w-[450px] max-h-[450px] w-full h-auto rounded-lg object-contain mx-auto"
            />

            {/* Texto comum */}
            {popupData.text && (
              <p className="text-gray-700 mt-4 text-center text-lg">
                {popupData.text}
              </p>
            )}

            {/* Botões sociais */}
            {popupData.social && (
              <div className="flex justify-center gap-4 mt-5">
                {popupData.social.linkedin && (
                  <a
                    href={popupData.social.linkedin}
                    target="_blank"
                    className="px-4 py-2 bg-blue-700 text-white rounded-lg"
                  >
                    LinkedIn
                  </a>
                )}

                {popupData.social.whatsapp && (
                  <a
                    href={popupData.social.whatsapp}
                    target="_blank"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  >
                    WhatsApp
                  </a>
                )}

                {popupData.social.instagram && (
                  <a
                    href={popupData.social.instagram}
                    target="_blank"
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg"
                  >
                    Instagram
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
