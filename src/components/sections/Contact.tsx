"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setMessage("Please configure your EmailJS credentials first.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });

      setMessage("Message sent successfully! Thank you for contacting me.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let&apos;s start a conversation.</h3>

            <p>
              I&apos;m always interested in discussing new projects, creative ideas,
              and opportunities to learn and grow.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="contact-email"
            >
              singhnaveen2370@gmail.com ↗
            </a>

            <div className="social-links">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="button-primary submit-button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message ↗"}
            </button>

            {message && (
              <p className="form-message" aria-live="polite">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}