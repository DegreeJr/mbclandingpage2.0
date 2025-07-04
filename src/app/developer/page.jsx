import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Developer</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">This website was developed and maintained by the in-house developer at MBC Laboratory.</p>
          </div>
        </div>
      </section>

      {/* Developer Profile */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 md:p-12">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-900 to-purple-900 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">RH</div>
            </div>
            {/* Name and Role */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Muhammad Razan Athaya Dradjat</h2>
              <p className="text-xl text-blue-400 font-semibold mb-2">Mahasiswa Informatika Telkom University 2023</p>
            </div>
            {/* Professional Bio */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </h3>
              <div className="bg-gray-900 rounded-xl p-6">
                <p className="text-gray-300 text-lg leading-relaxed text-center">Saya adalah mahasiswa Informatika yang memiliki ketertarikan kuat di 
                  bidang Cybersecurity, Artificial Intelligence/Machine Learning, dan Visualisasi Data. 
                  Saya senang menyelesaikan permasalahan nyata melalui pendekatan berbasis data dan perancangan sistem yang aman. 
                  Pengalaman saya dalam kompetisi CTF, proyek machine learning, 
                  serta keterlibatan aktif dalam komunitas teknologi mencerminkan komitmen saya untuk terus belajar dan berinovasi. 
                  Saya terbuka untuk berkolaborasi, mencoba teknologi baru, dan berkontribusi dalam proyek-proyek yang berdampak.
                </p>
              </div>
            </div>
            {/* Technical Skills */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technical Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Skills */}
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-800">
                  <h4 className="font-semibold text-blue-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Frontend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React","Next.js","TypeScript","Tailwind CSS","HTML5","CSS3","JavaScript",].map((skill, index) => (
                      <span key={index} className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                {/* Backend Skills */}
                <div className="bg-green-900 rounded-xl p-6 border border-green-800">
                  <h4 className="font-semibold text-green-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    Backend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js","Express.js","Python","PostgreSQL","MongoDB","REST APIs","GraphQL",].map((skill, index) => (
                      <span key={index} className="bg-green-800 text-green-200 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                {/* Tools & Infrastructure */}
                <div className="bg-purple-900 rounded-xl p-6 border border-purple-800">
                  <h4 className="font-semibold text-purple-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git","Docker","Vercel","VS Code","Figma","Postman","Nmap","Burp Suite","Wireshark","TensorFlow","PyTorch","Scikit-learn","Jupyter Notebook"].map((skill, index) => (
                      <span key={index} className="bg-purple-800 text-purple-200 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                {/* Specializations */}
                <div className="bg-orange-900 rounded-xl p-6 border border-orange-800">
                  <h4 className="font-semibold text-orange-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Responsive Design","Performance Optimization","SEO","Web Security","UI/UX","Agile","Vulnerability Assessment & Pen Testing","Machine Learning","Data Visualization","Computer Vision","Cybersecurity"].map((skill, index) => (
                      <span key={index} className="bg-orange-800 text-orange-200 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/DegreeJr" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
          <p className="text-lg text-gray-300 mb-8">Have a project in mind or need technical consultation? I'm always excited to work on innovative solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Start a Project</Link>
            <a href="mailto:razan@mbclaboratory.com" className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">Send Email</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
