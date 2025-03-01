// import React from 'react'
// import Image from 'next/image'
// import hotoffer from '../../public/images/hot-offer.svg';
// import whiterightarrow from '../../public/icons/white-right-arrow.svg';

// const HotOffer = () => {
//     return (
//         <div className='bg-blue-100 flex justify-between p-16'>
//             <div>
//                 <h1 className='font-Prompt text-black text-xl'>Today's Hot offer</h1>
//                 <p className='font-Nunito text-black text-5xl font-bold py-4'>Unlock 50% off on <br />Essential Medicines</p>
//                 <p className='font-Poppins text-black text-base'>
//                     Embrace wellness without breaking the bank! Enjoy a generous <br />25% discount on a wide range of vital medicines at our online <br /> pharmacy. Your health matters, and so does your budget.</p>
//                 <button className='bg-orange-10 rounded-lg p-4 flex items-center my-4'>
//                     <span className='font-medium text-white font-poppins text-base'>Place an order now</span>
//                     <Image src={whiterightarrow} alt='arrow' className='ml-2'/>
//                     </button>
//             </div>
//             <div>
//                 <Image src={hotoffer} alt='offer' className='' />
//             </div>

//         </div>
//     )
// }

// export default HotOffer
import React from 'react'
import Image from 'next/image'
import hotoffer from '../../public/images/hot-offer.svg';
import whiterightarrow from '../../public/icons/white-right-arrow.svg';

const HotOffer = () => {
    return (
        <div className='bg-blue-100 flex flex-col md:flex-row justify-between p-8 md:p-16'>
            <div className='md:w-1/2'>
                <h1 className='font-Prompt text-black text-xl'>Today's Hot offer</h1>
                <p className='font-Nunito text-black text-3xl md:text-5xl font-bold py-4'>Unlock 50% off on <br />Essential Medicines</p>
                <p className='font-Poppins text-black text-base md:text-lg'>
                    Embrace wellness without breaking the bank! Enjoy a generous <br />25% discount on a wide range of vital medicines at our online <br /> pharmacy. Your health matters, and so does your budget.
                </p>
                <button className='bg-orange-10 rounded-lg p-4 flex items-center my-4'>
                    <span className='font-medium text-white font-poppins text-base'>Place an order now</span>
                    <Image src={whiterightarrow} alt='arrow' className='ml-2'/>
                </button>
            </div>
            <div className='md:w-1/2 mt-8 md:mt-0'>
                <Image src={hotoffer} alt='offer' className='w-full'/>
            </div>
        </div>
    )
}

export default HotOffer;
