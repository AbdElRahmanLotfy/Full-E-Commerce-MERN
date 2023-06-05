import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);
  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=507ebajld11gjadg44vs6dfn");
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="w-full block 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data?.image_Url[select].url}
                  alt="Product"
                  className="w-[80%] max-h-[50%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt="Product"
                      className="max-h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt="Product"
                      className="max-h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h5 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h5>
                  <h4 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h4>
                </div>
                <div className="flex justify-between items-center mt-12 pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        color={click ? "red" : "#333"}
                        title="Remove From Wishlist"
                        onClick={() => setClick(!click)}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        color={click ? "#333" : "red"}
                        title="Add From Wishlist"
                        onClick={() => setClick(!click)}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded flex items-center`}
                >
                  <span className="text-[#ffff] flex items-center">
                    Add To Cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt="avatar"
                    className="w-[40px] h-[40px] rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name} py-1`}>
                      {data.shop.name}
                    </h3>
                    <h3 className="pb-3 text-[15px]">
                      {data.shop.ratings} Rate
                    </h3>
                  </div>
                  <div
                    className={`${styles.button} bg-[#170d33] mt-4 rounded h-11 ml-3`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-[#fff] flex items-center">
                      Send Message <AiOutlineMessage />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] rounded px-3 800px:px-10 py-2 h-[100%]">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] 800px:text-[20px] px-1 leading-5 font-[600] cursor-pointer"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] 800px:text-[20px] px-1 leading-5 font-[600] cursor-pointer"
            onClick={() => setActive(2)}
          >
            Seller Details
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] 800px:text-[20px] px-1 leading-5 font-[600] cursor-pointer"
            onClick={() => setActive(3)}
          >
            Info
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-4">
            11 Great Dummy Text Generator Options to Choose From Dummy text
            refers to the bits of content that are used to fill a website
            mock-up. This text helps web designers better envision how the
            website will look as a finished product.
          </p>
          <p className="py-4">
            11 Great Dummy Text Generator Options to Choose From Dummy text
            refers to the bits of content that are used to fill a website
            mock-up. This text helps web designers better envision how the
            website will look as a finished product.
          </p>
        </>
      ) : null}

      <></>
      {active === 2 ? (
        <p className="text-center pt-5 ">No Reviews Yet .. !</p>
      ) : null}

      {active === 3 ? (
        <div className="block w-full 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                alt="Seller"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="ml-2">
                <h2 className={`${styles.shop_name}`}>{data.shop.name}</h2>
                <h4 className="pb-1 text-[15px]">
                  ({data.shop.ratings}) Ratings
                </h4>
              </div>
            </div>
            <p className="pt-2">
              11 Great Dummy Text Generator Options to Choose From Dummy text
              refers to the bits of content that are used to fill a website
              mock-up. This text helps web designers better envision how the
              website will look as a finished product.
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h4 className="font-[500]">
                Joined On: <span className="font-[400]">14 March, 2023</span>
              </h4>
              <h4 className="font-[500] pt-2">
                Total Products: <span className="font-[400]">1,222</span>
              </h4>
              <h4 className="font-[500] pt-2">
                Total Revies: <span className="font-[400]">288</span>
              </h4>
              <Link to="/">
                <div
                  className={`${styles.button} h-[40px] !rounded-[7px] mt-3 text-[#ffff]`}
                >
                  Visit Shop
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
