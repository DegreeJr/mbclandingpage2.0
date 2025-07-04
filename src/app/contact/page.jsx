"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GoogleMap from "../../components/GoogleMap";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    emailjs.sendForm(
      'service_mbclab',
      'template_aghj1te',
      form.current,
      '9-U5F9jETZSCM2UEw'
    ).then(
      () => {
        setStatus('success');
        form.current.reset();
      },
      () => setStatus('error')
    ).finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Ready to discuss your technology needs? Get in touch with our expert team to explore how we can help bring your ideas to life.</p>
          </div>
        </div>
      </section>
      {/* Contact Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office Address</h3>
                      <p className="text-gray-300">Telkom University, TULT 13.04, TULT 11.12,<br/>Jl. Telekomunikasi. 1, Terusan Buahbatu -<br />Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot<br />abupaten Bandung, Jawa Barat 40257</p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone Number</h3>
                      <p className="text-gray-300"><a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">+62 123-4567</a></p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email Address</h3>
                      <p className="text-gray-300"><a href="mailto:info@mbclaboratory.com" className="hover:text-blue-400 transition-colors">info@mbclaboratory.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                <GoogleMap height="256px" />
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Your full name" />
                </div>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="your.email@example.com" />
                </div>
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Brief description of your inquiry" />
                </div>
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical" placeholder="Tell us about your project, goals, and how we can help..." />
                </div>
                {/* Submit Button */}
                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-60" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {/* Inline Success/Error Message */}
                {status === 'success' && (
                  <div className="mt-4 text-green-400 text-center font-semibold">Thank you! Your message has been sent.</div>
                )}
                {status === 'error' && (
                  <div className="mt-4 text-red-400 text-center font-semibold">Sorry, there was a problem. Please try again.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
