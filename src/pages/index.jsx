
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Boosted & Booked</h1>
        <p className="text-xl md:text-2xl">Local Marketing That Fills Your Calendar.</p>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">What We Do</h2>
        <p className="text-lg mb-4 text-center max-w-3xl mx-auto">
          We help family-owned and local businesses get more customers using Facebook, Instagram,
          Google, and email — without wasting money or time. Let us handle your marketing, so you can
          focus on running your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-2xl shadow bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p>3 social posts/week + profile cleanup</p>
            <p className="mt-2 font-bold">$200/month</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-blue-100">
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p>Daily posts + ad support + review management</p>
            <p className="mt-2 font-bold">$400/month</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p>Everything + email marketing & strategy</p>
            <p className="mt-2 font-bold">$600/month</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p>"We went from empty weekdays to fully booked weekends — thank you!"</p>
            <p className="mt-2 font-semibold">— Joe, Local Diner Owner</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p>"Our Facebook page was dead. Now it’s alive with comments and customers!"</p>
            <p className="mt-2 font-semibold">— Maria, Mini Golf Manager</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get More Customers?</h2>
        <p className="mb-6 text-lg">Email us now and we’ll respond within 24 hours.</p>
        <a
          href="mailto:boostedbooked@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Message Me
        </a>
      </section>
    </main>
  );
}
