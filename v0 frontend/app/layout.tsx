import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'StartupOps - Founder & Investor Intelligence Platform',
  description: 'Intelligent operations platform for early-stage startups to track metrics, optimize budgets, and prepare for funding rounds.',
  keywords: ["startup", "intelligence", "metrics", "funding", "analytics", "operations"],
  authors: [{ name: "StartupOps" }],
  openGraph: {
    title: "StartupOps - Founder & Investor Intelligence Platform",
    description: "Intelligent operations platform for early-stage startups",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#6366f1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
