import React from "react";

const NavBar = () => {
    return (
        <div className="pb-20 gradient-header w-full px-4 py-4 text-white flex">
            <div className="sm:text-5xl text-2xl flex flex-1 justify-center">
                PATIENT DETAIL KEEPER
            </div>
            <ul className="flex-2 flex justify-center sm:text-2xl text-1xl text-white">
                <li className="flex justify-end bg-[#192D4D] rounded-full px-2 py-2 sm:px-7 sm:py-2 hover:bg-[#9F2E91] cursor-pointer">Login</li>
            </ul>
        </div>
    )
}

export default NavBar;