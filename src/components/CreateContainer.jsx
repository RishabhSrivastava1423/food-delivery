import React, { useState } from "react";
import { motion } from "framer-motion";
import {MdFastfood} from 'react-icons/md'

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%]  border border-gray-400 rounded-lg p-2 flex flex-col items-center justify-center">
        {fields && (
          <motion.p initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className={`w-full p-2 rounded-lg text-center font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {" "}
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-400 flex item-center gap-2">
          <MdFastfood className='text-xl text-gray-700'/>
          <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Enter a title' required className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor"/>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
