import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

import styles from "../../../styles/styles";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\+s/g, "-");
  return (
    <>
      <div className="w-full h-[370px] bg-[#ffff] rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt="ProductImg"
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
        </Link>
        <Link to={`/prdduct/${product_name}`}>
          <h2 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h2>
        </Link>
        <div className="flex">
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiOutlineStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex">
            <h4 className={`${styles.productDiscountPrice}`}>
              {data.price === 0 ? data.price : data.discount_price}
            </h4>
            <h3 className={`${styles.price}`}>
              {data.price ? data.price + "$" : null}
            </h3>
          </div>
          <span className="font-[400] text-[17px] text-[#64de64]">
            {data.total_sell} Sold
          </span>
        </div>

        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="absolute top-5 right-2"
              color={click ? "red" : "#333"}
              title="Remove From Wishlist"
              onClick={() => setClick(!click)}
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="absolute top-5 right-2"
              color={click ? "#333" : "red"}
              title="Add From Wishlist"
              onClick={() => setClick(!click)}
            />
          )}
          <AiOutlineEye
            size={22}
            className="absolute top-14 right-2"
            color="#333"
            title="View Product"
            onClick={() => setOpen(!open)}
          />
          <AiOutlineShoppingCart
            size={22}
            className="absolute top-24 right-2"
            color="#444"
            title="Add To Cart"
            onClick={() => setOpen(!open)}
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
