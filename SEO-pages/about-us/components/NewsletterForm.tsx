'use client';

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";


export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    iam: "HMUA Artists – General",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/addSubscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          tag: formData.iam,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.message || "Failed to subscribe ❌";

        if (errorMessage.includes("already a list member")) {
          toast.error("This email is already subscribed. ✅");
        } else {
          const firstLine = errorMessage.split("\n")[0];
          toast.error(firstLine);
        }
      } else {
        toast.success("Subscribed successfully! 🎉");
        setFormData({ iam: "HMUA Artists – General", email: "" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="select-input-wrapper">
      {/* <ToastContainer position="top-right" autoClose={3000} theme="colored" /> */}

      <div className="dropdown-wrapper mb-3">
        <label htmlFor="iam" className="dropdown-label">I am</label>
        <div className="select-wrapper position-relative">
          <select
            id="iam"
            name="iam"
            className="dropdown-select form-select"
            value={formData.iam}
            onChange={handleChange}
          >
            <option value="HMUA Artists – General">An Artist</option>
            <option value="Clients & Brides">A Client</option>
            <option value="Pro Makeup Brands">A Brand</option>
          </select>
          <Image
            className="chevron-down-img position-absolute end-0 me-2"
            src="/images/chevron-down.svg"
            alt="Chevron Down"
            width={16}
            height={16}
            unoptimized
          />
        </div>
      </div>

      <div className="email-wrapper mb-3">
        <label htmlFor="email-address" className="email-label">Email Address</label>
        <input
          type="email"
          id="email-address"
          name="email"
          className="email-input form-control"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary signup-btn" disabled={loading}>
        {loading ? "Signing up..." : "Signup"}
      </button>
    </form>
  );
}