import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

interface Item {
  id: number;
  img: string;
  title: string;
  author: string;
  rating: number;
  text: string;
}

interface ReviewItemProps {
  item: Item;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ item }) => {
  return (
    <>
      <Image
        className=" rounded-2xl"
        src={item.img}
        alt={item.title}
        width={784}
        height={434}
      />
      <div className="px-4 py-5 flex-grow flex flex-col justify-between">
        <div>
          {/*Game Title and author*/}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-x-3 gap-y-1">
            <h3 className="font-medium text-xl leading-5 xl:text-2xl xl:leading-6 line-clamp-1">
              {item.title}
            </h3>
            <h4 className="shrink-0 leading-4">by {item.author}</h4>
          </div>
          {/*Rating*/}
          <div className="flex gap-x-1 mb-3">
            {Array.from({ length: 5 }, (_, i) =>
              item.rating > i ? (
                <FaStar key={i} size={19} className="fill-orange" />
              ) : (
                <FaRegStar key={i} size={19} className="fill-orange" />
              ),
            )}
          </div>
          {/*Review text*/}
          <p className="line-clamp-4 lg:text-xl leading-5 lg:leading-6 mb-4">
            {item.text}
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center border border-orange rounded-lg px-6 py-4 w-48"
        >
          <span className="leading-4 md:leading-5 md:text-xl text-orange ">
            Read more
          </span>
          <GoChevronRight
            size={24}
            className="mt-[3px] text-orange group-hover:text-light-blue"
          />
        </Link>
      </div>
    </>
  );
};

export default ReviewItem;
