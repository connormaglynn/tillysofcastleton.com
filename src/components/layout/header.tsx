import Link from 'next/link'
import { index as config } from '../../config'

const Header = () => {
  return (
    <div className="flex flex-wrap w-full px-10 py-10 drop-shadow-md z-10 bg-accent-1 text-accent-2 text-center">
      <Link href="/" className="basis-full">
        <div className="align-left">
          <h1 className="inline text-3xl align-middle font-brand md:text-5xl">
            {config.title}
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default Header
