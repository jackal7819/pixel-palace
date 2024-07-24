'use client'

import {useMedia} from "@/hooks/useMedia";
import MobileHeader from "@/components/Layout/Header/components/MobileHeader";
import DesktopHeader from "@/components/Layout/Header/components/DesktopHeader";

const Header = () => {
  return (
    <header className="sticky h-[72px] xl:h-[97px] z-50">
      <MobileHeader/>
      <DesktopHeader/>
    </header>
  )
};

export default Header;
