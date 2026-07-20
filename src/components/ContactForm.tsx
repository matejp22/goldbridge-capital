"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  financingAmount: string;
  goldValue: string;
  goldAmount: string;
  goldLocation: string;
  purpose: string;
  ownershipConfirmed: boolean;
  privacyConfirmed: boolean;
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    const payload: ContactPayload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      financingAmount: String(
        formData.get("financingAmount") || ""
      ).trim(),
      goldValue: String(formData.get("goldValue") || "").trim(),
      goldAmount: String(formData.get("goldAmount") || "").trim(),
      goldLocation: String(formData.get("goldLocation") || "").trim(),
      purpose: String(formData.get("purpose") || "").trim(),
      ownershipConfirmed:
        formData.get("ownershipConfirmed") === "on",
      privacyConfirmed:
        formData.get("privacyConfirmed") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "We were unable to submit your inquiry. Please try again."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );

      setStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate={false}
    >
      {/* Client information */}
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">
            Company, Family Office or Organisation
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Organisation name"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Business Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="name@company.com"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Telephone Number</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+41 ..."
          />
        </div>
      </div>

      {/* Financing profile */}
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="financingAmount">
            Requested Financing Amount
          </label>

          <input
            id="financingAmount"
            name="financingAmount"
            type="text"
            inputMode="decimal"
            placeholder="e.g. EUR 2,000,000"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="goldValue">
            Estimated Market Value of Gold
          </label>

          <input
            id="goldValue"
            name="goldValue"
            type="text"
            inputMode="decimal"
            placeholder="e.g. EUR 3,000,000"
            required
          />
        </div>
      </div>

      {/* Gold profile */}
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="goldAmount">
            Gold Quantity and Specification
          </label>

          <input
            id="goldAmount"
            name="goldAmount"
            type="text"
            placeholder="e.g. 50 kg, investment-grade bars"
          />
        </div>

        <div className="form-field">
          <label htmlFor="goldLocation">
            Current Gold Location or Custodian
          </label>

          <input
            id="goldLocation"
            name="goldLocation"
            type="text"
            placeholder="Country, city, bank or vault"
            required
          />
        </div>
      </div>

      {/* Transaction overview */}
      <div className="form-field form-field-full">
        <label htmlFor="purpose">
          Transaction Overview and Financing Purpose
        </label>

        <textarea
          id="purpose"
          name="purpose"
          rows={7}
          placeholder="Please briefly describe the purpose of the financing, the preferred transaction timeframe, the ownership structure of the gold and any relevant information that may assist our initial assessment."
          required
        />
      </div>

      {/* Declarations */}
      <label className="checkbox-field">
        <input
          name="ownershipConfirmed"
          type="checkbox"
          required
        />

        <span>
          I confirm that I am the legal owner of the gold or that I am
          duly authorised to act on behalf of its legal owner.
        </span>
      </label>

      <label className="checkbox-field">
        <input
          name="privacyConfirmed"
          type="checkbox"
          required
        />

        <span>
          I consent to the processing of the information provided for
          the purpose of reviewing and responding to this confidential
          financing inquiry.
        </span>
      </label>

      <button
        type="submit"
        className="submit-button"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
      >
        {status === "sending"
          ? "Submitting Confidential Inquiry..."
          : "Submit Confidential Inquiry"}
      </button>

      {status === "success" && (
        <div
          className="form-message form-message-success success-message"
          role="status"
          aria-live="polite"
        >
          Thank you. Your confidential inquiry has been submitted
          successfully. Our team will review the information provided
          and contact you should the transaction meet the initial
          assessment criteria.
        </div>
      )}

      {status === "error" && (
        <div
          className="form-message form-message-error error-message"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
}