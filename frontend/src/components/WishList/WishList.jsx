import React, { useState } from "react";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const WishList = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "IPhone 14 xxx",
      description: "Test",
      price: "992",
    },
    {
      name: "IPhone 14 xxx",
      description: "Test",
      price: "992",
    },
    {
      name: "IPhone 14 xxx",
      description: "Test",
      price: "992",
    },
    {
      name: "IPhone 14 xxx",
      description: "Test",
      price: "992",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishList(false)}
            />
          </div>
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h2 className="text-[20px] pl-2 font-[500]">3 items</h2>
          </div>
          <br />
          {/* Single Cart Item*/}
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>

        {/* CheckOut Btn */}

        <div className="px-5 mb-3">
          {/* checkout buttons */}
          <Link to="/checkout">
            <div
              className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
            >
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Checkout Now (USD$ 1080)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center justify-between">
        <RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2" />
        <img
          src="https://images.squarespace-cdn.com/content/v1/589356e4e4fcb5bf186265fb/1664317624456-06HFW6URT7CJPZVIPO4T/iPhone-14-Front-Back-Bolt-Mobile-Product-Red.png"
          alt="Product"
          className="w-[50px] h-[50px] ml-2"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>

          <span className="font-[600] pt-3 800px:pt-[3px] text-[17px] text-[#d02222] font-Roboto">
            ${totalPrice}
          </span>
        </div>
        <div>
          <BsCartPlus size={25} className="cursor-pointer" tile="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default WishList;
