"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setFormSubmitted(false);
  };

  return (
    <div className="mx-auto max-w-[650px] bg-white border border-[#e5e5e5] p-8 md:p-12">
      <h2 className="font-heading text-[24px] text-[#0a0a0a] uppercase tracking-[1px] font-normal mb-8 text-center">
        Send Us A Message
      </h2>

      {formSubmitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full border border-green-200 bg-green-50 flex items-center justify-center text-green-600 font-bold text-xl">
            ✓
          </div>
          <h3 className="font-sans text-[16px] text-[#0a0a0a] font-semibold uppercase tracking-[1px]">
            Thank You
          </h3>
          <p className="font-sans text-[14px] text-muted-foreground max-w-[400px] mx-auto leading-relaxed">
            Your message has been sent successfully. We will get back to you as soon as possible.
          </p>
          <button
            onClick={handleReset}
            className="mt-6 inline-block font-sans text-[11px] font-medium uppercase tracking-[2px] text-[#b89d5a] hover:text-[#0a0a0a] cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block font-sans text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 border border-[#e5e5e5] rounded-none focus:outline-none focus:border-[#b89d5a] bg-white text-[#0a0a0a] font-sans text-[14px]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-sans text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 border border-[#e5e5e5] rounded-none focus:outline-none focus:border-[#b89d5a] bg-white text-[#0a0a0a] font-sans text-[14px]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block font-sans text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-[#e5e5e5] rounded-none focus:outline-none focus:border-[#b89d5a] bg-white text-[#0a0a0a] font-sans text-[14px]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-sans text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-2">
              Comment / Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-[#e5e5e5] rounded-none focus:outline-none focus:border-[#b89d5a] bg-white text-[#0a0a0a] font-sans text-[14px] resize-none"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="w-full inline-block font-sans text-[11px] font-semibold uppercase tracking-[2.5px] bg-[#0a0a0a] hover:bg-[#b89d5a] text-white px-8 py-4.5 transition-colors duration-300 cursor-pointer"
            >
              Submit Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
