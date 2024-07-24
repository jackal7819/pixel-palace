import React, {FC} from 'react';
import {useField} from "formik";


const PriceRange: FC = () => {
  const [priceFromField, priceFromMeta] = useField("priceFrom");
  const [priceToField, priceToMeta] = useField("priceTo");

  const inputStyle = "w-[40%] 2xl:w-[143px] 3xl:w-[170px] 4xl:w-[143px] number-input bg-transparent outline-0 px-4 py-2 text-light border-b border-sky-400 placeholder:text-light placeholder:font-normal placeholder:text-base 2xl:placeholder:text-xl placeholder:text-center focus:placeholder:opacity-0";

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-6 w-full'>
        <input
          type="number"
          placeholder="From"
          {...priceFromField}
          id="priceFrom"
          className={inputStyle}
        />
        <div className='w-2 h-[2px] bg-light'/>
        <input
          type="number"
          placeholder="To"
          {...priceToField}
          id="priceTo"
          className={inputStyle}
        />

      </div>
      {(priceFromMeta.error || priceToMeta.error) && (
        <div className='text-red-600'>Min price should be less than max</div>
      )}
    </div>
  );
};

export default PriceRange;