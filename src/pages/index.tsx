import { Inter } from 'next/font/google'
import ListItems from '@/components/ListItems'
import Header from '@/components/Header'
import MiniCartProvider from '@/context/MiniCart'
import Minicart from '@/components/Minicart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MiniCartProvider>
      <Header />
      <main
        className={`min-h-screen p-2 sm:p-4 lg:p-6 ${inter.className}`}
      >
        <ListItems />
      </main>
    </MiniCartProvider>
  )
}
