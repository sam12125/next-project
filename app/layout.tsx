// app/layout.tsx

import { ReactNode } from 'react';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: 'My App',
  description: 'Your description here', 
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        {children}
        {/* <h1 className={`text-blue-500 ${inter.className}`}>I'm blue!</h1> */}
      </body>
    </html>
  );
}
