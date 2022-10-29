import React from "react";
import { useContext } from "react";
import { HealthContext } from "../context/HealthContext";

const Screen = () => {
    const { setPresent, present } = useContext(HealthContext);
    const handle = () => {
        setPresent({
            firstName: "",
            lastName: "",
            patientID: 0,
            bloodGroup: "",
            Sugarlevel: 0,
            bloodPressure: 0,
            rbcCount: 0,
            wbcCount: 0,
            haemoglobin: 0,
            height: 0,
            weight: 0
        })
    }

    return (
        present.bloodGroup === '' ?
            <>
            </>
            :
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-30 bg-gray-900 text-center pt-10">
                <div className="text-white">
                    <div className="text-center p-2  text-5xl flex justify-center">
                        <div className="flex-1">
                            Details
                        </div>
                        <div className=" flex justify-end text-right text-3xl flex-2 -mt-10 mb-10" >
                            <div onClick={handle} className=" p-2 bg-black rounded hover:bg-white hover:text-black transition-all cursor-pointer">
                                X
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 ">
                        <div className="pl-10 text-3xl">
                            First Name : {present.firstName}
                        </div>
                        <div className="pl-10 text-3xl">
                            Last Name : {present.lastName}
                        </div>
                        <div className="pl-10 text-3xl">
                            ID : {present.patientID.toNumber()}
                        </div>
                        <div className="pl-10  text-3xl">
                            BloodGroup : {present.bloodGroup}
                        </div>
                        <div className="pl-10  text-3xl">
                            BloodPressure: {present.bloodPressure.toNumber()}
                        </div>

                        <div className="pl-10  text-3xl">
                            RBC Count : {present.rbcCount.toNumber()}
                        </div>
                        <div className="pl-10  text-3xl">
                            WBC Count : {present.wbcCount.toNumber()}
                        </div>
                        <div className="pl-10 text-3xl">
                            Haemoglobin : {present.haemoglobin.toNumber()}
                        </div>
                        <div className="pl-10  text-3xl">
                            Height : {present.height.toNumber()}
                        </div>
                        <div className="pl-10  text-3xl">
                            Weight : {present.weight.toNumber()}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Screen;