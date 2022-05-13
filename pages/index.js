import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Loader show={true} />
      <button onClick={() => toast.success('Hello')}>Click</button>
    </div>
  )
}
