import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/landing/HeroSection";
import SiteFooter from "@/components/layout/SiteFooter";
import { setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/shared/Icon";
import InstitutionalStrip from "@/components/landing/InstitutionalStrip";
import ApproachSection from "@/components/landing/ApproachSection";
import ClientsSection from "@/components/landing/ClientsSection";
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
      <ApproachSection />
      <ClientsSection />
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