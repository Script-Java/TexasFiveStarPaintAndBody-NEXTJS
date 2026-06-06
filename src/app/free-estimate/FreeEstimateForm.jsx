"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiSend, FiCheckCircle, FiAlertCircle, FiPhone } from "react-icons/fi";
import bgImg from "@/app/assets/img/gallery/1.jpg";

const servicesList = [
  "Collision Repair",
  "Custom Paint & Refinishing",
  "Paintless Dent Repair (PDR)",
  "Auto Restoration",
  "Scratch & Paint Chip Repair",
  "Bumper Repair",
  "ADAS Calibration",
  "Rust Repair",
  "Auto Insurance Claim Repair",
  "Hail Repair",
  "Other / Not Sure"
];

export default function FreeEstimateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
    website_url: "" // Honeypot field
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          vehicle: "",
          service: "",
          message: "",
          website_url: ""
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit request.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us at (469) 583-7377.");
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-neutral-950 min-h-screen">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg}
          alt="Luxury car paint job"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
      </div>

      {/* Red Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {status === "success" ? (
          <div className="bg-neutral-900 border border-emerald-500/20 rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_60%)]" />
            <div className="relative z-10 flex flex-col items-center">
              <FiCheckCircle size={64} className="text-emerald-500 mb-6 animate-bounce" />
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Request Sent!
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed text-lg max-w-lg">
                Thank you for contacting Texas Five Star Paint & Body. Mary or one of our auto repair experts will review your request and get back to you shortly.
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:4695837377"
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/40 w-full sm:w-auto"
                >
                  <FiPhone size={18} />
                  Need Urgent Assistance?
                </a>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-gray-400 hover:text-white border border-white/10 hover:bg-white/5 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  Send Another Request
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Promo Banner / Intro */}
            <div className="bg-neutral-900/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.05),transparent_50%)]" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-red-500 font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-red-950/40 border border-red-500/25 px-3 py-1 rounded-full">
                    Deductible Assistance
                  </span>
                  <h2 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Up to $500 Deductible Forgiveness
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl">
                    We work directly with all major insurance providers and can help cover or forgive your deductible up to $500 on qualified collision repairs!
                  </p>
                </div>
                <a
                  href="tel:4695837377"
                  className="flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 border border-white/10 text-white font-bold py-3.5 px-4 sm:px-6 rounded-xl transition-all duration-300 w-full md:w-auto self-start md:self-auto cursor-pointer shrink-0 whitespace-nowrap text-sm sm:text-base"
                >
                  <FiPhone size={16} className="text-red-500 shrink-0" />
                  <span>Call (469) 583-7377</span>
                </a>
              </div>
            </div>

            {/* Main Form */}
            <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.03),transparent_50%)]" />
              <div className="p-8 sm:p-12 relative z-10">
                <div className="max-w-xl mb-10">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    Get Your Free Estimate
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                    Fill out the details below. For direct photo uploads or fastest quotes, you can also stop by our Garland shop or text images directly to our office.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - visually hidden, but visible to bots */}
                  <div className="opacity-0 absolute -z-50 w-0 h-0 pointer-events-none" aria-hidden="true" tabIndex="-1">
                    <label htmlFor="website_url">Website URL (leave blank)</label>
                    <input
                      type="text"
                      id="website_url"
                      name="website_url"
                      value={formData.website_url}
                      onChange={handleChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(469) 583-7377"
                        className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                      />
                    </div>

                    {/* Vehicle Info */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="vehicle" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Vehicle Details
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="e.g. 2021 Ford F-150 Black"
                        className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                    >
                      <option value="" disabled>Select a service...</option>
                      {servicesList.map((serviceOption) => (
                        <option key={serviceOption} value={serviceOption}>
                          {serviceOption}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Describe the Damage / Repair
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe what needs to be repaired or restore, and any special requests."
                      className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-sm leading-relaxed">
                      <FiAlertCircle size={20} className="flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 disabled:bg-neutral-800 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.01] shadow-lg shadow-red-900/30 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <FiSend size={18} />
                        <span>Submit Estimate Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
