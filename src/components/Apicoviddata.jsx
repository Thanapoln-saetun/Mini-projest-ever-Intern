import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import covid1 from "../img/covid0.png";
import covid3 from "../img/covid2.png";
import covid4 from "../img/covid3.png";
import covid5 from "../img/covid4.png";

function Apicoviddata() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
      .then((res) => {
        console.log("Getting:::", res.data);
        setDate(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data) => {
    return (
        
      <div class="grid grid-cols-2 gap-x-8 gap-y-16 pt-7">

          <div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                <img
                  src= {covid1}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt=""
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
                  ผู้ติดเชื้อสะสม
                </p>
                <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2 px-8 text-center  bg-blue-500 rounded-lg  ">
              
                   {data.total_case.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                
                

                <p className="text-sm font-semibold text-headingColor mt-3">
                  <span className="text-xs text-blue-500">UP</span> {data.new_case.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
                  อัพเดทล่าสุด : {data.update_date}
                </p>

          </div>

          <div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                <img
                  src={covid3}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt=""
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
                ผู้ติดเชื้อคนไทย
                </p>
                <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2 px-8 text-center  bg-yellow-500 rounded-lg  ">
              
                   {data.total_case_excludeabroad.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                
                

                <p className="text-sm font-semibold text-headingColor mt-3">
                  <span className="text-xs text-yellow-500">UP</span> {data.new_case_excludeabroad.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
                  อัพเดทล่าสุด : {data.update_date}
                </p>

          </div>

          <div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                <img
                  src={covid4}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt=""
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
                  ผู้เสียชีวิต
                </p>
                <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2  px-11 text-center  bg-red-500 rounded-lg  ">
              
                   {data.total_death.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                
                

                <p className="text-sm font-semibold text-headingColor mt-3">
                  <span className="text-xs text-red-500">UP</span> {data.new_death.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
                  อัพเดทล่าสุด : {data.update_date}
                </p>

          </div>

          <div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                <img
                  src={covid5}
                  className="w-40 lg:w-40 -mt-10 lg:-mt-20 "
                  alt=""
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
                  ผู้หายเป็นปกติ
                </p>
                <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2 px-8 text-center  bg-green-500 rounded-lg  ">
              
                   {data.total_recovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                
                

                <p className="text-sm font-semibold text-headingColor mt-3">
                  <span className="text-xs text-green-500">UP</span> {data.new_recovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </p>

                <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
                  อัพเดทล่าสุด : {data.update_date}
                </p>

          </div>

          

      </div>
      
    );
  });

  return (
    <div>
   <div class="grid grid-cols-2 gap-x-8 gap-y-16 pt-7">

<div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
      <img
        src= {covid1}
        className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
        alt=""
      />
      <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
        ผู้ติดเชื้อสะสม
      </p>
      <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2 px-8 text-center  bg-blue-500 rounded-lg  ">
    
      4,682,132
      </p>

      
      

      <p className="text-sm font-semibold text-headingColor mt-3">
        <span className="text-xs text-blue-500">UP</span> 61
      </p>

      <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
        อัพเดทล่าสุด :  07/10/2022 17:13
      </p>

</div>

<div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
      <img
        src={covid3}
        className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
        alt=""
      />
      <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
      ผู้ติดเชื้อคนไทย
      </p>
      <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2 px-8 text-center  bg-yellow-500 rounded-lg  ">
    
      4,681,894
      </p>

      
      

      <p className="text-sm font-semibold text-headingColor mt-3">
        <span className="text-xs text-yellow-500">UP</span> 59
      </p>

      <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
        อัพเดทล่าสุด : 07/10/2022 17:13
      </p>

</div>

<div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
      <img
        src={covid4}
        className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
        alt=""
      />
      <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
        ผู้เสียชีวิต
      </p>
      <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2  px-11 text-center  bg-red-500 rounded-lg  ">
    
      32,771
      </p>

      
      

      <p className="text-sm font-semibold text-headingColor mt-3">
        <span className="text-xs text-red-500">UP</span> 0
      </p>

      <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
        อัพเดทล่าสุด : 07/10/2022 17:13
      </p>

</div>

<div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
      <img
        src={covid5}
        className="w-40 lg:w-40 -mt-10 lg:-mt-20 "
        alt=""
      />
      <p className="text-base lg:text-xl font-semibold text-textColor mt-2 ">
        ผู้หายเป็นปกติ
      </p>
      <p className="text-base lg:text-xl font-semibold text-white mt-2 inline-flex items-center py-2 px-8 text-center  bg-green-500 rounded-lg  ">
    
      4,642,894
      </p>

      
      

      <p className="text-sm font-semibold text-headingColor mt-3">
        <span className="text-xs text-green-500">UP</span> 19
      </p>

      <p className="text-[12px] lg:text-xxs text-lighttextGray my-1 lg:my-1">
        อัพเดทล่าสุด : 07/10/2022 17:13
      </p>

</div>



</div>
    </div>
  );
}

export default Apicoviddata


