import { setRequestLocale } from "next-intl/server";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import HeroSection from "@/components/landing/HeroSection";
import InstitutionalStrip from "@/components/landing/InstitutionalStrip";
import FocusSection from "@/components/landing/FocusSection";
import SelectedOpportunitiesSection from "@/components/landing/SelectedOpportunitiesSection";
import PrivateOpportunitiesSection from "@/components/landing/PrivateOpportunitiesSection";
import ApproachSection from "@/components/landing/ApproachSection";
import ClientsSection from "@/components/landing/ClientsSection";
import HospitalityRealEstateSection from "@/components/landing/HospitalityRealEstateSection";
import HospitalityDevelopmentSection from "@/components/landing/HospitalityDevelopmentSection";
import StructureSection from "@/components/landing/StructureSection";
import ExampleSection from "@/components/landing/ExampleSection";
import ProcessSection from "@/components/landing/ProcessSection";
import RequirementsSection from "@/components/landing/RequirementsSection";
import FAQSection from "@/components/landing/FAQSection";
import InquirySection from "@/components/landing/InquirySection";
import ClosingSection from "@/components/landing/ClosingSection";


type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="site-shell">
      <SiteHeader />

      <HeroSection />
      <InstitutionalStrip />

      <FocusSection />

      <SelectedOpportunitiesSection />
      <PrivateOpportunitiesSection />
      <ApproachSection />
      <ClientsSection />

      <HospitalityRealEstateSection />
      <HospitalityDevelopmentSection />

      <StructureSection />
      <ExampleSection />
      <ProcessSection />
      <RequirementsSection />
      <FAQSection />

      <InquirySection />
      <ClosingSection />

      <SiteFooter />
    </main>
  );
}