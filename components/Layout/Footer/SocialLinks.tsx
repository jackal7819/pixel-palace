import React from 'react';
import Link from "next/link";
import {FaDiscord, FaFacebook, FaInstagram, FaTwitch, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-12 w-[204px] md:w-full md:justify-center lg:gap-[78px] lg:w-full">
      <Link href="https://instagramm.com"><FaInstagram size={32} /></Link>
      <Link href="https://facebook.com"><FaFacebook size={32}/></Link>
      <Link href="https://twitter.com"><FaXTwitter size={32}/></Link>
      <Link href="https://youtube.com"><FaYoutube size={32}/></Link>
      <Link href="https://discord.com"><FaDiscord size={32}/></Link>
      <Link href="https://twitch.com"><FaTwitch size={32}/></Link>
    </div>
  );
};

export default SocialLinks;