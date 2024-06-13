import { IoRocketOutline } from "react-icons/io5";
import { IoIosSync } from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import { ImBubbles2 } from "react-icons/im";
import { AiOutlineGift } from "react-icons/ai";

const featuresData = [
  {
    id: 1,
    icon: (
      <IoRocketOutline className="text-Primary lg:text-[40px] md:text-[30px] text-[25px]" />
    ),
    title: "Fast and Secure",
    description: "For all orders over $99",
  },
  {
    id: 2,
    icon: (
      <IoIosSync className="text-Primary lg:text-[40px] md:text-[30px] text-[25px]" />
    ),
    title: "90 Days Return",
    description: "If goods have problems",
  },
  {
    id: 3,
    icon: (
      <CiCreditCard2 className="text-Primary lg:text-[40px] md:text-[30px] text-[25px]" />
    ),
    title: "Secure Payment",
    description: "100% secure payment",
  },
  {
    id: 4,
    icon: (
      <ImBubbles2 className="text-Primary lg:text-[40px] md:text-[30px] text-[25px]" />
    ),
    title: "24/7 Support",
    description: "Dedicated support",
  },
  {
    id: 5,
    icon: (
      <AiOutlineGift className="text-Primary lg:text-[40px] md:text-[30px] text-[25px]" />
    ),
    title: "Gift Service",
    description: "Support gift service",
  },
];
const Features = () => {
  return (
    <section className="mf-container">
      <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 p-4 lg:text-left border border-gray-300 ">
        {featuresData.map((feature) => (
          <div
            className="lg:flex  items-center gap-3 p-2.5  border-gray-300 hidden"
            key={feature.id}
          >
            <div className="flex items-center justify-center">
              {feature.icon}
            </div>
            <div className="lg:flex-none flex flex-col items-center lg:justify-start justify-center">
              <strong className="lg:text-[18px] lg:text-left">
                {feature.title}
              </strong>
              <p className="font-light text-[12px] lg:text-left">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
