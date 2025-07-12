import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Regolith - ReDoS-Immune Regex Engine for JavaScript & TypeScript",
    template: "%s | Regolith",
  },
  description:
    "A secure, Rust-backed regex engine for JavaScript and TypeScript. Drop-in RegExp replacement with linear worst-case performance and complete ReDoS protection.",
  keywords: [
    "Regolith",
    "regex engine",
    "regular expressions",
    "ReDoS protection",
    "JavaScript regex",
    "TypeScript regex",
    "Rust regex",
    "secure regex",
    "linear performance",
    "regex security",
    "denial of service protection",
    "webassembly regex",
    "finite automaton",
    "backtracking protection",
    "email validation",
    "input sanitization",
    "user input validation",
    "password validation",
    "form validation",
    "security library",
    "performance optimization",
    "web security",
    "application security",
    "developer tools",
    "open source",
    "npm package",
    "JavaScript library",
    "TypeScript library",
  ],
  authors: [
    { name: "Jake Roggenbuck", url: "https://github.com/jakeroggenbuck" },
  ],
  creator: "Jake Roggenbuck",
  publisher: "Regolith Project",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.regolithjs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.regolithjs.com",
    title: "Regolith - ReDoS-Immune Regex Engine for JavaScript & TypeScript",
    description:
      "A secure, Rust-backed regex engine for JavaScript and TypeScript. Drop-in RegExp replacement with linear worst-case performance and complete ReDoS protection.",
    siteName: "Regolith",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Regolith - Secure Regex Engine for JavaScript and TypeScript",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regolith - ReDoS-Immune Regex Engine for JavaScript & TypeScript",
    description:
      "A secure, Rust-backed regex engine for JavaScript and TypeScript. Drop-in RegExp replacement with linear worst-case performance and complete ReDoS protection.",
    images: ["/og-image.png"],
    creator: "@jakeroggenbuck",
    site: "@regolithjs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Developer Tools",
  other: {
    "application-name": "Regolith",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Regolith",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#ff6b35",
    "msapplication-tap-highlight": "no",
    "theme-color": "#ff6b35",
    "color-scheme": "light dark",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    "X-UA-Compatible": "IE=edge",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="si2j4vl">
      <head data-oid="7lwpeyx">
        {/* Production */}
        <Script
          type="module"
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/preload/dist/index.js"
          data-oid="o7u2uiw"
        />

        {/* Development */}
        {/* <Script type="module" src={`http://localhost:8083/?${Math.random()}`} /> */}

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Regolith Project",
              url: "https://www.regolithjs.com",
              logo: "https://www.regolithjs.com/logo.png",
              description:
                "A secure, Rust-backed regex engine for JavaScript and TypeScript with ReDoS protection",
              foundingDate: "2024",
              sameAs: [
                "https://github.com/jakeroggenbuck/regolith",
                "https://www.npmjs.com/package/@regolithjs/regolith",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://github.com/jakeroggenbuck/regolith/issues",
              },
            }),
          }}
        />

        {/* Structured Data - Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Regolith",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web Browser",
              programmingLanguage: ["JavaScript", "TypeScript", "Rust"],
              description:
                "A secure, Rust-backed regex engine for JavaScript and TypeScript. Drop-in RegExp replacement with linear worst-case performance and complete ReDoS protection.",
              url: "https://www.regolithjs.com",
              downloadUrl: "https://www.npmjs.com/package/@regolithjs/regolith",
              installUrl: "https://www.npmjs.com/package/@regolithjs/regolith",
              softwareVersion: "1.0.0",
              releaseNotes:
                "Initial release with ReDoS protection and linear performance guarantees",
              featureList: [
                "ReDoS Protection",
                "Linear Performance O(n+m)",
                "Drop-in RegExp Replacement",
                "Rust-Powered Security",
                "WebAssembly Integration",
                "Email Validation",
                "Input Sanitization",
                "Password Validation",
              ],
              screenshot: "https://www.regolithjs.com/screenshot.png",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                ratingCount: "1",
                bestRating: "5",
                worstRating: "1",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              author: {
                "@type": "Person",
                name: "Jake Roggenbuck",
                url: "https://github.com/jakeroggenbuck",
              },
              publisher: {
                "@type": "Organization",
                name: "Regolith Project",
              },
              license: "https://opensource.org/licenses/MIT",
              codeRepository: "https://github.com/jakeroggenbuck/regolith",
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Regolith",
              url: "https://www.regolithjs.com",
              description:
                "A secure, Rust-backed regex engine for JavaScript and TypeScript with ReDoS protection",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.regolithjs.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Regolith Project",
              },
            }),
          }}
        />

        {/* Structured Data - HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Install and Use Regolith for Secure Regex Processing",
              description:
                "Step-by-step guide to install and use Regolith, a ReDoS-immune regex engine for JavaScript and TypeScript",
              image: "https://www.regolithjs.com/installation-guide.png",
              totalTime: "PT5M",
              estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: "0",
              },
              supply: [
                {
                  "@type": "HowToSupply",
                  name: "Node.js environment",
                },
                {
                  "@type": "HowToSupply",
                  name: "npm, yarn, pnpm, or bun package manager",
                },
              ],
              tool: [
                {
                  "@type": "HowToTool",
                  name: "Code editor",
                },
              ],
              step: [
                {
                  "@type": "HowToStep",
                  name: "Install Regolith",
                  text: "Install Regolith using your preferred package manager: npm install @regolithjs/regolith",
                  url: "https://www.regolithjs.com#install",
                },
                {
                  "@type": "HowToStep",
                  name: "Import Regolith",
                  text: "Import Regolith in your JavaScript or TypeScript file: import { Regolith } from '@regolithjs/regolith';",
                  url: "https://www.regolithjs.com#examples",
                },
                {
                  "@type": "HowToStep",
                  name: "Create Secure Regex",
                  text: "Replace your existing RegExp with Regolith: const regex = new Regolith('your-pattern');",
                  url: "https://www.regolithjs.com#examples",
                },
                {
                  "@type": "HowToStep",
                  name: "Test Your Implementation",
                  text: "Test your regex patterns to ensure they work as expected and are protected against ReDoS attacks",
                  url: "https://www.regolithjs.com#examples",
                },
              ],
            }),
          }}
        />

        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is ReDoS and why is it dangerous?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ReDoS (Regular Expression Denial of Service) is an attack where malicious input causes regex engines to take exponentially longer to process, potentially freezing applications. Traditional backtracking-based regex engines are vulnerable to this attack.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Regolith protect against ReDoS attacks?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Regolith uses a finite automaton-based approach implemented in Rust, guaranteeing linear time complexity O(n+m) regardless of input or pattern complexity. This prevents exponential backtracking that causes ReDoS attacks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Regolith a drop-in replacement for RegExp?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Regolith provides a compatible API with JavaScript's RegExp, making it easy to migrate existing code with minimal changes while gaining security benefits.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What programming languages does Regolith support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Regolith is designed for JavaScript and TypeScript applications, with the core engine built in Rust and compiled to WebAssembly for optimal performance and security.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I install Regolith?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can install Regolith using any package manager: npm install @regolithjs/regolith, yarn add @regolithjs/regolith, pnpm add @regolithjs/regolith, or bun add @regolithjs/regolith.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.npmjs.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//www.npmjs.com" />

        {/* Favicon and app icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />

        {/* Additional SEO meta tags */}
        <meta name="author" content="Jake Roggenbuck" />
        <meta name="copyright" content="Regolith Project" />
        <meta name="language" content="en" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Social media specific */}
        <meta property="og:site_name" content="Regolith" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Regolith - ReDoS-Immune Regex Engine for JavaScript & TypeScript"
        />
        <meta
          property="og:description"
          content="A secure, Rust-backed regex engine for JavaScript and TypeScript. Drop-in RegExp replacement with linear worst-case performance and complete ReDoS protection."
        />
        <meta property="og:url" content="https://www.regolithjs.com" />
        <meta
          property="og:image"
          content="https://www.regolithjs.com/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Regolith - Secure Regex Engine for JavaScript and TypeScript"
        />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter specific */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@regolithjs" />
        <meta name="twitter:creator" content="@jakeroggenbuck" />
        <meta
          name="twitter:title"
          content="Regolith - ReDoS-Immune Regex Engine for JavaScript & TypeScript"
        />
        <meta
          name="twitter:description"
          content="A secure, Rust-backed regex engine for JavaScript and TypeScript. Drop-in RegExp replacement with linear worst-case performance and complete ReDoS protection."
        />
        <meta
          name="twitter:image"
          content="https://www.regolithjs.com/og-image.png"
        />
        <meta
          name="twitter:image:alt"
          content="Regolith - Secure Regex Engine for JavaScript and TypeScript"
        />

        {/* Additional Open Graph tags */}
        <meta
          property="og:image:secure_url"
          content="https://www.regolithjs.com/og-image.png"
        />
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Schema.org additional markup */}
        <meta itemProp="name" content="Regolith" />
        <meta
          itemProp="description"
          content="A secure, Rust-backed regex engine for JavaScript and TypeScript. Drop-in RegExp replacement with linear worst-case performance and complete ReDoS protection."
        />
        <meta
          itemProp="image"
          content="https://www.regolithjs.com/og-image.png"
        />

        {/* Mobile optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Regolith" />
        <meta name="application-name" content="Regolith" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="msapplication-TileColor" content="#ff6b35" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Performance optimization */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />

        {/* Additional keywords for better SEO */}
        <meta
          name="keywords"
          content="Regolith, regex engine, regular expressions, ReDoS protection, JavaScript regex, TypeScript regex, Rust regex, secure regex, linear performance, regex security, denial of service protection, webassembly regex, finite automaton, backtracking protection, email validation, input sanitization, user input validation, password validation, form validation, security library, performance optimization, web security, application security, developer tools, open source, npm package, JavaScript library, TypeScript library"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.regolithjs.com" />

        {/* Alternative languages (if you plan to support them) */}
        <link rel="alternate" hrefLang="en" href="https://www.regolithjs.com" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.regolithjs.com"
        />
      </head>
      <body className={inter.className} data-oid="mwz9mme">
        {children}
      </body>
    </html>
  );
}
