import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login(email, password)
    if( res && res.message === 'User logged in successfully') {
      alert("Login successful!");
      navigate("/");
    }
    else{
      alert("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className="relative h-screen w-full flex items-center md:flex-row flex-col md:justify-between justify-center px-[50px]">
        <div className='absolute top-5 left-5 z-30 cursor-pointer pointer-events-auto'>
                <Link to={"/"}>
                    <h2 className='logo-font text-2xl text-white'>Foodieland.</h2>
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
        <div className="flex md:flex-row flex-col items-start  md:items-center justify-between rounded">
          <MdOutlineEmail className="flex-1/4 text-white text-3xl" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full placeholder:text-white flex-3/4 bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-center justify-between">
          <RiLockPasswordLine className="md:flex-1/4 text-white text-3xl" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="placeholder:text-white w-full md:flex-3/4 bg-transparent border-b border-white text-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-[25px] gap-6 w-full">
          <div className="flex flex-col gap-4 md:ml-[75px]">
            <div className="flex items-center">
              <p className="text-white">Forgot your password?</p>
              <button className="text-[#F2F2F2] underline ml-2 hover:text-[#828282] transition-colors duration-200">
                Reset it
              </button>
            </div>
            <div className="flex items-center">
              <p className="text-white">Don't have an account?</p>
              <button
                onClick={() => navigate("/signup")}
                className="text-[#F2F2F2] underline ml-2 hover:text-[#828282] transition-colors duration-200"
              >
                Register
              </button>
            </div>
          </div>
          <button onClick={handleLogin} className="bg-[#F2F2F2] text-[#828282] py-2 px-8 rounded-2xl hover:bg-[#828282] hover:text-[#F2F2F2] transition-all duration-300 cursor-pointer self-end md:self-end md:ml-8">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
