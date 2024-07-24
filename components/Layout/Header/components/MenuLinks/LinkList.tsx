'use client'

import React, {Fragment, useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

interface LinkListProps {
  label: string;
  deviceType: string;
  platform: { path: string, name: string, logo: string } []
}

const LinkList = ({platform, label, deviceType}: LinkListProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
      toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  let styles;
  let variantsOpen;
  let variantsClose;
  let logoSize: number = 0;


  if (deviceType === "sm") {
    variantsOpen = { opacity: 1, maxHeight: "400px", width: "311px", padding: "16px 0px 16px 0px" };
    variantsClose = { opacity: 0, maxHeight: "0", padding: "0"};
    styles = "flex flex-wrap gap-8 rounded-b-lg p-6 items-center justify-center z-40 text-3"
    logoSize = 23
  } else if (deviceType === "md" || deviceType === "lg") {
    variantsOpen = { opacity: 1, maxHeight: "400px", width: "550px", padding: "24px 32px 16px 32px" };
    variantsClose = { opacity: 0, maxHeight: "0", padding: "0"};
    styles = "absolute max-w-[550px] justify-center text-4 top-11 left-0 w-[595px] rounded-b-lg p-12 flex flex-wrap gap-8"
    logoSize = 32
  } else if (deviceType === "xl" || deviceType === "2xl" || deviceType === "3xl" || deviceType === "4xl") {
    variantsOpen = { opacity: 1, maxHeight: "400px", width: "625px", padding: "48px" };
    variantsClose = { opacity: 0, maxHeight: "0", padding: "0"};
    styles = "absolute max-w-[625px] text-4 top-[100%] left-6 w-[595px] rounded-b-lg bg-linear-blur backdrop-invert backdrop-blur-4px flex flex-wrap gap-8"
    logoSize = 32
  }

  const openStyles = "text-orange after:scale-100 after:transition after:duration-500"

  return (
    <div onClick={toggle} ref={toggleRef}
         className={`flex flex-col items-center cursor-pointer transition-all p-2`}>
      <div aria-expanded={isOpen}
           className={`${isOpen ? openStyles : null} relative flex w-max items-center gap-[2px] after:w-full after:h-[1px] after:scale-0 after:absolute after:bottom-[-4px] after:bg-orange hover:text-orange hover:after:scale-100 hover:after:transition hover:after:duration-500 `}>
        <span>{label}</span>
        {isOpen ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>}
      </div>

      <motion.div
        ref={dropdownRef}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        variants={{
          open: variantsOpen!,
          closed: variantsClose!
        }}
        transition={{duration: 1}}
        style={{overflow: 'hidden'}}
        className={styles}
      >
        {platform.map(item => (
          <Fragment key={item.name}>
            <Link href={item.path} className="flex flex-col items-center gap-2 text-xs md:text-base/[16px]">
              <Image src={item.logo} alt={item.name} width={logoSize} height={logoSize}/>
              {item.name}
            </Link>
          </Fragment>
        ))}
      </motion.div>
      <motion.div
        ref={dropdownRef}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        variants={{
          open: {opacity: 1, height: "150px", marginTop: "12px", padding: "12px"},
          closed: {opacity: 0, height: "0px", marginTop: "0px", padding: "0px"}
        }}
        transition={{duration: 1}}
        style={{overflow: 'hidden'}}
        className="sm:hidden md:block xl:hidden"
      >
      </motion.div>
    </div>
  );
};

export default LinkList;