import type { Metadata } from "next";
import { PolicyPage } from "@/src/components/PolicyPage";
import { termsOfService } from "@/src/content/policies";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: termsOfService.description,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <PolicyPage policy={termsOfService} />;
}
