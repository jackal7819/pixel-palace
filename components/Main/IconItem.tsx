import Image from "next/image";

interface Item {
  title: string;
  subtitle: string;
  image: string;
}

interface IconItemProps {
  item: Item;
}

const IconItem: React.FC<IconItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center py-5 flex-[1_1_33.333%] text-center">
      <Image
        src={item.image}
        alt={item.title}
        width={124}
        height={124}
        className="mb-3"
      />
      <h3 className="text-xl xl:text-2xl leading-5 xl:leading-6 font-medium mb-3">
        {item.title}
      </h3>
      <p className="xl:text-xl leading-5 xl:leading-6">
        {item.subtitle}
      </p>
    </div>
  );
};

export default IconItem;
