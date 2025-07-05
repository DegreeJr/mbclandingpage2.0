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
                  {/* Instagram */}
                  <div className="flex items-start">
                    <div className="bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Instagram</h3>
                      <p className="text-gray-300"><a href="https://www.instagram.com/mbclab/" className="hover:text-blue-400 transition-colors">@mbclab</a></p>
                    </div>
                  </div>
                  {/* LinkedIn */}
                  <div className="flex items-start">
                    <div className="bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Linkedin</h3>
                      <p className="text-gray-300"><a href="https://www.linkedin.com/company/mbclaboratory/mycompany/" className="hover:text-blue-400 transition-colors">Multimedia Application, Big Data and Cybersecurity Laboratory</a></p>
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
