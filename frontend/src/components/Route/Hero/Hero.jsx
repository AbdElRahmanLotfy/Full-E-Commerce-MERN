import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70f7d800-e089-44c5-8d2c-aae8f7111278/dcdp6t3-7740d6a8-7962-47d8-958e-02b3af0416c0.jpg/v1/fill/w_935,h_855,q_70,strp/online_store_logo_by_creative_p_dcdp6t3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwZjdkODAwLWUwODktNDRjNS04ZDJjLWFhZThmNzExMTI3OFwvZGNkcDZ0My03NzQwZDZhOC03OTYyLTQ3ZDgtOTU4ZS0wMmIzYWYwNDE2YzAuanBnIiwiaGVpZ2h0IjoiPD05MzciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC83MGY3ZDgwMC1lMDg5LTQ0YzUtOGQyYy1hYWU4ZjcxMTEyNzhcL2NyZWF0aXZlLXAtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.iPdw7pn49iMs32m8QAmPq1LdxRJ8dfJPOF381v2oWGs)",
        backgroundSize: "100%",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
