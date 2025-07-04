"use client";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 shadow-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/MBC.webp" alt="MBC Laboratory Logo" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-100 hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/developer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Developer
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-300 hover:text-gray-100">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section as Carousel */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-24">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
        >
          {/* Slide 1 */}
          <div className="relative w-full h-[500px] md:h-[400px] flex items-center justify-center">
            <img src="/cybersecurity.jpg" alt="Carousel slide" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                We're More Than <span className="text-red-500">Laboratory</span>
              </h1>
              <div className="text-lg md:text-xl text-white/80 mb-6 drop-shadow">
                <span>#GoGoMBC #WeAttack #WeProtect</span>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
            <img src="/gametech.webp" alt="Carousel slide" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                We're Partners In Your <span className="text-blue-400">Growth</span>
              </h1>
              <div className="text-lg md:text-xl text-white/80 mb-6 drop-shadow">
                <span>#GoGoMBC #WeAttack #WeProtect</span>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
            <img src="/gis.jpg" alt="Carousel slide" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                We're More Than <span className="text-red-500">Laboratory</span>
              </h1>
              <div className="text-lg md:text-xl text-white/80 mb-6 drop-shadow">
                <span>#GoGoMBC #WeAttack #WeProtect</span>
              </div>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
            <img src="/bigdata.jpg" alt="Carousel slide" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                We're Partners In Your <span className="text-blue-400">Growth</span>
              </h1>
              <div className="text-lg md:text-xl text-white/80 mb-6 drop-shadow">
                <span>#GoGoMBC #WeAttack #WeProtect</span>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-200 leading-relaxed">
          MBC Laboratory (Multimedia, Big Data, and Cybersecurity Laboratory) 
          is a research and consulting center dedicated to technological innovation. 
          Operating under the Ministry of Communication and Multimedia, the lab was 
          established to explore and advance solutions in four critical domains: 
          Cybersecurity, Big Data Analytics, Game Technology, 
          and Geographic Information Systems (GIS).
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Vision and Mission</h2>
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 shadow-lg p-8 md:p-12 mx-auto" style={{backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(80,80,160,0.15) 0%, transparent 70%)'}}>
            <h3 className="text-2xl font-bold text-white text-center mb-6">Visi</h3>
            <p className="text-gray-200 text-center mb-8">
              Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia Application, Big Data, dan Cybersecurity dengan mendorong eksplorasi dan merancang riset yang memberikan dampak positif dan mengikuti perkembangan teknologi masa kini serta menjadi lingkungan yang membentuk, mematangkan, dan mempersiapkan skill asisten MBC Laboratory agar dapat bersaing di Industri.
            </p>
            <p className="text-gray-400 italic text-center mb-10">“Inspirasi dari Legenda Gatot Kaca dan Kawah Candradimuka”</p>
            <h3 className="text-2xl font-bold text-white text-center mb-6">Misi</h3>
            <ol className="text-gray-200 text-left max-w-2xl mx-auto mb-8 list-decimal list-inside space-y-2">
              <li>Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka panjang.</li>
              <li>Menciptakan lingkungan yang fokus pada pertumbuhan pribadi dan profesional serta mendukung karier.</li>
              <li>Menjadi pusat informasi Teknologi, Multimedia, dan Softskill yang berguna bagi mahasiswa.</li>
            </ol>
            <p className="text-gray-400 italic text-center">“Work Life Balance bukan berarti melakukan sesuatu secara singkat namun efektif”</p>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Services Card */}
            <Link href="/services" className="group">
              <div className="bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-lg mb-6 group-hover:bg-blue-800 transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Our Services
                </h3>
                <p className="text-gray-300">
                  Explore our comprehensive technology consulting and research
                  services across all domains.
                </p>
                <div className="mt-4 text-blue-400 font-medium group-hover:text-blue-300">
                  Learn more →
                </div>
              </div>
            </Link>

            {/* Meet Our Developers Card */}
            <Link href="/developer" className="group">
              <div className="bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-green-900 rounded-lg mb-6 group-hover:bg-green-800 transition-colors">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Meet Our Developers
                </h3>
                <p className="text-gray-300">
                  Get to know the expert team behind our innovative technology
                  solutions and research.
                </p>
                <div className="mt-4 text-green-400 font-medium group-hover:text-green-300">
                  Meet the team →
                </div>
              </div>
            </Link>

            {/* Contact Us Card */}
            <Link href="/contact" className="group">
              <div className="bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-900 rounded-lg mb-6 group-hover:bg-purple-800 transition-colors">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Contact Us
                </h3>
                <p className="text-gray-300">
                  Ready to start your project? Get in touch to discuss your
                  technology needs and goals.
                </p>
                <div className="mt-4 text-purple-400 font-medium group-hover:text-purple-300">
                  Get in touch →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/MBC.webp" alt="MBC Laboratory Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Developer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mbclab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/mbclaboratory/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/>
                  </svg>
                </a>
                {/* LINE */}
                <a
                  href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" opacity={1}>
                    <path fill="white" d="M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125zm-3.855 3.016a.63.63 0 0 1-.631.627a.62.62 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63zm-5.741 0a.63.63 0 0 1-.631.629a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
                  </svg>  
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 MBC Laboratory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
