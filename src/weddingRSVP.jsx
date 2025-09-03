import React, { useState } from 'react';

export default function WeddingRSVP() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-display">
      <h1 className="text-5xl font-script text-[#E6D3B3] mb-6">Lubna & Abdulla</h1>
      <p className="mb-6 text-center text-lg">We are delighted to invite you to our wedding celebration on <b>07 January 2026</b> at the desert venue in Dubai.</p>

      {!submitted ? (
        <form name="rsvp" method="POST" data-netlify="true" className="glass p-6 rounded-2xl w-full max-w-md flex flex-col gap-4">
          <input type="hidden" name="form-name" value="rsvp" />
          <input className="p-3 rounded bg-transparent border border-[#E6D3B3]" type="text" name="name" placeholder="Your Full Name" required />
          <input className="p-3 rounded bg-transparent border border-[#E6D3B3]" type="number" name="guests" placeholder="Number of Guests" required />
          <input className="p-3 rounded bg-transparent border border-[#E6D3B3]" type="text" name="diet" placeholder="Dietary Restrictions (if any)" />
          <textarea className="p-3 rounded bg-transparent border border-[#E6D3B3]" name="message" placeholder="Message to the couple"></textarea>
          <button type="submit" className="bg-[#E6D3B3] text-black py-2 rounded font-semibold hover:bg-[#d9c2a1]">Confirm Attendance</button>
        </form>
      ) : (
        <p className="mt-6 text-lg">Thank you for confirming your presence! We can’t wait to see you!</p>
      )}

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Dress Code</h2>
        <p className="mb-4">Elegant desert tones — beige, terracotta, gold and ivory.</p>
        <div className="flex justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#d9c2a1]"></div>
          <div className="w-10 h-10 rounded-full bg-[#b35c38]"></div>
          <div className="w-10 h-10 rounded-full bg-[#f2ede4] border"></div>
          <div className="w-10 h-10 rounded-full bg-[#6b4226]"></div>
        </div>
      </div>
    </div>
  );
}
