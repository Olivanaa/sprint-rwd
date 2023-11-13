import { Inter } from 'next/font/google'
import './globals.scss'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porto Seguro',
  description: 'Site para vistoria de bicicletas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
            <body className={inter.className}>
        <Cabecalho/>
        {children}
        <Rodape/>
        </body>
    </html>
  )
}
