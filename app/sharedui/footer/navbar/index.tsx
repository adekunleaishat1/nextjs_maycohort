import React from 'react'
import { CiMenuFries } from "react-icons/ci";

// sm: md: lg:

const Navbar = () => {
  return (
    <div>
        <nav className='py-[15px] bg-[#ffffff] flex justify-between items-center px-[10px]'>
            <h1 className='text-[25px] text-amber-600 font-medium text-center leading-4 tracking-wide'>OLG</h1>
            <div >
                <ul className='flex justify-between items-center text-[12px] text-black w-[250px]'>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>page</li>
                    <li>profile</li>
                </ul>
            </div>
            <button className='bg-[#ffffff] px-[12px] py-[4px] border-2 border-black text-black rounded-md hidden sm:flex'>Signup</button>
            <button className='text-black sm:hidden'><CiMenuFries/></button>
        </nav>
    </div>
  )
}

export default Navbar