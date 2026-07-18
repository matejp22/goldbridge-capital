"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    const payload = {
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
          result.error || "Povpraševanja ni bilo mogoče poslati."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Napaka pri pošiljanju obrazca:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Prišlo je do napake. Poskusite ponovno."
      );

      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Ime in priimek</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Vaše ime"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">Podjetje</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Ime podjetja"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">E-poštni naslov</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ime@podjetje.com"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Telefonska številka</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+386 ..."
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="financingAmount">
            Želeni znesek financiranja
          </label>

          <input
            id="financingAmount"
            name="financingAmount"
            type="text"
            placeholder="Na primer 2.000.000 €"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="goldValue">Ocenjena vrednost zlata</label>

          <input
            id="goldValue"
            name="goldValue"
            type="text"
            placeholder="Na primer 3.000.000 €"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="goldAmount">Količina zlata</label>

          <input
            id="goldAmount"
            name="goldAmount"
            type="text"
            placeholder="Na primer 50 kg"
          />
        </div>

        <div className="form-field">
          <label htmlFor="goldLocation">Lokacija zlata</label>

          <input
            id="goldLocation"
            name="goldLocation"
            type="text"
            placeholder="Država in mesto"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="purpose">Namen financiranja</label>

        <textarea
          id="purpose"
          name="purpose"
          rows={5}
          placeholder="Na kratko opišite namen financiranja in relevantne informacije."
          required
        />
      </div>

      <label className="checkbox-field">
        <input
          name="ownershipConfirmed"
          type="checkbox"
          required
        />

        <span>
          Potrjujem, da sem lastnik zlata oziroma imam pooblastilo
          zakonitega lastnika.
        </span>
      </label>

      <label className="checkbox-field">
        <input
          name="privacyConfirmed"
          type="checkbox"
          required
        />

        <span>
          Strinjam se z obdelavo podatkov za namen obravnave
          povpraševanja.
        </span>
      </label>

      <button
        type="submit"
        className="submit-button"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Pošiljanje ..."
          : "Pošlji zaupno povpraševanje"}
      </button>

      {status === "success" && (
        <div
          className="form-message form-message-success"
          role="status"
        >
          Hvala. Vaše povpraševanje je bilo uspešno poslano.
        </div>
      )}

      {status === "error" && (
        <div
          className="form-message form-message-error"
          role="alert"
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
}