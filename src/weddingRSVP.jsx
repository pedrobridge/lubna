import React from "react";

export default function WeddingRSVP() {
  return (
    <div className="min-h-screen bg-sand text-gray-800 flex flex-col items-center p-6">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Lubna & Abdulla</h1>
        <p className="text-lg">21 • Janeiro • 2025</p>
      </header>

      <section className="bg-white shadow-xl rounded-xl p-6 max-w-lg w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4">Localização</h2>
        <img src="https://picsum.photos/400/200" alt="Local" className="rounded-lg mb-4"/>
        <p>Deserto de Dubai • 16:00</p>
        <a href="https://maps.google.com" target="_blank" className="text-terracotta underline">Ver no mapa</a>
      </section>

      <section className="bg-white shadow-xl rounded-xl p-6 max-w-lg w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dress Code</h2>
        <p className="mb-4">Tons de areia, terracota e bege — perfeitos para o deserto.</p>
        <div className="flex space-x-4">
          <div className="w-8 h-8 rounded-full bg-sand"></div>
          <div className="w-8 h-8 rounded-full bg-terracotta"></div>
          <div className="w-8 h-8 rounded-full bg-beige"></div>
        </div>
      </section>

      <section className="bg-white shadow-xl rounded-xl p-6 max-w-lg w-full mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">RSVP</h2>
        <form name="rsvp" method="POST" data-netlify="true" className="flex flex-col space-y-4">
          <input type="hidden" name="form-name" value="rsvp" />
          <input type="text" name="name" placeholder="Seu nome" className="border p-2 rounded"/>
          <input type="number" name="guests" placeholder="Número de convidados" className="border p-2 rounded"/>
          <input type="text" name="diet" placeholder="Preferências alimentares" className="border p-2 rounded"/>
          <textarea name="message" placeholder="Deixe uma mensagem" className="border p-2 rounded"></textarea>
          <button type="submit" className="bg-terracotta text-white py-2 px-4 rounded">Confirmar Presença</button>
        </form>
      </section>

      <footer className="mt-8 text-center text-sm text-gray-600">
        Feito com ❤️ para Lubna & Abdulla
      </footer>
    </div>
  );
}