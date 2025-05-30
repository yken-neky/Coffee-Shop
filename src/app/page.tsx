import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import History from '@/components/History'
import Process from '@/components/Process'
import ProductList from '@/components/ProductList'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <History />
      <Process />
      <ProductList />
      <Contact />
      <Footer />
    </>
  )
} 