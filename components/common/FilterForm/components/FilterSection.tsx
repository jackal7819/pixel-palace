import React, {PropsWithChildren, useEffect, useState} from 'react';
import {IFilterSection} from "@/components/common/types";
import {CiCircleChevDown, CiCircleChevUp} from "react-icons/ci";
import classNames from "classnames";

const FilterSection: React.FC<PropsWithChildren<IFilterSection>> = ({
                                                                      withClose = false,
                                                                      withScroll = false,
                                                                      title,
                                                                      children
                                                                    }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [userAgent, setUserAgent] = useState("")

  const Icon = isCollapsed ? CiCircleChevDown : CiCircleChevUp;

  useEffect(() => {
    if (navigator.userAgent.includes('Firefox')) {
      setUserAgent('Firefox')
    } else {
      setUserAgent('Webkit')
    }
  }, []);

  return (
    <div className={classNames(
      'flex flex-col',
      {'gap-6' : !isCollapsed},
    )}>
      {(title || withClose) &&
        <div className='flex justify-between w-full px-1 py-2 '>
          {title && <h3 className='text-xl font-medium xl:text-2xl'>{title}</h3>}
          {withClose &&
            <Icon
              size={28}
              viewBox=' 0 0 23 23'
              className="cursor-pointer scr"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          }
        </div>
      }
      <div className={classNames(
        "transition-[max-height] duration-1000 ease-in overflow-hidden",
        !isCollapsed ? "max-h-[300px]" : "max-h-0",
        {"pb-4 border-b-2 border-sky-500": withScroll && !isCollapsed}
      )}>
        <div className={classNames(
          {"max-h-[288px] overflow-x-hidden overflow-y-auto": withScroll && !isCollapsed},
          {"hidden": isCollapsed},
          {"firefox-scrollbar": userAgent === "Firefox"},
          {"custom-scrollbar": userAgent === "Webkit"}
        )}>
          {children}
        </div>
      </div>
    </div>

  );
};

export default FilterSection;