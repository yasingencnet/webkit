import { Manrope, Libre_Baskerville } from 'next/font/google';
import '@/assets/globals.scss';
import commonConfig from '@/database/config/metadata.json';
import LenisScroller from '@/components/UI/LenisScroller/LenisScroller';
import CustomCursor from "@/components/UI/Elements/CustomCursor/CustomCursor";

const bodyFont = Manrope({
    subsets: ['latin'],
    variable: '--font-primary',
    weight: ['300', '400', '500', '700'],
    display: 'swap',
});
export const altFont = Libre_Baskerville({
    subsets: ['latin'],
    variable: '--font-alt',
    weight: ['400', '700'],
    display: 'swap',
});

export const metadata = {
  title: commonConfig.metadata.title,
  description: commonConfig.metadata.description,
}

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={bodyFont.className}>
          <body>
            <CustomCursor>
                {children}
            </CustomCursor>
            <LenisScroller></LenisScroller>
          </body>
      </html>
  )
}
