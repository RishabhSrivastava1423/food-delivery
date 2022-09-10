import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { UseStateValue } from "../context/StateProvider.js";
import { actionType } from "../context/reducer.js";

const header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = UseStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-6">
      {/* Desktop And Tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            className="w-6 object-cover"
            src={Logo}
            alt="logo"
            whileTap={{ scale: 0.6 }}
          />
          <p className="text-headingColor text-xl font-bold">Food Delivery</p>
        </Link>
        <div className=" flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover: text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover: text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover: text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover: text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">5</p>
            </div>
          </motion.div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              className="w-6 h-6 min-w-[37px] min-h-[37px] drop-shadow-2xl cursor-pointer"
              src={avatar}
              alt="profile photo"
              onClick={login}
            />
            <div className="bg-slate-200  w-40 shadow-xl rounded-lg flex flex-col absolute top-7 right-6">
              {
                user && user.email === process.env.REACT_APP_EMAIL && (
              <Link to={"/createItem"}>
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base"> <MdAdd/> New Item  </p>
              </Link>
                )
            }
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base"> <MdLogout/> LogOut </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default header;
