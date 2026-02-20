import React, { useState } from 'react';
import { Calendar, Clock, Phone, Send, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Future: Link to OpenClaw API to notify via iMessage/Telegram
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-8 rounded-3xl border border-green-100 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Test Ride Requested!</h3>
        <p className="text-green-700">We've received your request. Lemonade will confirm your time via text shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-extrabold mb-6 uppercase tracking-tight text-gray-900 flex items-center">
        <Calendar className="mr-3 w-6 h-6 text-blue-600" /> Book a Test Ride
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Preferred Date</label>
          <div className="relative">
            <input type="date" required className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-600 transition" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Time</label>
            <input type="time" required className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-600 transition" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
            <input type="tel" placeholder="+64..." required className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-600 transition" />
          </div>
        </div>
        <button 
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center"
        >
          {loading ? "Sending..." : <>Confirm Request <Send className="ml-2 w-4 h-4" /></>}
        </button>
        <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-4 flex items-center justify-center">
          <Clock className="w-3 h-3 mr-1" /> Instant notification sent to our team
        </p>
      </form>
    </div>
  );
}
