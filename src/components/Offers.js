// import React from 'react';
// import Image from 'next/image';
// import off from '../../public/icons/off.svg';
// import home from '../../public/icons/home.svg';
// import doctor from '../../public/icons/doctor.svg';
// import health from '../../public/icons/health.svg';
// import blackrightarrow from '../../public/icons/black-right-arrow.svg';

// const Offers = () => {
//   return (
//     <div className="flex justify-center p-8 bg-white gap-4"> 
//       <div className="bg-green-300 rounded-lg p-4 flex items-center">
//         <Image src={off} alt="off" width={24} height={24} /> 
//         <span className="text-black font-Nunito text-xl font-bold ml-2">Get 25% off</span>
//         <Image src={blackrightarrow} alt="arrow" className='ml-4' /> 
//       </div>
//       <div className="bg-yellow-100 rounded-lg p-4 flex items-center">
//         <Image src={home} alt="home" width={24} height={24} /> 
//         <span className="text-black font-Nunito text-xl font-bold ml-2">Free Home Delivery</span>
//         <Image src={blackrightarrow} alt="arrow" className='ml-4' /> 
//       </div>
//       <div className="bg-purple-300 rounded-lg p-4 flex items-center">
//         <Image src={doctor} alt="appointment" width={24} height={24} /> 
//         <span className="text-black font-Nunito text-xl font-bold ml-2">Doctor's Appointment</span>
//         <Image src={blackrightarrow} alt="arrow" className='ml-4' /> 
//       </div>
//       <div className="bg-purple-100 rounded-lg p-4 flex items-center">
//         <Image src={health} alt="health" width={24} height={24} /> 
//         <span className="text-black font-Nunito text-xl font-bold ml-2">Health Advice</span>
//         <Image src={blackrightarrow} alt="arrow" className='ml-4' /> 
//       </div>
//     </div>
//   );
// };

// export default Offers;
import React from 'react';
import Image from 'next/image';
import off from '../../public/icons/off.svg';
import home from '../../public/icons/home.svg';
import doctor from '../../public/icons/doctor.svg';
import health from '../../public/icons/health.svg';
import blackrightarrow from '../../public/icons/black-right-arrow.svg';

const offersData = [
  { id: 1, icon: off, text: "Get 25% Off", bgColor: "bg-green-300" },
  { id: 2, icon: home, text: "Free Home Delivery", bgColor: "bg-yellow-100" },
  { id: 3, icon: doctor, text: "Doctor's Appointment", bgColor: "bg-purple-300" },
  { id: 4, icon: health, text: "Health Advice", bgColor: "bg-purple-100" }
];

const Offers = () => {
  return (
    <div className="bg-white px-4 py-6">
      {/* Container with scroll on small screens */}
      <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
        {offersData.map((offer) => (
          <div 
            key={offer.id} 
            className={`${offer.bgColor} rounded-lg p-3 md:p-5 flex items-center min-w-[150px] sm:min-w-[180px] md:w-[220px] lg:w-[250px]`}
          >
            <Image src={offer.icon} alt={offer.text} width={24} height={24} className="w-5 md:w-6" />
            <span className="text-black font-nunito text-sm md:text-lg font-bold ml-2">{offer.text}</span>
            <Image src={blackrightarrow} alt="arrow" className="ml-auto w-4 md:w-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
