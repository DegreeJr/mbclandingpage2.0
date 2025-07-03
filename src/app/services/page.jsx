import React from "react";

export default function ServicesPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Layanan MBC Laboratory</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cybersecurity</h2>
        <p>Deskripsi singkat layanan Cybersecurity.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Big Data Analytics</h2>
        <p>Deskripsi singkat layanan Big Data Analytics.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Game Technology</h2>
        <p>Deskripsi singkat layanan Game Technology.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Geographic Information Systems (GIS)</h2>
        <p>Deskripsi singkat layanan GIS.</p>
      </section>
    </main>
  );
}
