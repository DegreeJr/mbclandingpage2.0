import React from "react";

export default function DeveloperPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Developer</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Tentang Developer / Tim</h2>
        <p>Nama, kompetensi teknis, dan deskripsi singkat akan ditampilkan di sini.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Portofolio &amp; Kontak</h2>
        <ul className="list-disc ml-6">
          <li>GitHub: <a href="#" className="text-blue-600 underline">Link GitHub</a></li>
          <li>Portofolio: <a href="#" className="text-blue-600 underline">Link Portofolio</a></li>
        </ul>
      </section>
    </main>
  );
} 