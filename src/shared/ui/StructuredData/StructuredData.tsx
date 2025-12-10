import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const StructuredData = () => {
  const { t, i18n } = useTranslation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bookend & Hookbrass",
    "url": "https://bookend-hookbrass.com",
    "logo": "https://bookend-hookbrass.com/logo.png",
    "description": t('intro.description'),
    "sameAs": [
      "https://www.instagram.com/hookbrass3",
      "mailto:hookbrass3@gmail.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hookbrass3@gmail.com",
      "contactType": "Customer Service"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bookend & Hookbrass",
    "url": "https://bookend-hookbrass.com",
    "description": t('intro.description'),
    "inLanguage": i18n.language,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bookend-hookbrass.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Bookend & Hookbrass Collections",
    "description": t('intro.description'),
    "url": "https://bookend-hookbrass.com",
    "inLanguage": i18n.language
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(collectionSchema)}
      </script>
    </Helmet>
  );
};

