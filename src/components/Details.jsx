import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Details = () => {
    const history = useNavigate("");
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const {id} = useParams("");
    console.log(id);

    

    const getdata = async () => {
        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
    
        const data = await res.json();
        console.log(data);
    
        if (res.status === 422 || !data) {
            console.log("error ");
            
    
        } else {
            setUserdata(data);
            console.log("Get data");
    
        }
    }

    useEffect(() => {
        getdata();
    } ,[]);

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            history("/HomeRegister");
        }

    }
   

  return (
    <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center">
        <h2 class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-gray-800">รายละเอียดผู้ป่วย</h2>
            <div class="container  w-full max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10 pt-5 container">
                    <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="http://localhost:3000/static/media/avatar.68cdc4513e601d28a382.png" alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{getuserdata.name}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">+66{getuserdata.mobile}</span>
                    <div class="flex mt-4 space-x-3 md:mt-6">
                    <NavLink to={`/HomeRegister/edit/${getuserdata._id}`}><a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">edit</a></NavLink>
                        <a href="#" onClick={() => deleteuser(getuserdata._id)} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</a>
                        
                    </div>
                    <div class="grid grid-cols-2 gap-y-6 gap-x-11  pt-7 " style={{paddingLeft: "100px"}}>
                      
                        <div><p class='text-white '>Email : <span>{getuserdata.email}</span></p></div>
                        <div><p class='text-white'>Age : <span >{getuserdata.age}</span></p></div>
                        <div><p class='text-white'>Occuption: <span>{getuserdata.work}</span></p></div>                      
                
                        <div><p class='text-white'>location: <span>{getuserdata.add}</span></p></div>
                        <div><p class='text-white'>Description: <span>{getuserdata.desc}</span></p></div>
                </div>
                </div>
            
                
                </div>
            </div>
        </div>
  
  )
}

export default Details