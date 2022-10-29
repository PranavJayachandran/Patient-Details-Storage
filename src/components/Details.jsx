import React, { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { HealthContext } from "../context/HealthContext";
import { useState } from "react";

const DetailsCard = ({ item }) => {
    const { setPresent, present } = useContext(HealthContext);
    const handle = () => {
        setPresent(item);
    }
    return (
        <div className="  flex-1 text-white flex justify-center" onClick={handle}>
            <div className=" w-[200px] hover:animate-pulse cursor-pointer bg-[#192e4a]  rounded-2xl flex justify-center flex-col">
                <div className="flex justify-center border-b-2 border-blue-500 py-5 ">
                    <div className="bg-[#192e5d] rounded-full p-2 border border-gray-500">
                        <BsFillPersonFill className="text-6xl  font-light" />
                    </div>
                </div>
                <div className="px-10">
                    <div className="pt-10 flex  text-2xl font-light">
                        {item.firstName}
                    </div>
                    <div className="pt-2 flex  text-2xl font-light">
                        {item.lastName}
                    </div>
                    <div className="pt-2 pb-10 flex  text-2xl font-light">
                        ID : {item.patientID.toNumber()}
                    </div>
                </div>
            </div>
        </div>
    )

}
const Details = () => {
    const { details } = useContext(HealthContext);
    const handle = (e) => {
    }
    return (
        <div className="gradient-header pb-20">
            <div>
                <div className="text-white flex justify-center items-center sm:text-5xl text-4xl">
                    PATIENT DETAILS
                </div>
                {
                    details.length === 0 ?
                        <div className="text-white text-center text-3xl mt-10 font-light">
                            No details available yet
                        </div> :
                        <>
                        </>
                }
                <div className="pt-10 px-12 flex gap-10 flex-wrap">
                    {
                        details.map((item, index) => (
                            <DetailsCard item={item} />
                        ))

                    }

                </div>
            </div>
        </div>
    )
}

export default Details;