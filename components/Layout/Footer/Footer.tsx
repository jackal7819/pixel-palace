import Logo from "@/components/common/Logo/Logo";
import {ROUTES} from "@/constants/Routes";
import FooterLinks from "@/components/Layout/Footer/FooterLinks";
import SocialLinks from "@/components/Layout/Footer/SocialLinks";

const Footer = () => {
  return <footer className="bg-dark-blue px-4 pt-20 pb-10 md:px-10 lg:px-[100px] lg:pb-8 2xl:px-30 3xl:px-40">
    <div className="m-auto flex flex-col items-center gap-10 lg:max-w-[864px] lg:items-center xl:max-w-[1080px] xl:gap-[48px] 4xl:gap-[56px] 2xl:max-w-[1200px] 3xl:max-w-[1360px] 4xl:max-w-[1600px] ">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:w-full lg:gap-[93px] xl:gap-[210px] 2xl:gap-[230px] 3xl:gap-[300px]">
        <Logo width={248} height={124} classes="lg:w-[283px] lg:h-[142px] 4xl:w-[382px] 4xl:h-[192px] "/>
        <div className="flex flex-col items-start gap-10 w-[178px] md:flex-row md:w-full md:gap-20 lg:justify-center lg:w-auto lg:gap-[93px] xl:gap-[210px] 2xl:gap-[230px] 3xl:gap-[300px]">
          <FooterLinks title="Catalogue" links={ROUTES.footerLinks.catalogues}/>
          <FooterLinks title="Resources" links={ROUTES.footerLinks.resources}/>
        </div>
      </div>
      <SocialLinks/>

      <div className="flex flex-col items-center lg:mt-10 xl:mt-8 3xl:mt-2 4xl:mt-0 ">
        <div className="w-[290px] h-[1px] bg-light mb-4 md:w-[350px] lg:w-[750px] 2xl:w-[794px] 3xl:w-[894px]"/>
        <div className="flex flex-col items-center justify-center md:w-full md:flex-row font-roboto">
          <span className="text-4 md:block">Copyright © 2024 Game Haven </span>
          <span className="text-4 md:block">All rights reserved</span>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
