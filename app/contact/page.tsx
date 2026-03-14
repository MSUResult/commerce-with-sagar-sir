"use client";
import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    selectedClass: "",
  });

  const phoneNumber = "7618550475"; // Your saved phone number

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.selectedClass) {
      alert("Please fill in all fields.");
      return;
    }

    // Formatting the WhatsApp message
    const message = `Hello Amit Sir, I would like to enroll.%0A%0A*Name:* ${formData.name}%0A*Class:* ${formData.selectedClass}`;

    // Opening WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-transparent border-2 mt-8 border-white/20 backdrop-blur-sm rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Enroll Now
      </h2>

      <form onSubmit={handleEnroll} className="space-y-5">
        {/* Name Input */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Student's Name *
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Class Selection */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Class *
          </label>
          <select
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer"
            value={formData.selectedClass}
            onChange={(e) =>
              setFormData({ ...formData, selectedClass: e.target.value })
            }
          >
            <option value="" className="text-gray-800">
              Select Class
            </option>
            <option value="Class 11th (Accountancy)" className="text-gray-800">
              Class 11th (Accountancy)
            </option>
            <option value="Class 12th (Accountancy)" className="text-gray-800">
              Class 12th (Accountancy)
            </option>
          </select>
        </div>

        {/* WhatsApp Button */}
        <button
          type="submit"
          className="w-full rounded-2xl py-4 bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg transform transition active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Enroll via WhatsApp</span>
        </button>

        <p className="text-xs text-white/70 text-center italic mt-4">
          Clicking enroll will open WhatsApp to send your details to Amit Sir.
        </p>
      </form>
    </div>
  );
};

export default EnrollmentForm;
