import React from 'react';
import {ROUTES} from "@/constants/Routes";
import Link from "next/link";

interface Link {
  path: string,
  name: string
}
interface FooterLinksProps {
  title:string,
  links: Link[]
}



const FooterLinks = ({title, links}:FooterLinksProps) => {
  return (
    <div className="flex flex-col items-start gap-10 lg:min-w-[178px]">
      <h2 className="text-6 font-montserrat text-light font-medium">{title}</h2>
      <nav className="flex flex-col items-start gap-6 text-6 font-montserrat text-light">
        {links.map(item =>
          <Link key={item.name} href={item.path}>{item.name}</Link>
        )}
      </nav>
    </div>
  );
};

export default FooterLinks;