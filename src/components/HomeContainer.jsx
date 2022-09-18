import React from 'react'
import delivery from "../img/delivery.png";
import heroBg from "../img/heroBg.png";
import { data } from '../utils/data';

const HomeContainer = () => {
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-8">
        <div className="flex items-center gap-2 bg-orange-100 justify-center px-4 py-1 rounded-full">
          <p className="text-base text-orange-600 font-semibold"> Delivery</p>
          <div className="w-10 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={delivery} alt="delivery" className="w-full h-full object-contain"/>
          </div>
        </div>
        <p className="text-[2.3rem] lg:text-[3.7rem] font-bold tracking-wide">The Fastest Delivery in <span className="text-orange-600 text-[3rem] md:text-[4.25rem]">Your City</span></p>
        <p className="text-base text-center md:text-left md:w-[80%]"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus natus voluptatibus amet quas corporis molestiae assumenda officiis architecto, vel maxime velit eveniet accusantium iste eum quo repudiandae illum iure itaque? </p>

        <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 w-full md:w-auto">Order Now</button>
      </div>

      <div className="py-2 flex-1 flex items-center relative " >
        <div className='w-full flex items-center justify-center relative'>
            <img src={heroBg} alt="background" className='ml-auto h-420 w-full lg:w-auto lg:h-650'/>
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-[24px] py-4 gap-4 flex-wrap'>
              {
                data && data.map(item => (<div key={item.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                <img src={item.imageSrc} alt="Icecream" className='w-20  lg:w-40 -mt-10 lg:-mt-20'  />
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{item.name}</p>
                <p className='text-[10px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3'>{item.desc}</p>
                <p className='text-base lg:text-sm font-semibold text-headingColor' > <span className='text-xs text-red-600'>Rs</span> {item.price} </p>
              </div>))
              }
            </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContainer