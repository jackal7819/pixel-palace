import React from 'react';
import Link from "next/link";
import {ROUTES} from "@/constants/Routes";

const Logo = ({width, height, classes} : {width:number, height:number, classes?:string}) => {
  return (
    <Link href={ROUTES.home}>
      <img src="/logo/logo.png" alt="Game Haven" width={width} height={height} className={classes ?? ""}/>
    </Link>
  );
};

export default Logo;