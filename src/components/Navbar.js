
// import React from 'react';
// import Image from 'next/image';
// import logo from '../../public/icons/logo.svg';

// const Navbar = () => {
//   return (
//     <nav className="flex flex-col bg-white border-b p-4">
//       <div className='flex items-center'>
//         <div className="">
//             <Image src={logo} alt='logo'/>
//         </div>
//         <div className="flex-1">
//           <input
//             type="text"
//             placeholder="Search medicine, medical products"
//             className="w-full border rounded-md p-2"
//           />
//         </div>
//         <button className="bg-orange-500 text-white px-4 rounded-md ml-2">
//           Search
//         </button>
//         {/* Add icons for cart and profile */}
//         <div className="flex items-center ml-4">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h19.5M2.25 12h19.5M2.25 21h19.5M4.5 3v18M19.5 3v18" />
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v16.5M8.25 3.75v16.5" />
//           </svg>
//         </div>
//       </div>
//       <ul className="flex justify-center gap-20 text-base font-semi-bold font-Nunito text-black w-full mt-4">
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Pain Relief
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Cold and Flu
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Diabetes Care
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Digestive Health
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           First Aid
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Skin Care
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Child and Baby Care
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Heart Health
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Eye and Ear Care
//         </li>
//         <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer">
//           Respiratory Health
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/icons/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b p-4">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="logo" />
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search medicine, medical products"
            className="w-full border rounded-md p-2"
          />
          <button className="bg-orange-500 text-white px-4 rounded-md ml-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"></path>
            </svg>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Categories List */}
      <ul
        className={`lg:flex lg:justify-center lg:gap-10 text-base font-semibold text-black w-full mt-4 transition-all ${
          menuOpen ? 'block' : 'hidden'
        } lg:flex`}
      >
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Pain Relief</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Cold and Flu</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Diabetes Care</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Digestive Health</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">First Aid</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Skin Care</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Child and Baby Care</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Heart Health</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Eye and Ear Care</li>
        <li className="px-3 py-2 hover:border-b-2 hover:border-orange-500 cursor-pointer">Respiratory Health</li>
      </ul>
    </nav>
  );
};

export default Navbar;
