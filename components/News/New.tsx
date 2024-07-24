import Image from "next/image";
import Link from "next/link";
import { CiChat2, CiRead } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import React from "react";

interface Item {
  id: number;
  title: string;
  text: string;
  publicationDate: string;
  comments: number;
  views: number;
  img: string;
}

interface NewItem {
  item: Item;
}

const New: React.FC<NewItem> = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-4 xl:gap-x-6 mb-8">
      <Image
        className="object-cover h-[320px] w-[328px] md:w-[336px] lg:w-[424px] xl:w-[528px] 2xl:w-[588px] 3xl:w-[668px] 4xl:w-[688px] rounded-2xl mb-6 md:mb-0 shrink-0"
        src={item.img}
        alt={item.title}
        width={688}
        height={320}
      />
      <div className="flex flex-col md:justify-center grow">
        <div className="flex justify-between mb-2">
          <div>{item.publicationDate}</div>
          <div className="flex gap-x-6">
            <div className="flex gap-x-2">
              <CiChat2 size={24} className="fill-light-blue" /> {item.comments}
            </div>
            <div className="flex gap-x-2">
              <CiRead size={24} className="fill-light-blue" /> {item.views}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between min-h-[250px]  ">
          <h3 className="font-medium text-xl xl:text-2xl leading-5 xl:leading-6">
            {item.title}
          </h3>
          <p className="line-clamp-4  xl:text-xl xl:leading-6">{item.text}</p>
          <Link
            href="/"
            className="flex items-center justify-center border border-orange rounded-2xl px-6 py-4 w-48"
          >
            <span className="leading-4 md:leading-5 md:text-xl text-orange ">
              Read more
            </span>
            <GoChevronRight
              size={24}
              className="mt-[3px] text-orange group-hover:text-light-blue"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default New;
