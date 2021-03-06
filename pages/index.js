import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image } from '@/components/Base'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Test Next project</a>
        </h1>
        <div>
          <Image src="https://sf-storage-2.nyc3.cdn.digitaloceanspaces.com/propex/assets/home-heros/hallway@3x.jpg" 
                 alt="Hallway"
                 width={745}
                 ratio={745 / 510} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
