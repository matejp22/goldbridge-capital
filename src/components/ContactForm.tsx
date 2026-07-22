"use client";

import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type FormStatus = "idle" | "sending" | "success" | "error";
type SupportedLocale = "en" | "de" | "it";
type CollateralType = "preciousMetals" | "digitalAssets" | "combination";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  collateralType: CollateralType | "";
  financingAmount: string;
  estimatedAssetValue: string;
  preciousMetalsDescription: string;
  preciousMetalsLocation: string;
  digitalAssetsDescription: string;
  digitalAssetCustody: string;
  custodyJurisdiction: string;
  ownershipSource: string;
  purpose: string;
  ownershipConfirmed: boolean;
  privacyConfirmed: boolean;
  securityConfirmed: boolean;
  website: string;
  locale: SupportedLocale;
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
  const locale = useLocale() as SupportedLocale;

  const [collateralType, setCollateralType] =
    useState<CollateralType | "">("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const includesPreciousMetals =
    collateralType === "preciousMetals" ||
    collateralType === "combination";

  const includesDigitalAssets =
    collateralType === "digitalAssets" ||
    collateralType === "combination";

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
      collateralType: String(
        formData.get("collateralType") || ""
      ) as CollateralType | "",
      financingAmount: String(
        formData.get("financingAmount") || ""
      ).trim(),
      estimatedAssetValue: String(
        formData.get("estimatedAssetValue") || ""
      ).trim(),
      preciousMetalsDescription: String(
        formData.get("preciousMetalsDescription") || ""
      ).trim(),
      preciousMetalsLocation: String(
        formData.get("preciousMetalsLocation") || ""
      ).trim(),
      digitalAssetsDescription: String(
        formData.get("digitalAssetsDescription") || ""
      ).trim(),
      digitalAssetCustody: String(
        formData.get("digitalAssetCustody") || ""
      ).trim(),
      custodyJurisdiction: String(
        formData.get("custodyJurisdiction") || ""
      ).trim(),
      ownershipSource: String(
        formData.get("ownershipSource") || ""
      ).trim(),
      purpose: String(formData.get("purpose") || "").trim(),
      ownershipConfirmed:
        formData.get("ownershipConfirmed") === "on",
      privacyConfirmed:
        formData.get("privacyConfirmed") === "on",
      securityConfirmed:
        formData.get("securityConfirmed") === "on",
      website: String(formData.get("website") || "").trim(),
      locale,
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
      setCollateralType("");
      setStatus("success");

      window.gtag?.("event", "generate_lead", {
        form_name: "confidential_financing_inquiry",
        form_location: "landing_page",
        collateral_type: payload.collateralType,
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
    <form className="contact-form" onSubmit={handleSubmit}>
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
        <label htmlFor="website">Website</label>
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

      <div className="form-field form-field-full">
        <label htmlFor="collateralType">
          {t("fields.collateralType.label")}
        </label>
        <select
          id="collateralType"
          name="collateralType"
          value={collateralType}
          onChange={(event) =>
            setCollateralType(
              event.target.value as CollateralType | ""
            )
          }
          required
        >
          <option value="">
            {t("fields.collateralType.placeholder")}
          </option>
          <option value="preciousMetals">
            {t(
              "fields.collateralType.options.preciousMetals"
            )}
          </option>
          <option value="digitalAssets">
            {t(
              "fields.collateralType.options.digitalAssets"
            )}
          </option>
          <option value="combination">
            {t(
              "fields.collateralType.options.combination"
            )}
          </option>
        </select>
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
            placeholder={t(
              "fields.financingAmount.placeholder"
            )}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="estimatedAssetValue">
            {t("fields.estimatedAssetValue.label")}
          </label>
          <input
            id="estimatedAssetValue"
            name="estimatedAssetValue"
            type="text"
            inputMode="decimal"
            placeholder={t(
              "fields.estimatedAssetValue.placeholder"
            )}
            required
          />
        </div>
      </div>

      {includesPreciousMetals && (
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="preciousMetalsDescription">
              {t(
                "fields.preciousMetalsDescription.label"
              )}
            </label>
            <input
              id="preciousMetalsDescription"
              name="preciousMetalsDescription"
              type="text"
              placeholder={t(
                "fields.preciousMetalsDescription.placeholder"
              )}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="preciousMetalsLocation">
              {t(
                "fields.preciousMetalsLocation.label"
              )}
            </label>
            <input
              id="preciousMetalsLocation"
              name="preciousMetalsLocation"
              type="text"
              placeholder={t(
                "fields.preciousMetalsLocation.placeholder"
              )}
              required
            />
          </div>
        </div>
      )}

      {includesDigitalAssets && (
        <>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="digitalAssetsDescription">
                {t(
                  "fields.digitalAssetsDescription.label"
                )}
              </label>
              <input
                id="digitalAssetsDescription"
                name="digitalAssetsDescription"
                type="text"
                placeholder={t(
                  "fields.digitalAssetsDescription.placeholder"
                )}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="digitalAssetCustody">
                {t("fields.digitalAssetCustody.label")}
              </label>
              <input
                id="digitalAssetCustody"
                name="digitalAssetCustody"
                type="text"
                placeholder={t(
                  "fields.digitalAssetCustody.placeholder"
                )}
                required
              />
            </div>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="custodyJurisdiction">
              {t("fields.custodyJurisdiction.label")}
            </label>
            <input
              id="custodyJurisdiction"
              name="custodyJurisdiction"
              type="text"
              placeholder={t(
                "fields.custodyJurisdiction.placeholder"
              )}
              required
            />
          </div>
        </>
      )}

      <div className="form-field form-field-full">
        <label htmlFor="ownershipSource">
          {t("fields.ownershipSource.label")}
        </label>
        <textarea
          id="ownershipSource"
          name="ownershipSource"
          rows={5}
          placeholder={t(
            "fields.ownershipSource.placeholder"
          )}
          required
        />
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

      <label className="checkbox-field">
        <input
          name="securityConfirmed"
          type="checkbox"
          required
        />
        <span>{t("confirmations.security")}</span>
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