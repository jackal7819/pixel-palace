import React, {FC} from 'react';

interface CustomPaginationProps {
  totalSlides: number,
  activeIndex: number,
  onBulletClick: (index: number) => void,
}

const CustomPagination: FC<CustomPaginationProps> = ({ totalSlides, activeIndex, onBulletClick }) => {
  return (
    <div className="flex justify-center gap-6 lg:gap-8 xl:gap-10 lg:flex-col">
      {Array.from({length: totalSlides}).map((_, index) => (
        <div
          key={index}
          className={`z-30 cursor-pointer flex justify-center items-center text-[20px] w-[36px] h-[36px] md:w-[50px] md:h-[50px] hover:text-light hover:bg-orange 
          ${index === activeIndex ? 'bg-orange' : 'border-orange text-orange border-[0.5px] backdrop-blur-sm bg-[rgba(219, 91, 50, 0.01)]'} rounded-full`}
          onClick={() => onBulletClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default CustomPagination;