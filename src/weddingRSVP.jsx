import React from 'react'

export default function WeddingRSVP() {
  return (
    <div className="min-h-screen bg-sand text-gray-800 flex flex-col items-center p-6">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-desert">Lubna & Abdulla</h1>
        <p className="text-lg text-terracotta mt-2">21 • 01 • 2025</p>
      </header>

      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <img src="https://placehold.co/600x400" alt="Wedding Location" className="rounded-lg mb-4"/>
        <p>The wedding will take place in the beautiful desert venue.</p>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer"
           className="text-terracotta underline mt-2 inline-block">View on Google Maps</a>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Dress Code</h2>
        <p>Please wear outfits in the desert-inspired palette:</p>
        <div className="flex space-x-4 mt-4">
          <div className="w-10 h-10 rounded-full bg-desert"></div>
          <div className="w-10 h-10 rounded-full bg-sand"></div>
          <div className="w-10 h-10 rounded-full bg-terracotta"></div>
          <div className="w-10 h-10 rounded-full bg-beige"></div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">RSVP</h2>
        <form name="rsvp" method="POST" data-netlify="true" className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded"/>
          <input type="number" name="guests" placeholder="Number of Guests" className="w-full border p-2 rounded"/>
          <input type="text" name="diet" placeholder="Dietary Preferences" className="w-full border p-2 rounded"/>
          <textarea name="message" placeholder="Message" className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="bg-terracotta text-white px-4 py-2 rounded">Submit RSVP</button>
        </form>
      </section>
    </div>
  )
}
