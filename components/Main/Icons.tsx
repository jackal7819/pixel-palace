import { iconsData } from "@/iconsData";
import IconItem from "@/components/Main/IconItem";

const Icons = () => {
  return (
    <div className="container flex flex-col md:flex-row md:justify-center gap-x-6 mb-10 md:mb-20">
      {iconsData.map((item, index) => (
        <IconItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Icons;
