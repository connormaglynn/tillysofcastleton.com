import Link from 'next/link'
import Image from 'next/image'
import { config } from '../../lib/config'
import styles from '../../styles/Home.module.css'

const Header = () => {
  return (
    <div className="top-0 w-full p-14 drop-shadow-md bg-white z-10 bg-accent-1 text-white bg-opacity-50">
      <Link href="/" className={styles.header}>
        <Image
          src="/assets/logo.png"
          width={50}
          height={50}
          alt="Blog Logo"
          className="drop-shadow-md inline"
        />
        <h1 className="inline text-3xl align-middle pl-4 font-brand">
          {config.title}
        </h1>
      </Link>

      <nav className={styles.nav}>
        <Link href="/#portfolio">Portfolio</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Header
