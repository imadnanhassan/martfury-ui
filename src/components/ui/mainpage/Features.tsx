import { IoRocketOutline } from "react-icons/io5";
import "../../../assets/styles/ui/featurs.scss";
import { IoIosSync } from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import { ImBubbles2 } from "react-icons/im";
import { AiOutlineGift } from "react-icons/ai";


const featuresData = [
  {
    id: 1,
    icon: <IoRocketOutline className="text-Primary text-[40px]" />,
    title: "Fast and Secure",
    description: "For all orders over $99",
  },
  {
    id: 2,
    icon: <IoIosSync className="text-Primary text-[40px]" />,
    title: "90 Days Return",
    description: "If goods have problems",
  },
  {
    id: 3,
    icon: <CiCreditCard2 className="text-Primary text-[40px]" />,
    title: "Secure Payment",
    description: "100% secure payment",
  },
  {
    id: 4,
    icon: <ImBubbles2 className="text-Primary text-[40px]" />,
    title: "24/7 Support",
    description: "Dedicated support",
  },
  {
    id: 5,
    icon: <AiOutlineGift className="text-Primary text-[40px]" />,
    title: "Gift Service",
    description: "Support gift service",
  },
];
const Features = () => {
  return (
    <section className="mf-container py-7">
    

      <div className="features">
        {featuresData.map((feature) => (
          <div className="features_items" key={feature.id}>
            <div className="features_items__left">{feature.icon}</div>
            <div className="features_items__right">
              <strong className="text-[18px]">{feature.title}</strong>
              <p className="font-light">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

