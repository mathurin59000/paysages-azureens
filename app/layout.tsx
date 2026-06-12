import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Toaster from "@/app/components/ui/toaster";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { Toaster as Sonner } from '@/app/components/ui/sonner';
import { GoogleAnalytics } from "@next/third-parties/google";

import "@radix-ui/themes/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Paysages Azuréens — Paysagiste Côte d'Azur | Création & Entretien Jardin",
  description: "Paysages Azuréens, paysagiste sur la Côte d'Azur. Création de jardins méditerranéens, entretien, aménagement extérieur à Nice, Cannes, Antibes. Devis gratuit.",
alternates: {
    canonical: "https://paysages-azureens.fr",
  },
  openGraph: {
    title: "Paysages Azuréens — Paysagiste Côte d'Azur",
    description: "Création, entretien et aménagement de jardins méditerranéens d'exception sur la Côte d'Azur.",
    locale: "fr_FR",
    type: "website",
    url: "https://paysages-azureens.fr",
    images: [
      {
        url: "https://paysages-azureens.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paysages Azuréens — Paysagiste Côte d'Azur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysages Azuréens — Paysagiste Côte d'Azur",
    description:
      "Création, entretien et aménagement de jardins méditerranéens d'exception sur la Côte d'Azur.",
    images: ["https://paysages-azureens.fr/og-image.jpg"],
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const gaId = process.env.GOOGLE_ANALYTICS_ID ?? '';

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Theme>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Theme>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
};

export default RootLayout;
