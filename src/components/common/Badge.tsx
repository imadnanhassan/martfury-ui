interface BadgeProps {
  text: string;
  position: "top" | "bottom";
}
const Badge: React.FC<BadgeProps> = ({ text, position }) => {
  const getPositionClass = () => {
    if (position === "top") {
      return "top-[12px] left-[20px]";
    } else if (position === "bottom") {
      return "bottom-0 left-0";
    }
    return ""; 
  };

  return (
    <span
      className={`bg-[#000000] text-white px-[4px]  rounded-full absolute ${getPositionClass()}`}
    >
      {text}
    </span>
  );
};

export default Badge;
