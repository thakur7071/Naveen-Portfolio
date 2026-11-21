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
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setMessage("✓ Message sent! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="draft-section contact-page-section" id="contact">
      <div className="sec-eyebrow">{"// get in touch"}</div>
      <h2 className="sec-title">Let&apos;s work together</h2>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>Open to opportunities</h3>
          <p>
            Looking for internships, collaborations, or just want to talk tech?
            My inbox is always open. I&apos;d love to connect and build something
            great.
          </p>
          <a
            href="mailto:singhnaveen2370@gmail.com"
            className="contact-email"
          >
            singhnaveen2370@gmail.com
          </a>
          <div className="social-row">
            <a
              className="soc-link"
              href="https://github.com/thakur7071"
              target="_blank"
              rel="noreferrer"
            >
              🐙 GitHub
            </a>
            <a className="soc-link" href="#" rel="noreferrer">
              💼 LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">NAME</label>
              <input
                id="contact-name"
                name="from_name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">EMAIL</label>
              <input
                id="contact-email"
                name="from_email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject">SUBJECT</label>
            <input
              id="contact-subject"
              name="subject"
              required
              placeholder="Project inquiry"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">MESSAGE</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
            />
          </div>
          <button className="send-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message →"}
          </button>
          {message && (
            <div className="form-message" role="status" aria-live="polite">
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
