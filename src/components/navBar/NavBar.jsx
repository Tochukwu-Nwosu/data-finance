import { HorizontalNavLinks, VerticalNavLinks } from './NavLinks'
import styles from '../../style'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {
  const [ nav, setNav ] = useState(false)
  
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className={`${styles.navHeading}`}>REACT.</h1>
      <ul className="md:flex hidden">
        <HorizontalNavLinks />
      </ul>
      <div className='block md:hidden cursor-pointer ease-in-out duration-500' onClick={handleNav}>
        { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
      </div>
      <div className={ nav ? `${styles.verticalNavBar} left-0` : `${styles.verticalNavBar} left-[-100%]` }>
        <h1 className={`${styles.navHeading} p-4`}>REACT.</h1>
        <ul className='p-4'>
          <VerticalNavLinks />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
