import { useState } from 'react';

export default function WeddingRSVP() {
  const [formData, setFormData] = useState({ name: '', guests: '', diet: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for confirming your attendance!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center px-6 py-12 text-gold-400">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gold-400">Lubna & Abdulla</h1>
        <p className="text-lg text-gray-300 mt-2">Dubai · January 07, 2026</p>
      </header>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-950 border border-gold-500 shadow-2xl rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gold-400">Confirm Your Attendance</h2>
        <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required className="w-full border border-gold-500 bg-black text-gold-300 rounded-xl p-3 mb-4" />
        <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required className="w-full border border-gold-500 bg-black text-gold-300 rounded-xl p-3 mb-4" />
        <input type="text" name="diet" placeholder="Dietary Restrictions (if any)" value={formData.diet} onChange={handleChange} className="w-full border border-gold-500 bg-black text-gold-300 rounded-xl p-3 mb-4" />
        <button type="submit" className="w-full rounded-2xl mt-4 bg-gold-500 hover:bg-gold-600 text-black font-bold p-3">Submit RSVP</button>
      </form>

      <section className="max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Wedding Details</h2>
        <p className="text-gray-300 mb-2">Ceremony & Reception</p>
        <p className="text-gray-400">Nara Desert Resort, Dubai · 6:00 PM</p>
        <p className="text-gray-400 mt-2">Dress Code: Black Tie</p>
      </section>

      <section className="max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gold-400">Recommendations in Dubai</h2>
        <ul className="text-gray-300 space-y-2">
          <li>• Hotels: Atlantis The Palm, Address Downtown, Rove City Walk</li>
          <li>• Restaurants: Zuma Dubai, Gaia, Al Hadheerah</li>
          <li>• Attractions: Burj Khalifa, Dubai Mall, Desert Safari</li>
        </ul>
      </section>

      <section className="max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gold-400">Travel & Transportation</h2>
        <p className="text-gray-300">Fly into Dubai International Airport (DXB). Use Uber, Careem, Metro or taxis to move around Dubai.</p>
      </section>

      <section className="max-w-4xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gold-400">FAQ</h2>
        <p className="text-gray-300"><strong>Dress Code:</strong> Black Tie.</p>
        <p className="text-gray-300"><strong>Weather in January:</strong> Pleasant (15°C–25°C, cooler evenings).</p>
        <p className="text-gray-300"><strong>Language & Currency:</strong> Arabic/English, AED.</p>
      </section>

      <footer className="text-center mt-16 text-gray-500">
        <p className="text-gold-400">With love, Lubna & Abdulla</p>
      </footer>
    </div>
  );
}
