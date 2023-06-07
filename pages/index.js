import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navabr from '@/compo/navbar'
import Footer from '@/compo/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div>
        <Navabr />
        <br/>
        <h1>Homepage</h1>
        <br/>
        <Footer/>
     </div>
    </>
  )
}
