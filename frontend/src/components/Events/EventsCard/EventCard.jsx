import React from "react";
import styles from "../../../styles/styles";
import CountDown from "../CountDown";

const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-[#fff] rounded-lg lg:flex p-2  ${
        active ? "unset" : "mb-12 mt-12"
      }`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg"
          alt="Product"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>IPhone 14pro max 8/256gb</h2>
        <p>
          The iPhone is a smartphone made by Apple that combines a computer,
          iPod, digital camera and cellular phone into one device with a
          touchscreen interface. The iPhone runs the iOS operating system, and
          in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of
          storage and a 12-megapixel camera
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h3 className="font-[500] text-[17px] text-[#9c3434] pr-3 line-through">
              1099$
            </h3>
            <h4 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h4>
          </div>
          <span className="pr-3 font-[400] text-[18px] text-[#4adb6c]">
            120 Sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
