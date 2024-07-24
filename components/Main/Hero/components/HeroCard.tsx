import React, {FC} from 'react';
import Image from 'next/image'
import {games} from "@/data";
import CustomPagination from "@/components/Main/Hero/components/CustomPagination";
import Link from "next/link";


interface HeroCardProps {
  image: string
  title: string
  description: string
  price: string
  totalSlides: number,
  activeIndex: number,
  onBulletClick: (index: number) => void,
}

const HeroCard: FC<HeroCardProps> = ({totalSlides, activeIndex, onBulletClick, image, title, description, price}) => {
  return (
    <div
      className="relative heroCard w-full p-[40px_16px] bg-cover bg-right md:p-10 lg:p-0 lg:h-[491px] lg:flex lg:justify-center xl:h-[506px] 2xl:h-[570px] 3xl:h-[665px] 4xl:h-[760px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="absolute inset-0 bg-black opacity-55"></div>
      <div className='lg:flex lg:flex-row-reverse lg:justify-between lg:w-[895px] lg:m-auto lg:gap-4 xl:w-[1080px] xl:gap-[96px] 2xl:w-[1200px] 3xl:w-[1400px] 4xl:w-[1605px]'>
        <div
          className="relative z-10 flex flex-col gap-4 md:flex-row-reverse mx-auto md:max-w-[687px] lg:max-w-[790px] lg:mx-0 xl:max-w-[916px] 2xl:max-w-[1078px]">
          <div
            className='relative w-full aspect-[328/220] md:mt-[30px] md:w-[336px] md:h-[264px] lg:w-[423px] lg:h-[292px] xl:w-[524px] xl:h-[333px] xl:mt-0 2xl:w-[617px] 2xl:h-[376px] 3xl:w-[754px] 3xl:h-[438px] 4xl:w-[891px] 4xl:h-[501px]'>
            <Image src={image} fill alt={title}
                   className='rounded-2xl'/>
          </div>
          <div className="flex flex-col text-light md:items-start">
            <h2
              className="line-clamp-2 h-[56px] text-[28px] font-orbitron mb-4 leading-[100%] font-bold
              md:mt-[16px]
              xl:text-[48px] xl:mt-[11px] xl:h-[96px]
              2xl:mt-8
              3xl:mt-[63px]
              4xl:mt-[95px]">{title}</h2>
            <p
              className='line-clamp-4 h-[80px] mb-6 font-montserrat leading-[120%] text-base
              md:w-[336px] md:text-[20px] md:h-[96px]
              xl:w-[381px]
              2xl:w-[449px]
              3xl:w-[548px] 3xl:line-clamp-3 3xl:h-[75px] 3xl:mb-10
              4xl:w-[648px]'>{description}</p>
            <p className='mb-8 text-center font-montserrat text-[24px] leading-[100%] 3xl:mb-10'>{price} €</p>
            <Link href='/'>
              <div className='mb-[55px] h-[56px] flex justify-center items-center rounded-2xl bg-orange text-[24px] font-montserrat hover:shadow-heroButton
          hover:shadow-cyan-500/50 md:w-[263px] md:mb-[36px] lg:w-[283px]'>Buy
              </div>
            </Link>
          </div>

        </div>
        <CustomPagination
          totalSlides={totalSlides}
          activeIndex={activeIndex}
          onBulletClick={onBulletClick}/>
      </div>
    </div>
  )
    ;
};

export default HeroCard;