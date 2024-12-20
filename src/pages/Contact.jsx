import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    location: "",
    industry: "",
    pitchDeck: null,
    hearAboutUs: "",
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      hearAboutUs: formData.hearAboutUs,
    };

    try {
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
    <div className="">
      <Header photo="./assets/backgroundGatorGlobe.jpg" title="Contact" headline="Get In Touch" />
      {/* Main Layout */}
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 p-8 py-16">
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <h1 className="text-4xl ">Contact Us</h1>
          <p className="text-lg text-gray-700">
            If you have any questions or comments, please contact us via email, or send us a message using the contact form.
          </p>
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-600">ufwarringtonventures@gmail.com</p>
          </div>
          <div className="flex space-x-4 text-2xl">
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

        {/* Right Side: Contact Form */}
        <div>
          <h1 className="text-2xl mb-6">Founder Submission Form</h1>
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
                Location (City, State) <span className="text-red-500">*</span>
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
    </div>
  );
}
