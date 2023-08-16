"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import  CustomButton  from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
    car:CarProps;
}

const CarCard = ({car}:CarCardProps) => {

  const {city_mpg,year,make,model,transmission,drive} = car;
  
  const carRent = calculateCarRent(city_mpg,year)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='car-card group'>
      <div className='car-card__content-title'>
        <h2>{make}  {model}</h2>
      </div>
    <p className='flex mt-6 text-[32px]
    font-extrabold'>
        <span className='self-start text-[15px] font-medium'>
          $
        </span>
        {carRent}
        <span className='self-end text-[15px] font-medium'>
          /day
        </span>
    </p>
    <div className=' relative w-full h-40 my-3 object-contain'>
     <Image src={generateCarImageUrl(car)} alt="car model" fill priority className='object-contain'  />
    </div>

    <div className='relative flex w-full mt-2'>
      <div className='flex group-hover:invisible w-full justify-between text-gray'>
        <div className='flex flex-col justify-center items-center gap-2'>
         <Image src="/steering-wheel.svg" width={20} height={20} alt="streeing" />
         <p className='text-[14px]'>
          {transmission === 'a' ? 'Automatic' : 'Manaul'}
         </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
         <Image src="/tire.svg" width={20} height={20} alt="streeing" />
         <p className='text-[14px]'>
          {drive.toUpperCase()}
         </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
         <Image src="/gas.svg" width={20} height={20} alt="streeing" />
         <p className='text-[14px]'>
          {city_mpg} MPG
         </p>
        </div>
      </div>
    
    <div className='car-card__btn-container'>
      <CustomButton
      title="View More"
      containerStyles='w-full py-16 rounded-full bg-primary-blue'
      textStyles="text-white text-[14px] leading-[17px] font-bold"
      rightIcon="/right-arrow.svg"
      handleClick={()=>setIsOpen(true)}
       />
      

    </div>
    </div>
    <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
    </div>

  )
}

export default CarCard
