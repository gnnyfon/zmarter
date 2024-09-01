import { CartProvider } from '@/components/contexts/CartContext';
import './global.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Zmart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Toaster richColors />
      <CartProvider>
        <body>{children}</body>
      </CartProvider>
    </html>
  )
}
