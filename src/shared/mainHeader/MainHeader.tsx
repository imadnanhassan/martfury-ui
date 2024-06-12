import { Link } from "react-router-dom";
import images from "../../assets/images/images";

import Badge from "../../components/common/Badge";
import { LuBarChart3 } from "react-icons/lu";

export default function MainHeader() {
  return (
    <>
      {/* desktop header */}
      <section className="bg-Primary lg:block sm:hidden hidden">
        <div className="py-[25px] mf-container flex items-center gap-4 ">
          <div className="flex items-center gap-4 flex-1">
            <div className="max-w-[300px] flex items-center">
              <Link to={"/"}>
                <img src={images.logoLight} alt="Logo Light" />
              </Link>
            </div>
            <div className="w-full lg:flex justify-center  sm:hidden hidden">
              <form className="flex flex-1 justify-between lg:max-w-5xl">
                <input
                  id="search"
                  type="search"
                  placeholder="Search your need products"
                  className="w-full px-3 py-2 focus:outline-none text-black"
                  name="search"
                  defaultValue=""
                />
                <button
                  className="px-5 text-white  bg-black hover:bg-opacity-80"
                  type="submit"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="text-whiteColor text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
                    />
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M338.29 338.29 448 448"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-between items-center gap-10 max-w-[370px]">
            <div className="xl:flex items-center gap-[30px] md:hidden hidden">
              <Link to={""}>
                <LuBarChart3 />
                <Badge text="0" position="top" />
              </Link>
              <Link to={""}>
                {/* <Heart size={32} /> */}
                <Badge text="0" position="top" />
              </Link>
              <Link to={""}>
                {/* <ShoppingBag size={32} /> */}
                <Badge text="0" position="top" />
              </Link>
            </div>
            <div className="flex items-center ">
              <span>{/* <User size={32} /> */}</span>
              <span className=" flex flex-col">
                <Link to={""} className="text-sm font-semibold">
                  Login
                </Link>
                <Link to={""} className="text-sm font-semibold">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* mobile header */}
    </>
  );
}
