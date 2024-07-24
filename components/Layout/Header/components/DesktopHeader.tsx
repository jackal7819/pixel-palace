import React from 'react';

import Logo from "@/components/common/Logo/Logo";
import HeaderSearch from "@/components/common/SearchInput/HeaderSearch";
import MenuLinksHeader from "@/components/Layout/Header/components/MenuLinks/MenuLinksHeader";
import {CiHeart, CiShoppingCart, CiUser} from "react-icons/ci";
import Link from "next/link";
import {ROUTES} from "@/constants/Routes";

const DesktopHeader = () => {

  return (
    <div className={`hidden xl:flex justify-between items-center gap-12 py-4 container`}>
      <Logo width={130} height={65}/>
      <div className="w-full flex justify-between items-center">
        <MenuLinksHeader/>
        <HeaderSearch/>
        <div className="flex justify-between items-center gap-6">
          <Link href={ROUTES.login}><CiUser size={25} className="hover:fill-orange transition-all"/></Link>
          <Link href={ROUTES.favorites}><CiHeart size={24} className="hover:fill-orange transition-all"/></Link>
          <Link href={ROUTES.basket}><CiShoppingCart size={24} className="hover:fill-orange transition-all"/></Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;