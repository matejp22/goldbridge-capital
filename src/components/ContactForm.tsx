"use client";

import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type FormStatus = "idle" | "sending" | "success" | "error";
type SupportedLocale = "en" | "de" | "it";

type InquiryType =
  | "assetBackedFinancing"
  | "hospitalitySale"
  | "hospitalityAcquisition"
  | "hospitalityDevelopment";

type CollateralType =
  | "preciousMetals"
  | "digitalAssets"
  | "combination";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;

  inquiryType: InquiryType | "";

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

  propertyName: string;
  propertyType: string;
  propertyLocation: string;
  propertyKeys: string;
  askingPrice: string;
  annualRevenue: string;
  ebitdaNoi: string;
  operatorBrand: string;
  ownershipStructure: string;
  marketStatus: string;
  propertyAuthority: string;
  propertyOverview: string;

  acquisitionMarkets: string;
  acquisitionPropertyType: string;
  investmentRange: string;
  acquisitionCriteria: string;

  developmentLocation: string;
  developmentProjectType: string;
  developmentStage: string;
  landControl: string;
  planningStatus: string;
  totalDevelopmentCost: string;
  capitalInvested: string;
  debtRequired: string;
  equityRequired: string;
  developmentKeys: string;
  developmentOperatorBrand: string;
  developmentOverview: string;

  authorityConfirmed: boolean;
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

  const [inquiryType, setInquiryType] =
    useState<InquiryType | "">("");

  const [collateralType, setCollateralType] =
    useState<CollateralType | "">("");

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isAssetBackedFinancing =
    inquiryType === "assetBackedFinancing";

  const isHospitalitySale =
    inquiryType === "hospitalitySale";

  const isHospitalityAcquisition =
    inquiryType === "hospitalityAcquisition";

  const isHospitalityDevelopment =
    inquiryType === "hospitalityDevelopment";

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

      inquiryType: String(
        formData.get("inquiryType") || ""
      ) as InquiryType | "",

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

      purpose: String(
        formData.get("purpose") || ""
      ).trim(),

      propertyName: String(
        formData.get("propertyName") || ""
      ).trim(),

      propertyType: String(
        formData.get("propertyType") || ""
      ).trim(),

      propertyLocation: String(
        formData.get("propertyLocation") || ""
      ).trim(),

      propertyKeys: String(
        formData.get("propertyKeys") || ""
      ).trim(),

      askingPrice: String(
        formData.get("askingPrice") || ""
      ).trim(),

      annualRevenue: String(
        formData.get("annualRevenue") || ""
      ).trim(),

      ebitdaNoi: String(
        formData.get("ebitdaNoi") || ""
      ).trim(),

      operatorBrand: String(
        formData.get("operatorBrand") || ""
      ).trim(),

      ownershipStructure: String(
        formData.get("ownershipStructure") || ""
      ).trim(),

      marketStatus: String(
        formData.get("marketStatus") || ""
      ).trim(),

      propertyAuthority: String(
        formData.get("propertyAuthority") || ""
      ).trim(),

      propertyOverview: String(
        formData.get("propertyOverview") || ""
      ).trim(),

      acquisitionMarkets: String(
        formData.get("acquisitionMarkets") || ""
      ).trim(),

      acquisitionPropertyType: String(
        formData.get("acquisitionPropertyType") || ""
      ).trim(),

      investmentRange: String(
        formData.get("investmentRange") || ""
      ).trim(),

      acquisitionCriteria: String(
        formData.get("acquisitionCriteria") || ""
      ).trim(),

      developmentLocation: String(
        formData.get("developmentLocation") || ""
      ).trim(),

      developmentProjectType: String(
        formData.get("developmentProjectType") || ""
      ).trim(),

      developmentStage: String(
        formData.get("developmentStage") || ""
      ).trim(),

      landControl: String(
        formData.get("landControl") || ""
      ).trim(),

      planningStatus: String(
        formData.get("planningStatus") || ""
      ).trim(),

      totalDevelopmentCost: String(
        formData.get("totalDevelopmentCost") || ""
      ).trim(),

      capitalInvested: String(
        formData.get("capitalInvested") || ""
      ).trim(),

      debtRequired: String(
        formData.get("debtRequired") || ""
      ).trim(),

      equityRequired: String(
        formData.get("equityRequired") || ""
      ).trim(),

      developmentKeys: String(
        formData.get("developmentKeys") || ""
      ).trim(),

      developmentOperatorBrand: String(
        formData.get("developmentOperatorBrand") || ""
      ).trim(),

      developmentOverview: String(
        formData.get("developmentOverview") || ""
      ).trim(),

      authorityConfirmed:
        formData.get("authorityConfirmed") === "on",

      privacyConfirmed:
        formData.get("privacyConfirmed") === "on",

      securityConfirmed:
        formData.get("securityConfirmed") === "on",

      website: String(
        formData.get("website") || ""
      ).trim(),

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
      setInquiryType("");
      setCollateralType("");
      setStatus("success");

      window.gtag?.("event", "generate_lead", {
        form_name: "confidential_transaction_inquiry",
        form_location: "landing_page",
        inquiry_type: payload.inquiryType,
        collateral_type:
          payload.collateralType || "not_applicable",
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
        <label htmlFor="inquiryType">
          {t("fields.inquiryType.label")}
        </label>

        <select
          id="inquiryType"
          name="inquiryType"
          value={inquiryType}
          onChange={(event) => {
            setInquiryType(
              event.target.value as InquiryType | ""
            );

            setCollateralType("");
          }}
          required
        >
          <option value="">
            {t("fields.inquiryType.placeholder")}
          </option>

          <option value="assetBackedFinancing">
            {t(
              "fields.inquiryType.options.assetBackedFinancing"
            )}
          </option>

          <option value="hospitalitySale">
            {t(
              "fields.inquiryType.options.hospitalitySale"
            )}
          </option>

          <option value="hospitalityAcquisition">
            {t(
              "fields.inquiryType.options.hospitalityAcquisition"
            )}
          </option>

          <option value="hospitalityDevelopment">
            {t(
              "fields.inquiryType.options.hospitalityDevelopment"
            )}
          </option>
        </select>
      </div>

      {isAssetBackedFinancing && (
        <>
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
                  event.target.value as
                    | CollateralType
                    | ""
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
                    {t(
                      "fields.digitalAssetCustody.label"
                    )}
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
                  {t(
                    "fields.custodyJurisdiction.label"
                  )}
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
              placeholder={t(
                "fields.purpose.placeholder"
              )}
              required
            />
          </div>
        </>
      )}

      {isHospitalitySale && (
        <>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="propertyName">
                {t("fields.propertyName.label")}
              </label>

              <input
                id="propertyName"
                name="propertyName"
                type="text"
                placeholder={t(
                  "fields.propertyName.placeholder"
                )}
              />
            </div>

            <div className="form-field">
              <label htmlFor="propertyType">
                {t("fields.propertyType.label")}
              </label>

              <input
                id="propertyType"
                name="propertyType"
                type="text"
                placeholder={t(
                  "fields.propertyType.placeholder"
                )}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="propertyLocation">
                {t("fields.propertyLocation.label")}
              </label>

              <input
                id="propertyLocation"
                name="propertyLocation"
                type="text"
                placeholder={t(
                  "fields.propertyLocation.placeholder"
                )}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="propertyKeys">
                {t("fields.propertyKeys.label")}
              </label>

              <input
                id="propertyKeys"
                name="propertyKeys"
                type="text"
                inputMode="numeric"
                placeholder={t(
                  "fields.propertyKeys.placeholder"
                )}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="askingPrice">
                {t("fields.askingPrice.label")}
              </label>

              <input
                id="askingPrice"
                name="askingPrice"
                type="text"
                inputMode="decimal"
                placeholder={t(
                  "fields.askingPrice.placeholder"
                )}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="marketStatus">
                {t("fields.marketStatus.label")}
              </label>

              <select
                id="marketStatus"
                name="marketStatus"
                defaultValue=""
                required
              >
                <option value="">
                  {t("fields.marketStatus.placeholder")}
                </option>

                <option value="offMarket">
                  {t(
                    "fields.marketStatus.options.offMarket"
                  )}
                </option>

                <option value="privatelyMarketed">
                  {t(
                    "fields.marketStatus.options.privatelyMarketed"
                  )}
                </option>

                <option value="publiclyMarketed">
                  {t(
                    "fields.marketStatus.options.publiclyMarketed"
                  )}
                </option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="annualRevenue">
                {t("fields.annualRevenue.label")}
              </label>

              <input
                id="annualRevenue"
                name="annualRevenue"
                type="text"
                inputMode="decimal"
                placeholder={t(
                  "fields.annualRevenue.placeholder"
                )}
              />
            </div>

            <div className="form-field">
              <label htmlFor="ebitdaNoi">
                {t("fields.ebitdaNoi.label")}
              </label>

              <input
                id="ebitdaNoi"
                name="ebitdaNoi"
                type="text"
                inputMode="decimal"
                placeholder={t(
                  "fields.ebitdaNoi.placeholder"
                )}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="operatorBrand">
                {t("fields.operatorBrand.label")}
              </label>

              <input
                id="operatorBrand"
                name="operatorBrand"
                type="text"
                placeholder={t(
                  "fields.operatorBrand.placeholder"
                )}
              />
            </div>

            <div className="form-field">
              <label htmlFor="ownershipStructure">
                {t("fields.ownershipStructure.label")}
              </label>

              <input
                id="ownershipStructure"
                name="ownershipStructure"
                type="text"
                placeholder={t(
                  "fields.ownershipStructure.placeholder"
                )}
              />
            </div>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="propertyAuthority">
              {t("fields.propertyAuthority.label")}
            </label>

            <textarea
              id="propertyAuthority"
              name="propertyAuthority"
              rows={4}
              placeholder={t(
                "fields.propertyAuthority.placeholder"
              )}
              required
            />
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="propertyOverview">
              {t("fields.propertyOverview.label")}
            </label>

            <textarea
              id="propertyOverview"
              name="propertyOverview"
              rows={7}
              placeholder={t(
                "fields.propertyOverview.placeholder"
              )}
              required
            />
          </div>
        </>
      )}

      {isHospitalityAcquisition && (
        <>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="acquisitionMarkets">
                {t("fields.acquisitionMarkets.label")}
              </label>

              <input
                id="acquisitionMarkets"
                name="acquisitionMarkets"
                type="text"
                placeholder={t(
                  "fields.acquisitionMarkets.placeholder"
                )}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="acquisitionPropertyType">
                {t(
                  "fields.acquisitionPropertyType.label"
                )}
              </label>

              <input
                id="acquisitionPropertyType"
                name="acquisitionPropertyType"
                type="text"
                placeholder={t(
                  "fields.acquisitionPropertyType.placeholder"
                )}
                required
              />
            </div>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="investmentRange">
              {t("fields.investmentRange.label")}
            </label>

            <input
              id="investmentRange"
              name="investmentRange"
              type="text"
              inputMode="decimal"
              placeholder={t(
                "fields.investmentRange.placeholder"
              )}
              required
            />
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="acquisitionCriteria">
              {t("fields.acquisitionCriteria.label")}
            </label>

            <textarea
              id="acquisitionCriteria"
              name="acquisitionCriteria"
              rows={7}
              placeholder={t(
                "fields.acquisitionCriteria.placeholder"
              )}
              required
            />
          </div>
        </>
      )}

      {isHospitalityDevelopment && (
        <>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="developmentLocation">
                {t("fields.developmentLocation.label")}
              </label>

              <input
                id="developmentLocation"
                name="developmentLocation"
                type="text"
                placeholder={t(
                  "fields.developmentLocation.placeholder"
                )}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="developmentProjectType">
                {t(
                  "fields.developmentProjectType.label"
                )}
              </label>

              <input
                id="developmentProjectType"
                name="developmentProjectType"
                type="text"
                placeholder={t(
                  "fields.developmentProjectType.placeholder"
                )}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="developmentStage">
                {t("fields.developmentStage.label")}
              </label>

              <input
                id="developmentStage"
                name="developmentStage"
                type="text"
                placeholder={t(
                  "fields.developmentStage.placeholder"
                )}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="developmentKeys">
                {t("fields.developmentKeys.label")}
              </label>

              <input
                id="developmentKeys"
                name="developmentKeys"
                type="text"
                inputMode="numeric"
                placeholder={t(
                  "fields.developmentKeys.placeholder"
                )}
              />
            </div>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="landControl">
              {t("fields.landControl.label")}
            </label>

            <input
              id="landControl"
              name="landControl"
              type="text"
              placeholder={t(
                "fields.landControl.placeholder"
              )}
              required
            />
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="planningStatus">
              {t("fields.planningStatus.label")}
            </label>

            <input
              id="planningStatus"
              name="planningStatus"
              type="text"
              placeholder={t(
                "fields.planningStatus.placeholder"
              )}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="totalDevelopmentCost">
                {t(
                  "fields.totalDevelopmentCost.label"
                )}
              </label>

              <input
                id="totalDevelopmentCost"
                name="totalDevelopmentCost"
                type="text"
                inputMode="decimal"
                placeholder={t(
                  "fields.totalDevelopmentCost.placeholder"
                )}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="capitalInvested">
                {t("fields.capitalInvested.label")}
              </label>

              <input
                id="capitalInvested"
                name="capitalInvested"
                type="text"
                inputMode="decimal"
                placeholder={t(
                  "fields.capitalInvested.placeholder"
                )}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="debtRequired">
                {t("fields.debtRequired.label")}
              </label>

              <input
                id="debtRequired"
                name="debtRequired"
                type="text"
                inputMode="decimal"
                placeholder={t(
                  "fields.debtRequired.placeholder"
                )}
              />
            </div>

            <div className="form-field">
              <label htmlFor="equityRequired">
                {t("fields.equityRequired.label")}
              </label>

              <input
                id="equityRequired"
                name="equityRequired"
                type="text"
                inputMode="decimal"
                placeholder={t(
                  "fields.equityRequired.placeholder"
                )}
              />
            </div>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="developmentOperatorBrand">
              {t(
                "fields.developmentOperatorBrand.label"
              )}
            </label>

            <input
              id="developmentOperatorBrand"
              name="developmentOperatorBrand"
              type="text"
              placeholder={t(
                "fields.developmentOperatorBrand.placeholder"
              )}
            />
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="developmentOverview">
              {t("fields.developmentOverview.label")}
            </label>

            <textarea
              id="developmentOverview"
              name="developmentOverview"
              rows={7}
              placeholder={t(
                "fields.developmentOverview.placeholder"
              )}
              required
            />
          </div>
        </>
      )}

      {inquiryType && (
        <>
          <label className="checkbox-field">
            <input
              name="authorityConfirmed"
              type="checkbox"
              required
            />

            <span>
              {t("confirmations.authority")}
            </span>
          </label>

          <label className="checkbox-field">
            <input
              name="privacyConfirmed"
              type="checkbox"
              required
            />

            <span>
              {t("confirmations.privacy")}
            </span>
          </label>

          <label className="checkbox-field">
            <input
              name="securityConfirmed"
              type="checkbox"
              required
            />

            <span>
              {t("confirmations.security")}
            </span>
          </label>
        </>
      )}

      <button
        type="submit"
        className="submit-button"
        disabled={
          status === "sending" || !inquiryType
        }
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