import React from 'react';
import Image from 'next/image';
import greenrightarrow from '../../public/icons/green-right-arrow.svg';
import foley from '../../public/images/foley.svg';
import thermometer from '../../public/images/thermometer.svg';
import nonrebreathermask from '../../public/images/non-rebreather mask.svg';
import wounddressing from '../../public/images/wound-dressing.svg';

const NewProducts = () => {
    return (
        <section className="bg-white p-4 rounded-lg shadow-md ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">New Products</h2>
                <a href="#" className="flex items-center text-blue-300 hover:underline">
                    <span className="mr-2 text-green-10">View All</span>
                    <Image src={greenrightarrow} alt="Green Right Arrow" width={16} height={16} />
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">


                {/* Product 1 */}
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-xl">
                    <div className="flex justify-center">
                        <Image src={foley} alt="Product 1" className='w-72' />
                    </div>
                    <p className="text-black text-xl mt-4 border-t-2 border-gray-300 font-Nunito pt-2">Foley Catheter</p>
                    <p className="text-gray-500 font-bold mt-2">$19.99</p>
                    <button className="bg-orange-10 text-white px-4 py-2 rounded-md mt-4">
                        Add to Cart
                    </button>
                </div>


                {/* Product 2 */}
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-xl">
                    <div className="flex justify-center">
                        <Image src={thermometer} alt="Product 2" className='w-36' />
                    </div>
                    <p className="text-black text-xl mt-5 border-t-2 border-gray-300 font-Nunito pt-2">Thermometer</p>
                    <p className="text-gray-500 font-bold mt-2">$19.99</p>
                    <button className="bg-orange-10 text-white px-4 py-2 rounded-md mt-4">
                        Add to Cart
                    </button>
                </div>
                {/* Product 3 */}
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-xl">
                    <div className="flex justify-center">
                        <Image src={nonrebreathermask} alt="Product 3" className='w-72' />
                    </div>
                    <p className="text-black text-xl mt-5 border-t-2 border-gray-300 font-Nunito pt-2">Non-rebreather mask</p>
                    <p className="text-gray-500 font-bold mt-2">$19.99</p>
                    <button className="bg-orange-10 text-white px-4 py-2 rounded-md mt-4">
                        Add to Cart
                    </button>
                </div>
                {/* Product 4 */}

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-xl">
                    <div className="flex justify-center">
                        <Image src={wounddressing} alt="Product 4" className="w-64" />
                    </div>
                    <p className="text-black text-xl mt-4 border-t-2 border-gray-300 font-Nunito pt-2">
                        Wound-Dressing
                    </p>
                    <p className="text-gray-500 font-bold mt-2">$19.99</p>
                    <button className="bg-orange-10 text-white px-4 py-2 rounded-md mt-4">
                        Add to Cart
                    </button>
                </div>



            </div>
        </section>
    );
};

export default NewProducts;