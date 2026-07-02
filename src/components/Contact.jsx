import React, { useState } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit();
const FORM_ID = "nqbx2b6pzft"; // Replace with your FormInit Form ID

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    const { error } = await forminit.submit(FORM_ID, formData);

    if (error) {
      setStatus("❌ Failed to send message.");
      setIsSubmitting(false);

      setTimeout(() => {
        setStatus("");
      }, 2000);

      return;
    }

    setStatus("✅ Message sent successfully!");
    setIsSubmitting(false);

    setTimeout(() => {
      form.reset();
      setStatus("");
    }, 2000);
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>

      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">
            Send Your Message
          </h1>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="fi-sender-fullName"
              placeholder="Enter your fullname"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">
              Email Address
            </label>
            <input
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="fi-sender-email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fi-text-message"
              rows={4}
              placeholder="Enter your Query"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-xl px-3 py-2 text-white duration-300 ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:bg-slate-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.includes("Failed")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;