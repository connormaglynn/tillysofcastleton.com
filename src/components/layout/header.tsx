import Link from 'next/link'
import Image from 'next/image'
import { index as config } from '../../config'

const Header = () => {
  return (
    <div className="flex flex-wrap w-full px-10 py-10 drop-shadow-md z-10 bg-accent-1 text-white text-center">
      <Link href="/" className="basis-full pb-5">
        <div className="align-left">
          <Image
            src="/assets/logo.png"
            width={50}
            height={120}
            alt="Logo"
            className="drop-shadow-md inline"
          />
          <h1 className="inline text-3xl align-middle font-brand">
            {config.title}
          </h1>
        </div>
      </Link>

      <nav className="flex justify-center gap-3 basis-full sm:float-right">
        <Link href="/#portfolio">Portfolio</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Header
