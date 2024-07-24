import React, {FC} from 'react';
import {useField} from "formik";
import {ICheckboxGroup} from "@/components/common/types";

const CheckboxGroup: FC<ICheckboxGroup> = ({ name, options }) => {
  const [field, meta, helpers] = useField({ name });

  return (
    <div className='flex flex-col gap-6'>
      {options.map((option) => (
        <label htmlFor={`myCheckbox-${option.value}`} key={option.value} className=' flex gap-3 text-base text-light items-center'>
          <input
            id={`myCheckbox-${option.value}`}
            type="checkbox"
            className='custom-checkbox'
            value={option.value}
            checked={field.value.includes(option.value)}
            onChange={e => {
              const set = new Set(field.value);
              if (e.target.checked) {
                set.add(option.value);
              } else {
                set.delete(option.value);
              }
              helpers.setValue(Array.from(set));
            }}
          />
          <span className="checkbox-mark"></span>
          <span className="label-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;