import React from "react";
import { FaFacebookF, FaInstagram, FaGoogle, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 font-sans">
      <section className="bg-blue-700 text-white py-20 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Boosted & Booked</h1>
        <p className="text-2xl font-medium max-w-2xl mx-auto">Local Marketing That Fills Your Calendar</p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What We Do</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          We help family-owned and local businesses get more customers using <span className="text-blue-700 font-semibold">Facebook</span>, <span className="text-pink-600 font-semibold">Instagram</span>, <span className="text-red-600 font-semibold">Google</span>, and <span className="text-gray-700 font-semibold">email</span> — without wasting money or time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl shadow-xl bg-white border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p>3 social posts/week + profile cleanup</p>
            <p className="mt-4 text-blue-700 font-extrabold text-xl">$200/month</p>
          </div>
          <div className="p-8 rounded-2xl shadow-xl bg-white border-t-4 border-green-500">
            <h3 className="text-2xl font-bold mb-2">Growth</h3>
            <p>Daily posts + ad support + review management</p>
            <p className="mt-4 text-green-600 font-extrabold text-xl">$400/month</p>
          </div>
          <div className="p-8 rounded-2xl shadow-xl bg-white border-t-4 border-purple-500">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p>Everything + email marketing & strategy</p>
            <p className="mt-4 text-purple-600 font-extrabold text-xl">$600/month</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-700 to-purple-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get More Customers?</h2>
        <p className="mb-8 text-lg">Message us and we'll get back within 24 hours.</p>
        <a
          href="mailto:boostedbooked@gmail.com"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition"
        >
          Message Me
        </a>

        <div className="mt-10 flex justify-center gap-6 text-2xl">
          <FaFacebookF />
          <FaInstagram />
          <FaGoogle />
          <FaEnvelope />
        </div>
      </section>
    </main>
  );
}
