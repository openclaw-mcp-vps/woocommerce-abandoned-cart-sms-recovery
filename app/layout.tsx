import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SMS Cart Recovery for WooCommerce — Recover Lost Sales Automatically',
  description: 'Automatically send personalized SMS messages to customers who abandon carts. Recover sales with customizable timing and discount codes. $13/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d1e77d5c-ac3e-4c76-b813-9ab8fcffee8d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
