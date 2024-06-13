import { Link } from "react-router-dom";
import images from "../../assets/images/images";
import Badge from "../../components/common/Badge";
import { LuBarChart3 } from "react-icons/lu";
import { CiHeart, CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

const categories = [
  "All",
  "Babies & Moms",
  "Books & Office",
  "Cars & Motorcycles",
  "Clothing & Apparel",
  "Accessories",
  "Bags",
  "Kid's Fashion",
  "Mens",
  "Shoes",
  "Sunglasses",
  "Womens",
  "Computers & Technologies",
  "Desktop PC",
  "Laptop",
  "Smartphones",
  "Consumer Electrics",
  "Air Conditioners",
  "Accessories",
  "Type Hanging Cell",
];
export default function MainHeader() {
  const [category, setCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {/* desktop header */}
      <section className="bg-Primary  lg:block sm:hidden hidden">
        <div className="py-[25px] mf-container flex items-center gap-4 ">
          <div className="flex items-center gap-4 flex-1">
            <div className="max-w-[300px] flex items-center">
              <Link to={"/"}>
                <img src={images.logoLight} alt="Logo Light" />
              </Link>
            </div>
            <div className="w-full lg:flex justify-center  sm:hidden hidden">
              <div className="flex flex-1 items-center justify-between lg:max-w-5xl">
                <div className="relative overflow-x-auto">
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="block appearance-none w-full  px-4 py-[10px] pr-8 2 leading-tight focus:outline-none "
                  >
                    {categories.map((cat, index) => (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="search"
                  placeholder="I'm shopping for..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="border-l p-2  w-full focus:outline-none "
                />
                <button className=" bg-black text-white px-4 py-2  hover:bg-gray-800">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-10 max-w-[370px]">
            <div className="xl:flex items-center gap-[30px] md:hidden hidden">
              <Link to={""}>
                <LuBarChart3 className="text-[30px] hover:text-white transition-all duration-150 ease-linear" />
                <Badge text="0" position="top" />
              </Link>
              <Link to={""}>
                <CiHeart className="text-[30px] hover:text-white transition-all duration-150 ease-linear" />
                <Badge text="0" position="top" />
              </Link>
              <Link to={""}>
                <MdOutlineShoppingBag className="text-[30px] hover:text-white transition-all duration-150 ease-linear" />
                <Badge text="0" position="top" />
              </Link>
            </div>
            <div className="flex items-center ">
              <span>
                <CiUser className="text-[30px]" />
              </span>
              <span className=" flex flex-col">
                <Link
                  to={""}
                  className="text-sm font-semibold hover:text-white transition-all duration-150 ease-linear"
                >
                  Login
                </Link>
                <Link
                  to={""}
                  className="text-sm font-semibold hover:text-white transition-all duration-150 ease-linear"
                >
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
        <hr className="h-px  bg-[#00000026] border-0 "></hr>
        <div className="mf-container py-4 flex">
          <div className="max-w-[260px]">
            <h3 className="flex items-center gap-3">
              <HiOutlineBars3 className="text-[20px]" />
              Shop by Department
            </h3>
          </div>
          <div className="flex-1 flex items-center justify-between pl-[35px]">
            <div className="menu">
              <ul className="flex items-center gap-5 menu">
                <li>Home</li>
                <li>About</li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>

                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className=" flex items-center gap-3">
              <h4>Sell on Martfury</h4>
              <h4 className="border-l border-r border-black pl-2 pr-2">
                Truck your order
              </h4>
              <button className="border-r border-black pr-2 ">
                USA
              </button>
              <button>Language</button>
            </div>
          </div>
        </div>
      </section>

      {/* mobile header */}
    </>
  );
}
