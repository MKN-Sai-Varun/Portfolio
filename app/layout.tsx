import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background, { FloatingShapes, CodeBrackets } from '@/components/Background'
import { Analytics } from "@vercel/analytics/next"

<Analytics />
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata: Metadata = {
  title: 'Varun | AI Engineer & Full Stack Developer',
  description: 'Portfolio of MKN Sai Varun — AI Engineer, Full Stack Developer, and Salesforce SWE Intern. Explore projects, experience, and achievements.',
  keywords: ['Varun', 'MKN Sai Varun', 'AI Engineer', 'Full Stack Developer', 'Portfolio', 'Salesforce', 'Next.js'],
  authors: [{ name: 'MKN Sai Varun' }],
  openGraph: {
    title: 'Varun | AI Engineer & Full Stack Developer',
    description: 'Portfolio of MKN Sai Varun — AI Engineer, Full Stack Developer, and Salesforce SWE Intern.',
    url: 'https://portfolio-tau-ochre-61.vercel.app',
    siteName: 'Varun Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun | AI Engineer & Full Stack Developer',
    description: 'Portfolio of MKN Sai Varun — AI Engineer, Full Stack Developer, and Salesforce SWE Intern.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <Background />
        <FloatingShapes />
        <CodeBrackets />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
