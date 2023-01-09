import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import style from "../../styles/navbar.module.css"

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={style.navbar}>
      <h1></h1>
      <Link href="/">
        <div className={style.char}>
          HOME
        </div>
      </Link>
      <Link href="/projects">
        <div className={style.char}>
          PROJECTS
        </div>
      </Link>
    </div>
  )
}

export default Navbar