import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import { UseStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = UseStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">

      <HomeContainer/>
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold captialize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Fresh Fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{scale: 0.8}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer items-center justify-center transition-all ease-in-out duration-100 hover:shadow-lg flex" onClick={() => setScrollValue(-200)}>
              <MdChevronLeft className="text-lg text-white"/>
            </motion.div>
            <motion.div whileTap={{scale: 0.8}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer items-center justify-center transition-all ease-in-out duration-100 hover:shadow-lg flex" onClick={() => setScrollValue(200)}>
              <MdChevronRight className="text-lg text-white"/>
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>

  );
};

export default MainContainer;
