import React from "react";
import assets from "../assets/assets";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    if(userData.password !== userData.confirmPassword) {
        alert("Passwords do not match!");
        return
    }

    const {firstName, lastName, email, password} = userData;

    try {
        await createUser({firstName, lastName, email, password})
        alert('user created successfully')
        navigate("/login")
    } catch (error) {
        console.log('error while creating user',error.message)
    }
  };
  return (
    <div className="relative h-screen w-full flex items-center md:flex-row flex-col md:justify-between justify-center px-[50px]">
      <div className="absolute top-5 left-5 z-30 cursor-pointer pointer-events-auto">
        <Link to={"/"}>
          <h2 className="logo-font text-2xl text-white">Foodieland.</h2>
        </Link>
      </div>
      <div className="absolute inset-0 bg-black/50 z-10">
        <img
          src={assets.loginBg}
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="relative z-20 max-w-[800px] w-full max-md:text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
          Welcome <br /> Back to <br /> Foodieland!
        </h1>
      </div>
      <div className="relative z-20 max-w-[800px] w-full backdrop-blur-md  px-8 py-[50px] md:py-[100px] rounded-lg shadow-lg flex flex-col gap-6">
        <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white mb-6">
          Create An Account
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row items-center justify-between gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            className="placeholder:text-white border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            className="placeholder:text-white border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="placeholder:text-white border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="placeholder:text-white border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            className="placeholder:text-white border-1 rounded-2xl w-full bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-between mt-[10px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start">
            <p className="text-white">Already have an account?</p>
            <p
              onClick={() => navigate("/login")}
              className="text-white cursor-pointer underline hover:text-[blue] transition-all duration-150"
            >
              login
            </p>
          </div>
          <button
            type="submit"
            className="bg-[#F2F2F2] text-[#828282] py-2 px-8 rounded-2xl hover:bg-[#828282] hover:text-[#F2F2F2] transition-all duration-300 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default Signup;
