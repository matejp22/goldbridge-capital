"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

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
  website: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string | number | boolean>
    ) => void;
  }
}

export default function ContactForm() {
  const t = useTranslations("ContactForm");

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
      website: String(formData.get("website") || "").trim(),
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
          result.error || t("messages.submissionError")
        );
      }

      form.reset();
      setStatus("success");

      window.gtag?.("event", "generate_lead", {
        form_name: "confidential_financing_inquiry",
        form_location: "landing_page",
        currency: "EUR",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : t("messages.unexpectedError")
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
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">
            {t("fields.name.label")}
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t("fields.name.placeholder")}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">
            {t("fields.company.label")}
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={t("fields.company.placeholder")}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">
            {t("fields.email.label")}
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={t("fields.email.placeholder")}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">
            {t("fields.phone.label")}
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={t("fields.phone.placeholder")}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="financingAmount">
            {t("fields.financingAmount.label")}
          </label>

          <input
            id="financingAmount"
            name="financingAmount"
            type="text"
            inputMode="decimal"
            placeholder={t("fields.financingAmount.placeholder")}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="goldValue">
            {t("fields.goldValue.label")}
          </label>

          <input
            id="goldValue"
            name="goldValue"
            type="text"
            inputMode="decimal"
            placeholder={t("fields.goldValue.placeholder")}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="goldAmount">
            {t("fields.goldAmount.label")}
          </label>

          <input
            id="goldAmount"
            name="goldAmount"
            type="text"
            placeholder={t("fields.goldAmount.placeholder")}
          />
        </div>

        <div className="form-field">
          <label htmlFor="goldLocation">
            {t("fields.goldLocation.label")}
          </label>

          <input
            id="goldLocation"
            name="goldLocation"
            type="text"
            placeholder={t("fields.goldLocation.placeholder")}
            required
          />
        </div>
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="purpose">
          {t("fields.purpose.label")}
        </label>

        <textarea
          id="purpose"
          name="purpose"
          rows={7}
          placeholder={t("fields.purpose.placeholder")}
          required
        />
      </div>

      <label className="checkbox-field">
        <input
          name="ownershipConfirmed"
          type="checkbox"
          required
        />

        <span>{t("confirmations.ownership")}</span>
      </label>

      <label className="checkbox-field">
        <input
          name="privacyConfirmed"
          type="checkbox"
          required
        />

        <span>{t("confirmations.privacy")}</span>
      </label>

      <button
        type="submit"
        className="submit-button"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
      >
        {status === "sending"
          ? t("button.sending")
          : t("button.idle")}
      </button>

      {status === "success" && (
        <div
          className="form-message form-message-success success-message"
          role="status"
          aria-live="polite"
        >
          {t("messages.success")}
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