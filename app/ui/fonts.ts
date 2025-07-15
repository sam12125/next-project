import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],  // ✅ Add this line
  weight: ['400', '700'],  // Adjust weights if needed
  display: 'swap', // Optional
});
