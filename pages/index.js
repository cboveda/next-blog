import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={{
        pathname: '/[username]',
        query: { username: 'jeff' },
      }}>Jeff</Link>
    </div>
  )
}
