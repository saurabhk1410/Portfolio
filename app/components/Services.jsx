'use client';

import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image'; // Added missing import

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
     
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({  title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500"
          >
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>

            <p className="text-sm text-gray-600 leading-5">{description}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
