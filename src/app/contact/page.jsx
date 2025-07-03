import React from "react";

export default function ContactPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kontak Kami</h1>
      {/* Placeholder info kontak */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Informasi Kontak</h2>
        <p>Alamat, telepon, email akan ditampilkan di sini.</p>
      </section>
      {/* Placeholder Google Maps */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Lokasi Kami</h2>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">Google Maps Placeholder</div>
      </section>
      {/* Placeholder form kontak */}
      <section>
        <h2 className="text-xl font-semibold">Formulir Kontak</h2>
        <form className="flex flex-col gap-2 mt-2">
          <input type="text" placeholder="Nama" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <textarea placeholder="Pesan" className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Kirim</button>
        </form>
      </section>
    </main>
  );
} 