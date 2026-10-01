import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export const StructuredData = () => {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bookend & Hookbrass",
    url: "https://bookend-hookbrass.com",
    logo: "https://bookend-hookbrass.com/web-app-manifest-512x512.png",
    description: t("intro.description"),
    sameAs: ["https://www.instagram.com/hookbrass3"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hookbrass3@gmail.com",
      contactType: "customer service",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json" id="organization-schema">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
