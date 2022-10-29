import React, { useContext } from "react";
import { HealthContext } from "../context/HealthContext";

const DetailsTaker = () => {
    const { handleChange, formData, storeDetails } = useContext(HealthContext);
    const handleSubmit = (e) => {
        const {
            firstName,
            lastName,
            patientID,
            bloodGroup,
            Sugarlevel,
            bloodPressure,
            rbcCount,
            wbcCount,
            haemoglobin,
            height,
            weight
        } = formData;
        e.preventDefault();

        if (!firstName ||
            !lastName ||
            !patientID ||
            !bloodGroup ||
            !Sugarlevel ||
            !bloodPressure ||
            !rbcCount ||
            !wbcCount ||
            !haemoglobin ||
            !height ||
            !weight)
            return;
        storeDetails();
    }
    return (
        <div className="gradient-header">
            <div className="py-20 w-full flex flex-col text-white">
                <div className="flex justify-center text-center">
                    <h1 className="text-5xl font-light -mt-15 mb-10">
                        Enter the details
                    </h1>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 flex justify-center">
                        <div className=" w-5/6 px-0 py-5 bg-[#101D3C] rounded">
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                     rounded-full"
                                        placeholder="First-Name" type="text" name="firstName" onChange={(e) => handleChange(e, "firstName")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                             rounded-full"
                                        placeholder="Last-Name" type="text" name="lastName" onChange={(e) => handleChange(e, "lastName")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                 rounded-full"
                                        placeholder="Patient-id" type="number" name="patientID" onChange={(e) => handleChange(e, "patientID")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                               rounded-full"
                                        placeholder="Blood-Group" type="text" name="bloodGroup" onChange={(e) => handleChange(e, "bloodGroup")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                rounded-full"
                                        placeholder="Sugar Level" type="number" name="Sugarlevel" onChange={(e) => handleChange(e, "Sugarlevel")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                 rounded-full"
                                        placeholder="Blood-Pressure" type="number" name="bloodPressure" onChange={(e) => handleChange(e, "bloodPressure")}>

                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className=" w-5/6 px-0 py-5 bg-[#101D3C] rounded">
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                 rounded-full"
                                        placeholder="RBC Count" type="number" name="rbcCount" onChange={(e) => handleChange(e, "rbcCount")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                 rounded-full"
                                        placeholder="WBC Count" type="number" name="wbcCount" onChange={(e) => handleChange(e, "wbcCount")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                rounded-full"
                                        placeholder="Haemoglobin" type="number" name="haemoglobin" onChange={(e) => handleChange(e, "haemoglobin")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                 rounded-full"
                                        placeholder="Height" type="number" name="height" onChange={(e) => handleChange(e, "height")}>

                                    </input>
                                </div>
                            </div>
                            <div className=" w-full flex justify-center items-center my-3">
                                <div className="w-full flex justify-center">
                                    <input className="text-1xl w-5/6 p-2 bg-[#15274E] text-gray-500 placeholder-gray-400
                                rounded-full"
                                        placeholder="Weight" type="number" name="weight" onChange={(e) => handleChange(e, "weight")}>
                                    </input>
                                </div>
                            </div>
                            <div className="h-px bg-gray-500 w-full my-2">
                            </div>
                            <div className="flex justify-center ">

                                <div className="bg-blue-700 py-2 px-7 text-2xl rounded-full hover:bg-transparent hover:border-yellow-500 border-[1px] border-transparent cursor-pointer" onClick={handleSubmit}>
                                    Store
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default DetailsTaker;