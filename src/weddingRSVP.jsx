import React from 'react';

export default function WeddingRSVP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige to-sand text-center text-gray-800">
      <section className="py-16 px-6">
        <h1 className="text-5xl font-serif text-terracotta mb-2">Lubna & Abdulla</h1>
        <p className="italic mb-6">07 January 2026 — Nara Desert, Dubai</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Calendar</h2>
            <p className="text-sm mb-4">Mark the date: 07 Jan 2026</p>
            <div className="text-3xl">📅</div>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <p className="mb-4">Nara Desert, Dubai</p>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Nara+Desert+Dubai&output=embed"
              className="w-full h-40 rounded-lg border"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-terracotta mb-6">Program of the Day</h2>
        <ul className="max-w-xl mx-auto space-y-3 text-left">
          <li><b>16:00</b> — Guest Reception</li>
          <li><b>17:00</b> — Welcome Drinks</li>
          <li><b>18:00</b> — Ceremony</li>
          <li><b>19:00</b> — Dinner & Speeches</li>
          <li><b>21:00</b> — Party & Dance</li>
        </ul>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-terracotta mb-6">Dress Code</h2>
        <p className="mb-4">Elegant desert tones: Sand, Terracotta, Beige</p>
        <div className="flex justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-sand"></div>
          <div className="w-12 h-12 rounded-full bg-terracotta"></div>
          <div className="w-12 h-12 rounded-full bg-beige border"></div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white" id="rsvp">
        <h2 className="text-2xl font-semibold text-terracotta mb-6">RSVP</h2>
        <form name="rsvp" method="POST" data-netlify="true" className="max-w-md mx-auto flex flex-col gap-4">
          <input type="hidden" name="form-name" value="rsvp" />
          <input className="p-3 border rounded" type="text" name="name" placeholder="Your Name" required />
          <input className="p-3 border rounded" type="number" name="guests" placeholder="Number of Guests" required />
          <input className="p-3 border rounded" type="text" name="diet" placeholder="Dietary Restrictions (if any)" />
          <textarea className="p-3 border rounded" name="message" placeholder="Message"></textarea>
          <button className="bg-terracotta text-white py-2 rounded hover:bg-sand transition">Submit RSVP</button>
        </form>
      </section>

      <footer className="py-8 text-sm text-gray-600">
        With love, Lubna & Abdulla ❤️
      </footer>
    </div>
  );
}