import { Manrope } from 'next/font/google';
import '@/assets/globals.scss';
import commonConfig from '@/config/metadata.json';

const bodyFont = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: commonConfig.metadata.title,
  description: commonConfig.metadata.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>{children}</body>
    </html>
  )
}
