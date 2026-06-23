import type { Metadata } from "next";
import { PolicyPage } from "@/src/components/PolicyPage";
import { privacyPolicy } from "@/src/content/policies";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacyPolicy.description,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PolicyPage policy={privacyPolicy} />;
}
