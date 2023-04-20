import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { adddata, deldata, updatedata } from '../context/ContextProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const HomeRegister = () => {



 
    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);
 

    useEffect(() => {
        const notify = () => toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        notify();
    }, [])

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);








    const getdata = async (e) => {
        const res = await fetch("/getdata", {
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
    }, []);

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
            alert("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


    return (
        <>



            {
                udata ?
                    <>
                        <ToastContainer />
                    </> : ""
            }
            {
                updata ?
                    <>
                        <ToastContainer />
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <ToastContainer />
                    </> : ""
            }
                      <h2 class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-gray-800">รายชื่อผู้ป่วย</h2>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
  

                <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Email Address
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Occupation
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Phone Number
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {id + 1}
                                            </th>
                                            <th>
                                                {element.name}
                                            </th>
                                            <td class="py-4 px-6">
                                                {element.email}
                                            </td>
                                            <td class="py-4 px-6">
                                                {element.work}
                                            </td>
                                            <td class="py-4 px-6">
                                                +66 {element.mobile}
                                            </td>
                                            <td class="py-4 px-6">
                                                <NavLink to={`view/${element._id}`}> <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-8">view</a></NavLink>
                                                <NavLink to={`edit/${element._id}`}><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline ">Update</a></NavLink>
                                               
                                            </td>
                                        </tr>

                                    </>
                                )
                            }
                            )}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HomeRegister