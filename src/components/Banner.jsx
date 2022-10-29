import React from "react";
import image from "../assets/OBJECTS.png";
import { HealthContext } from "../context/HealthContext";
import { useContext } from "react";

const Banner = () => {
    const { connectWallet } = useContext(HealthContext);
    return (
        <div className=" flex sm:flex-row flex-col w-full h-100 gradient-header text-white">

            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="text-gradient text-white text-4xl sm:text-5xl font-semibold">ALL YOUR DETAILS <br />SAFE AT ONE PLACE
                </div>
                <p className="text-1xl my-5 text-left font-light">
                    We provide safe and secure storage for your details
                </p>
                <div className="rounded-full bg-[#9F2E91] hover:bg-[#000] cursor-pointer">
                    <div className="text-white px-7 py-2 text-2xl" onClick={connectWallet}>
                        Connect
                    </div>
                </div>
            </div>



            <div className="text-white flex flex-1 justify-center items-center">
                <div className="py-10 h-80 w-80">
                    <img src={image} />
                </div>
            </div>
        </div>
    )
}

export default Banner;