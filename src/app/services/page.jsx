import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Expertise</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive technology solutions across four specialized domains, delivering research-driven results and innovative consulting services.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cybersecurity */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-8 rounded-xl border border-blue-900">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 w-16 h-16 rounded-xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Cybersecurity</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">Advanced threat detection, penetration testing, and security architecture design services. We provide comprehensive security assessments, incident response planning, and vulnerability management solutions. Our expertise spans enterprise security frameworks, cloud security, and compliance standards to protect your digital assets.</p>
            </div>
            {/* Big Data Analytics */}
            <div className="bg-gradient-to-br from-gray-900 to-green-900 p-8 rounded-xl border border-green-900">
              <div className="flex items-center mb-6">
                <div className="bg-green-900 w-16 h-16 rounded-xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Big Data</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">Machine learning models, data pipeline development, and business intelligence solutions. We transform complex datasets into actionable insights through predictive analytics, real-time processing, and visualization dashboards. Our services include data warehousing, ETL processes, and custom analytics platforms tailored to your business needs.</p>
            </div>
            {/* Game Technology */}
            <div className="bg-gradient-to-br from-gray-900 to-purple-900 p-8 rounded-xl border border-purple-900">
              <div className="flex items-center mb-6">
                <div className="bg-purple-900 w-16 h-16 rounded-xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a3.5 3.5 0 100-7H7v5a3 3 0 106 0zm0 0v6M7 7a3 3 0 00-3 3v1a3 3 0 003 3h1a3 3 0 003-3V7H7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Game Tech</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">Interactive entertainment platforms, gamification systems, and immersive experience development. We create engaging game mechanics, multiplayer architectures, and cross-platform solutions. Our expertise includes game engine optimization, virtual reality integration, and performance analytics to deliver compelling interactive experiences across industries.</p>
            </div>
            {/* Geographic Information Systems */}
            <div className="bg-gradient-to-br from-gray-900 to-orange-900 p-8 rounded-xl border border-orange-900">
              <div className="flex items-center mb-6">
                <div className="bg-orange-900 w-16 h-16 rounded-xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Geographic Information Systems</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">Spatial data analysis, mapping applications, and location-based service development. We design GIS solutions for urban planning, environmental monitoring, and logistics optimization. Our services encompass geospatial databases, satellite imagery processing, and custom mapping platforms that integrate seamlessly with existing enterprise systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8">Let's discuss how our expertise can address your specific technology challenges.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Contact Our Team</Link>
            <Link href="/" className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
