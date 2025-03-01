// import React from 'react';
// import Image from 'next/image';
// import bag from '../../public/icons/bag.svg';
// import man from '../../public/images/man.svg';

// const Intro = () => {
//   return (
//     <div className="bg-red-10 flex items-center justify-between">
//       <div className="text-left pl-28">
//         <p className="text-6xl">
//           Your  Prescription for<br /> Affordable Health<br />  Solutions
//         </p>
//         <p className="font-poppins text-base my-4">
//           Elevate your health journey with exclusive discounts and unparalleled convenience. <br />
//           Your path to well-being starts here, where every purchase is a prescription for progress.
//         </p>
//         <button className="bg-white rounded-md flex items-center gap-2 px-4 py-2 hover:bg-gray-100 ">
//           <span className="text-green-500 font-nunito text-base">Start Shopping</span>
//           <Image src={bag} alt="Shopping bag" className="w-6 h-6" />
//         </button>
//       </div>
//       <div>
//         <Image src={man} alt="person" className='' />
//       </div>
//     </div>
//   );
// };

// export default Intro;

import React from 'react';
import Image from 'next/image';
import bag from '../../public/icons/bag.svg';
import man from '../../public/images/man.svg';

const Intro = () => {
  return (
    <div className="bg-red-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-28 py-8">
      {/* Left Section - Text */}
      <div className="text-center md:text-left">
        <p className="text-3xl md:text-6xl leading-tight">
          Your Prescription for<br /> Affordable Health<br /> Solutions
        </p>
        <p className="font-poppins text-sm md:text-base my-4">
          Elevate your health journey with exclusive discounts and unparalleled convenience. <br />
          Your path to well-being starts here, where every purchase is a prescription for progress.
        </p>

        {/* Button */}
        <button className="bg-white rounded-md flex items-center gap-2 px-4 py-2 mx-auto md:mx-0 hover:bg-gray-100">
          <span className="text-green-500 font-nunito text-base">Start Shopping</span>
          <Image src={bag} alt="Shopping bag" className="w-6 h-6" />
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="mt-6 md:mt-0">
        <Image src={man} alt="person" className="max-w-full w-[250px] md:w-[400px]" />
      </div>
    </div>
  );
};

export default Intro;

