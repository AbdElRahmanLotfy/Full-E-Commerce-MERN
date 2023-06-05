import React, { useEffect } from "react";
import Signup from "../components/Signup/Signup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, loading]);
  return (
    <>
      {!loading ? (
        <Signup />
      ) : (
        <h1 className="text-center text-[35px] pt-12">loading</h1>
      )}
    </>
  );
};

export default SignupPage;
