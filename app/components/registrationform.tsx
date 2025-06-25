"use client";

import React, { useState } from "react";
import axios from "axios";

const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      mobileNumber: formData.get("mobile") as string,
      email: formData.get("email") as string,
      isRealtor: formData.get("realtor") === "yes",
      message: formData.get("message") as string,
    };

    if (!data.mobileNumber.startsWith("+")) {
      data.mobileNumber = "+1" + data.mobileNumber.replace(/\D/g, "");
    }

    try {
      await axios.post("http://192.168.18.76:2000/contacts", data, {
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setLoading(false);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-xl font-sans max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold text-center text-gray-800">Get In Touch</h3>
      <p className="text-center text-gray-600 mt-1 mb-6">To Receive Pricing and Floor Plans</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 text-black border rounded-xl border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 transition-colors"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 text-black border rounded-xl border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 transition-colors"
            required
          />
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number (e.g., +1234567890)"
            className="w-full p-3 rounded-xl text-black border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 text-black rounded-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 transition-colors"
            required
          />
        </div>

        {/* Realtor Question */}
        <div>
          <p className="text-gray-700 mb-2">Are you a Realtor?</p>
          <div className="flex gap-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="realtor" value="yes" className="form-radio text-gray-600" />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="realtor" value="no" className="form-radio text-blue-500" defaultChecked />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full rounded-xl p-3 text-black border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 transition-colors"
        />

        {/* Submit Button + Loader */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full rounded-xl bg-black text-white p-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 flex justify-center items-center"
            disabled={loading}>
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 01-8-8z"></path>
              </svg>
            ) : (
              "Register Now"
            )}
          </button>
        </div>

        {/* Success/Failure Messages */}
        {submitted && !loading && !error && (
          <p className="text-green-600 text-center mt-1 mb-0">Thank you! Your form has been submitted.</p>
        )}
        {error && <p className="text-red-500 text-center mt-4 font-medium">❌ {error}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
