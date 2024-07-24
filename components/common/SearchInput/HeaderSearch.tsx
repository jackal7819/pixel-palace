'use client'

import React, {useEffect, useRef, useState} from 'react';
import {FiSearch} from "react-icons/fi";
import {motion} from "framer-motion";

const HeaderSearch = ({ onExpend }: { onExpend?: (boolean:boolean) => void }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true)
  const searchRef = useRef<HTMLLabelElement>(null);

  const toggleSearchFocus = (focus: boolean) => {
    setIsFocused(focus);
    setIsCollapsed(!focus);
    onExpend?.(!focus)
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsFocused(false)
      setIsCollapsed(true)
      onExpend?.(true)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <label ref={searchRef}
           className={`relative flex after:h-[1px] items-center after:absolute after:bg-orange after:w-[100%] after:bottom-[-4px] after:transition after:duration-500 
      ${isFocused ? 'after:scale-100' : 'after:scale-0'}
      ${isCollapsed ? '' : 'flex-grow py-3 xl:relative xl:bg-none xl:h-auto xl:mx-4 xl:py-0'}
      `}>
      <motion.input
        animate={isCollapsed ? "collapsed" : "expend"}
        initial="closed"
        variants={{
          collapsed: {width: "0px"},
          expend: {width: "100%"},
        }}
        onBlur={() => toggleSearchFocus(false)}
        onFocus={() => toggleSearchFocus(true)}
        transition={{duration: 0.5}}
        type="text"
        placeholder="Search"
        className={`bg-transparent focus:outline-0 placeholder:text-light placeholder:text-4 pl-2 ${isCollapsed ? "w-0" : "w-full"}`}
      />
      <div className="flex items-center justify-center w-9 h-8 z-1">
        <FiSearch
          onClick={() => toggleSearchFocus(false)}
          size={24} className={`hover:stroke-orange cursor-pointer ${isFocused ? "stroke-orange" : "stroke-light"}`}/>
      </div>
    </label>
  );
};

export default HeaderSearch;