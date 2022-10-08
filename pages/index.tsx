import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import Navbar from './navbar'
import Home from './home'
import About from './about'
import Events from './events'

import styles from '../styles/Index.module.css'
import Footer from './footer'

let desc = `Founded by a group of freshers in September 2021,
 the Decentralised Society aims to establish a hub for students and professionals 
 interested in the philosophy of decentralisation.
 Empowering its members with knowledge, project and research opportunities, 
 the society strives to become a platform for collaboration in the space.`

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Decentralised Society</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <div className={styles.bodyWrapper}>
        <Home></Home>
        <Events></Events>
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Index