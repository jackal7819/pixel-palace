import React, {useState} from 'react';
import HeaderSearch from "@/components/common/SearchInput/HeaderSearch";
import {motion} from 'framer-motion';
import {CiMenuBurger, CiShoppingCart} from "react-icons/ci";
import Logo from "@/components/common/Logo/Logo";
import DropDown from "@/components/Layout/Header/components/DropDown";
import Link from "next/link";
import {ROUTES} from "@/constants/Routes";


const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  const visibilityToggle = (boolean:boolean) => {
    setIsHeaderVisible(boolean)
  }

  return (
    <>
      <div className={`relative flex justify-between items-center py-4 px-4 md:px-10 xl:container xl:hidden`}>
        <div className={`${isHeaderVisible ? "block" : "hidden xl:block"}`}>
          <Logo width={80} height={40}/>
        </div>
        <HeaderSearch onExpend={visibilityToggle}/>
        <div className={`flex items-center gap-6 ${isHeaderVisible ? "block" : "hidden xl:block"}`}>
          <Link href={ROUTES.basket}><CiShoppingCart
            className="w-[25px] h-[25px] hover:fill-orange transition-all"/></Link>
          <motion.div
            animate={{rotate: isOpen ? 180 : 0}}
            transition={{duration: 0.5}}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          >
            {!isOpen && <CiMenuBurger size={32} className="w-[25px] h-[25px] hover:fill-orange transition-all"/>}
          </motion.div>
        </div>
      </div>
      <DropDown isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)}/>
    </>
  );
};

export default MobileHeader;