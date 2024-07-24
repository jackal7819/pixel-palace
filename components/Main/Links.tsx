import Link from "next/link";
import Image from "next/image";

import joystick from "../../public/linkIcons/joystick.svg";
import calendar from "../../public/linkIcons/calendar.svg";
import percent from "../../public/linkIcons/percent.svg";
import paper from "../../public/linkIcons/paper.svg";

const Links = () => {
  const gradientClasses =
    " bg-gradient-to-b from-[rgba(0,32,79,0.6)] from-0% to-[rgba(0,114,220,0.6)] to-100% rounded-2xl hover:shadow-[0_4px_32px_0_rgba(211,226,255,0.3)] duration-500 overflow-hidden";
  const textClasses =
    " text-2xl 2xl:text-[32px] leading-6 2xl:leading-8 font-medium";

  return (
    <div className="container flex flex-col md:flex-row gap-y-3 gap-x-3 4xl:gap-x-4 mb-20 3xl:mb-24">
      <Link
        href="/"
        className={`py-10 flex-[1_1_28%] xl:flex-[1_1_30%] flex justify-center items-center relative  ${gradientClasses} ${textClasses}`}
      >
        Pre-orders
        <Image
          src={joystick}
          alt=""
          className="absolute bottom-0 left-0 invisible md:visible"
        />
      </Link>
      <div className="flex flex-col flex-[1_0_44%] lg:flex-[1_0_40%] justify-between gap-y-3">
        <Link
          href="/"
          className={`py-10 md:py-16 3xl:py-[70px] relative px-2 text-center md:max-lg:text-right ${gradientClasses} ${textClasses}`}
        >
          Upcoming
          <Image
            src={calendar}
            alt=""
            className="absolute top-[50%] translate-y-[-50%] left-0 invisible md:visible"
          />
        </Link>
        <Link
          href="/"
          className={`py-10 md:py-16 3xl:py-[70px] relative px-2 text-center md:max-lg:text-left ${gradientClasses} ${textClasses}`}
        >
          Sales
          <Image
            src={percent}
            alt=""
            className="absolute top-[50%] translate-y-[-50%] right-0 invisible md:visible"
          />
        </Link>
      </div>
      <Link
        href="/"
        className={`py-10 flex-[1_1_28%] xl:flex-[1_1_30%] flex justify-center items-center relative ${gradientClasses} ${textClasses}`}
      >
        News
        <Image
          src={paper}
          alt=""
          className="absolute bottom-0 right-0 invisible md:visible"
        />
      </Link>
    </div>
  );
};

export default Links;
