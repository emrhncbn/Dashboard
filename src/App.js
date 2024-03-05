import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false)

  const handleLogoClick = () => {
    setIsAuthUser((pre) => !pre)
  }

  const handleLoginClick = () => {
    setIsAuthUser((pre) => !pre)
  }

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo onClick={handleLogoClick} />
        {isAuthUser ? (
          <>
            <a href='#' className='navbar-link' style={{background: "#219EBC", border: "solid 2px black", color:"white", borderRadius:"5px"}}>
              Dashboard
            </a>
            <a href='#' className='navbar-link' style={{background: "#219EBC", border: "solid 2px black", color:"white", marginLeft: "2px", borderRadius: "5px"}}>
              Sign out
            </a>
          </>
        ) : (
          <a href='#' className='navbar-link' onClick={handleLoginClick} style={{background: "#99D98C", border: "solid 2px black", color: "white", borderRadius:"5px"}}>
            Login
          </a>
        )}
      </nav>
    </header>
  )
}

function Logo({ onClick }) {
  return (
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5' onClick={onClick}>
        <Image
          className='h-8 w-auto'
          src='/mark.svg'
          alt='Tailwind Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}