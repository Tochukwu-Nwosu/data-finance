import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {
  const [ nav, setNav ] = useState(false)
  
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full font-bold text-3xl text-lightGreen">REACT.</h1>
      <ul className="md:flex hidden">
        <li className="p-4 cursor-pointer hover:text-gray-400">Home</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">Company</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">Resources</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">About</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">Contact</li>
      </ul>
      <div className='block md:hidden cursor-pointer ease-in-out duration-500' onClick={handleNav}>
        { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
      </div>
      <div className={ nav ? 'fixed left-0 top-0 h-full w-[60%] bg-[#000300] border-r border-gray-900 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] top-0 h-full w-[60%] bg-[#000300] border-r border-gray-900 ease-in-out duration-500 md:hidden' }>
        <h1 className="w-full p-4 font-bold text-3xl text-lightGreen">REACT.</h1>
        <ul className='p-4'>
            <li className="p-4 cursor-pointer border-b border-gray-600 hover:text-gray-400">Home</li>
            <li className="p-4 cursor-pointer border-b border-gray-600 hover:text-gray-400">Company</li>
            <li className="p-4 cursor-pointer border-b border-gray-600 hover:text-gray-400">Resources</li>
            <li className="p-4 cursor-pointer border-b border-gray-600 hover:text-gray-400">About</li>
            <li className="p-4 cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
