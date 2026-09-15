import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  image = "/web-app-manifest-512x512.png",
  url = "https://bookend-hookbrass.com",
  type = "website",
}: SEOProps) => {
  const { i18n } = useTranslation();

  const defaultTitle =
    "Bookend & Hookbrass - Exquisite Bas-Relief Artworks in Bronze and Brass";
  const defaultDescription =
    "Hand-crafted bas-relief works in bronze and brass transform spaces into galleries of refined elegance. Each piece is meticulously created to become a timeless addition to your collection.";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalUrl = url || "https://bookend-hookbrass.com";
  const finalImage = image.startsWith("http") ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta
        name="keywords"
        content="Bookend, Hookbrass, bas-relief, bronze, brass, art, sculpture, home decor, office decor, handcrafted, antiques, collectibles, metalwork, artisanal"
      />
      <meta name="author" content="Bookend & Hookbrass" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={i18n.language} />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bookend & Hookbrass" />
      <meta
        property="og:locale"
        content={i18n.language === "es" ? "es_ES" : "en_US"}
      />
      <meta
        property="og:locale:alternate"
        content={i18n.language === "es" ? "en_US" : "es_ES"}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:creator" content="@hookbrass3" />
      <meta name="twitter:site" content="@hookbrass3" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#f9f6f0" />
      <meta name="msapplication-TileColor" content="#f9f6f0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Helmet>
  );
};
