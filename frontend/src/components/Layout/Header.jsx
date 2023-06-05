import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { categoriesData, productData } from "../../static/data";
import { backend_url } from "../../server";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      {/* Web View */}
      <div className={styles.section}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <Link to="/">
            <span className="text-[#170d33] font-bold text-3xl">
              OnLine_ShOp
            </span>
          </Link>
          <div className="w-[50%] relative">
            <input
              type="search"
              placeholder="Search Products ..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#170d33] border-[2px] rounded-md"
              onClick={() => setSearchData(false)}
            />

            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;

                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`} key={index}>
                        <div
                          className="w-full flex items-start py-3"
                          onClick={() => setSearchData(false)}
                        >
                          <img
                            src={i.image_Url[0].url}
                            alt="ProductImage"
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <p>{i.name}</p>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link to="/create-shop">
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : ""
        } transition hidden 800px:flex items-center justify-between w-full bg-[#170d33] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* Categories */}
          <div>
            <div
              className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block"
              onClick={() => setDropDown(!dropDown)}
            >
              <BiMenuAltLeft size={35} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />

              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* NavBar */}
          <div className={styles.noramlFlex}>
            <NavBar active={activeHeading} />
          </div>

          {/* Icons */}

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={35} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={35}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            {isAuthenticated ? (
              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer">
                  <Link to="/profile" className="flex items-center">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      alt=""
                      className="rounded-full w-[35px]"
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <CgProfile size={35} color="rgb(255 255 255 / 83%)" />
              </Link>
            )}
          </div>
        </div>

        {/* Cart */}

        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

        {/* WishList */}

        {openWishlist ? <WishList setOpenWishList={setOpenWishlist} /> : null}
      </div>

      {/* Mobile View */}

      <div className="w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden">
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="">
            <Link to="/">
              <h1 className="text-[30px] font-[500]">OnLine_Shop</h1>
            </Link>
          </div>
          <div>
            <div className="relative mr-[20px]">
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                1
              </span>
            </div>
          </div>
        </div>

        {/* SideBar */}

        {open && (
          <div className="fixed w-full bg-[#0000002f] z-20 h-full top-0 left-0">
            <div className="fixed w-[60%] bg-[#d1d9cf] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      1
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[90%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db1d] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fffbfb] w-[90%] px-2 ease-in-out duration-3000">
                    {searchData.map((i, index) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");

                      return (
                        <Link
                          to={`/product/${Product_name}`}
                          onClick={() => setOpen(false)}
                        >
                          <div className="flex items-center" key={index}>
                            <img
                              src={`${i.image_Url[0].url}`}
                              alt="ProductImage"
                              className="w-[50px] mr-2"
                            />
                            {i.name}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <NavBar active={activeHeading} />
              <div className={`${styles.button} ml-3`}>
                <Link to="/create-shop">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />
              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${user.avatar}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
