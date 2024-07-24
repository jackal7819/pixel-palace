import React from 'react';
import {useMedia} from "@/hooks/useMedia";
import LinkList from "@/components/Layout/Header/components/MenuLinks/LinkList";
import {ROUTES} from "@/constants/Routes";

const MenuLinksHeader = () => {
  const {deviceType} = useMedia()

  let styles;
  if (deviceType === "sm") {
    styles = "flex-col gap-8 text-[20px]/[20px] items-center "
  } else if (deviceType === "md" || deviceType === "lg") {
    styles = "gap-6 text-[20px]/[20px] items-start"
  } else {
    styles = "gap-4 text-base/[16px]"
  }

  return (
    <nav className={`relative flex font-montserrat justify-center p-4 font-normal text-light ${styles}`}>
        <LinkList platform={ROUTES.platform.pc} label="PC" deviceType={deviceType}/>
        <LinkList platform={ROUTES.platform.ps} label="Play Station" deviceType={deviceType}/>
        <LinkList platform={ROUTES.platform.xBox} label="Xbox" deviceType={deviceType}/>
        <LinkList platform={ROUTES.platform.nintendo} label="Nintendo" deviceType={deviceType}/>
    </nav>
  );
};

export default MenuLinksHeader;