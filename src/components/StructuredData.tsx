'use client';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adnan Khan",
    "jobTitle": "Full Stack Developer",
    "description": "Passionate Full Stack Developer with 1+ years of experience building modern web applications",
    "url": "https://adnankhan.dev",
    "image": "https://adnankhan.dev/adnan-photo.jpg",
    "sameAs": [
      "https://linkedin.com/in/yourprofile",
      "https://github.com/yourusername",
      "https://twitter.com/yourusername"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Full Stack Development",
      "UI/UX Design"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressCountry": "Your Country"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "professional",
      "email": "adnan@example.com"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Adnan Khan Portfolio",
    "description": "Personal portfolio showcasing projects and skills of Full Stack Developer Adnan Khan",
    "url": "https://adnankhan.dev",
    "author": {
      "@type": "Person",
      "name": "Adnan Khan"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://adnankhan.dev/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </>
  );
}
