import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { UseStateValue } from "../context/StateProvider.js";
import { actionType } from "../context/reducer.js";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = UseStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

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
    } else {
      setIsMenu(!isMenu);
    }
  };
  return (
    <header className="fixed bg-white z-50 w-screen p-3 px-6 md:p-2 md:px-16">
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
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 1 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
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
          </motion.ul>
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
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="bg-slate-200  w-40 shadow-xl rounded-lg flex flex-col absolute top-7 right-6"
              >
                {user && user.email === process.env.REACT_APP_EMAIL && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base">
                      {" "}
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base"
                  onClick={logout}
                >
                  {" "}
                  LogOut <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            className="w-6 object-cover"
            src={Logo}
            alt="logo"
            whileTap={{ scale: 0.6 }}
          />
          <p className="text-headingColor text-xl font-bold">Food Delivery</p>
        </Link>
        <motion.div
            whileTap={{ scale: 0.6 }}
            className="relative flex  items-center justify-center"
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
          {isMenu && (
            <div className="bg-slate-200  w-40 shadow-xl rounded-lg flex flex-col absolute top-7 right-6">
              {user && user.email === process.env.REACT_APP_EMAIL && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base">
                    {" "}
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <li className="px-4 py-2 gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base">
                  Home
                </li>
                <li className="px-4 py-2 gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base">
                  Menu
                </li>
                <li className="px-4 py-2 gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base">
                  About Us
                </li>
                <li className="px-4 py-2 gap-3 cursor-pointer hover:bg-slate-500 transition-all duration-100 ease-in-out text-teal-300 text-base">
                  Service
                </li>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-lg justify-center bg-slate-500 px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-black transition-all duration-100 ease-in-out text-teal-300 text-base"
                onClick={logout}
              >
                {" "}
                LogOut <MdLogout />
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
