import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/blurry.png";
import { heroData } from "../utils/data";
import Apicoviddata from "./Apicoviddata";
import { Link } from "react-router-dom";


const HomeContainer = () => {
    return <section
    className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
    id="home" >
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
      <div className="flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full">
        <p className="text-base text-blue-600 font-semibold">
        Medicine Delivery
        </p>
        <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
          <img
            src={Delivery}
            className="w-full h-full object-contain"
            alt="delivery"
          />
        </div>
      </div>

      <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor ">
      Kapong Chaipat Hospital 
        <span className="text-blue-500 text-[3rem] lg:text-[5rem]">
          Website 
        </span>
      </p>

      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
      ออกแบบและพัฒนาเว็บไซต์กะปงชัยพัฒน์ เพื่อเผยแพร่ความรู้และประชาสัมพันธ์เกี่ยวกับการเฝ้าระวังการควบคุมโรครวมถึงช่องทางการติดต่อสื่อสารทางโรงพยาบาล
      ออกแบบและพัฒนาเว็บไซต์กะปงชัยพัฒน์ เพื่อเผยแพร่ความรู้และประชาสัมพันธ์เกี่ยวกับการเฝ้าระวังการควบคุมโรครวมถึงช่องทางการติดต่อสื่อสารทางโรงพยาบาล
      </p>

      <button
        type="button"
       
        className="bg-gradient-to-br from-blue-400 to-blue-600 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        <a href="https://kapong-chaipat-delivery.netlify.app/" className="text-white">สั่งซื้อยา</a>
      </button>
    </div>
    <div className="py-1 flex-1 flex items-center relative">
      <img
        src={HeroBg}
        className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
        alt="hero-bg"
      />
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
        <Apicoviddata/>
        </div>
    </div>
    


  </section>
    };

    export default HomeContainer;