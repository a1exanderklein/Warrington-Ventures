import React, { useState } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    location: "",
    industry: "",
    capital: "",
    valuation: "",
    revenue: "No",
    pitchDeck: null,
    hearAboutUs: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      companyName: formData.companyName,
      location: formData.location,
      industry: formData.industry,
      capital: formData.capital,
      valuation: formData.valuation,
      revenue: formData.revenue,
      hearAboutUs: formData.hearAboutUs,
    };

    try {
      //Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with EmailJS account details. ***
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        emailParams,
        "YOUR_USER_ID"
      );
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Failed to send form data:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="mt-24">
      {/* Contact Us Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4 text-gray-700">
          If you have any questions or comments, please contact us via email, or
          send us a message using the contact form.
        </p>
        <div className="grid grid-cols-2">
          <div className="text-left mb-6">
            <h2 className="font-bold text-xl">Email</h2>
            <p className="text-gray-600">ufwarringtonventures@gmail.com</p>
          </div>
          <div className="flex justify-end items-center space-x-4 text-2xl">
            {/* Social Media Icons */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Founders Form */}
      <div className="mt-10 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Founder Submission Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">
              Location (City, State, Country) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Industry (e.g., SaaS, Fintech)</label>
            <input
              type="text"
              name="industry"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">
              Upload Pitch Deck (.pdf format) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="pitchDeck"
              accept="application/pdf"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">How did you hear about us?</label>
            <textarea
              name="hearAboutUs"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#31599d] text-white py-2 rounded hover:bg-[#244174]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
