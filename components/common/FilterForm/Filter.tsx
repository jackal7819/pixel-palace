'use client'

import React, { FC } from 'react';
import { SlClose } from "react-icons/sl";
import PriceRange from "./components/PriceRange";
import FilterSection from "./components/FilterSection";
import { IFilter } from "@/components/common/types";
import { Form, Formik } from "formik";
import CheckboxGroup from "./components/CheckboxGroup";
import { filter } from "@/data";
import {useFilterStore} from "@/hooks/useFilter";
import {formatFilterValues} from "@/utils/formatFilterValues";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  priceFrom: Yup.number()
    .nullable()
    .test(
      'is-less',
      "Price from should be less than price to",
      function(value) {
        const { priceTo } = this.parent;
        if (value !== undefined && value !== null && priceTo !== undefined && priceTo !== null && value >= priceTo) {
          return false;
        }
        return true;
      }
    ),
  priceTo: Yup.number()
    .nullable()
    .test(
      'is-greater',
      "Price to should be greater than price from",
      function(value) {
        const { priceFrom } = this.parent;
        if (value !== undefined && value !== null && priceFrom !== undefined && priceFrom !== null && value <= priceFrom) {
          return false;
        }
        return true;
      }
    ),
  top: Yup.array(),
  genres: Yup.array(),
  systems: Yup.array(),
  platforms: Yup.array(),
});

const Filter: FC<IFilter> = ({ onClose }) => {

  const {setFilters} = useFilterStore()

  return (
    <div className="w-full md:w-[336px] lg:w-[277px] xl:w-[344px] 2xl:w-[384px] 3xl:w-[437px] 4xl:w-[382px] px-4 pt-5 lg:pt-4 pb-10 flex flex-col gap-[34px] bg-bg-menu shadow-filter rounded-xl h-full  2xl:px-5 2xl:pt-4 ">
      <div className='self-end'>
        <SlClose size={27} className='cursor-pointer' onClick={onClose}/>
      </div>

      <Formik
        initialValues={{
          priceFrom: null,
          priceTo: null,
          top: [],
          genres: [],
          systems: [],
          platforms: [],
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          const formattedFilterValues = formatFilterValues(values);
          setFilters(formattedFilterValues)
          console.log(formattedFilterValues);
        }}
      >
        {({ errors}) => (
          <Form className='flex flex-col gap-9'>
            <FilterSection title="Price range">
              <PriceRange/>
            </FilterSection>

            <FilterSection>
              <CheckboxGroup
                name="top"
                options={filter.top}
              />
            </FilterSection>
            <FilterSection title="Genres" withClose withScroll>
              <CheckboxGroup
                name="genres"
                options={filter.genres}
              />
            </FilterSection>

            <FilterSection title="Systems" withClose withScroll>
              <CheckboxGroup
                name="systems"
                options={filter.systems}
              />
            </FilterSection>

            <FilterSection title="Platforms" withClose withScroll>
              <CheckboxGroup
                name="platforms"
                options={filter.platforms}
              />
            </FilterSection>

            <button type='submit'
                    className=" bg-orange flex justify-center items-center rounded-2xl text-light font-normal text-2xl px-8 py-4 disabled:opacity-75"
                    disabled={!!errors.priceTo || !!errors.priceFrom}>

              Apply filters
            </button>
          </Form>
        )}
      </Formik>


    </div>
  );
};

export default Filter;