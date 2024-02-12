import Link from "next/link"

export default function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-center">
        <ul className="flex gap-10 mt-3 text-black">
          <li className="bg-btTercero">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="bg-btTercero">
            <Link href="/a">
              Info
            </Link>
          </li>
          <li className="bg-btTercero">
            <Link href="/about">
              About
            </Link>
          </li>

        </ul>
      </nav>
    </>
  )
}


