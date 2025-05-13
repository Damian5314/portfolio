import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="mb-6 text-gray-700">Neem contact met mij op via het onderstaande formulier.</p>

      <form className="space-y-6 max-w-lg">
        <div>
          <label className="block text-sm font-medium mb-1">Naam</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Jouw naam"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">E-mailadres</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="jij@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bericht</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Waarmee kan ik je helpen?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Verstuur bericht
        </button>
      </form>
    </div>
  );
}

export default Contact;
