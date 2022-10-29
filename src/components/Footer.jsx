import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="gradient-header flex flex-col justify-center py-10 gap-3 border-t-2">
            <div className=" text-white text-4xl text-center">CONTACT US</div>
            <div>
                <div className="flex flex-row gap-2 justify-center">
                    <a href="https://www.instagram.com/pranav.jayachandran/" rel="noreferrer" target="_blank"><AiFillInstagram className="hover:text-amber-400 hover:text-3xl text-2xl transition-all duration-100 cursor-pointer text-white" /></a>
                    <a href="https://twitter.com/PranavPranj" rel="noreferrer" target="_blank"><AiOutlineTwitter className="hover:text-amber-400 hover:text-3xl text-2xl transition-all duration-100 cursor-pointer text-white" /></a>
                    <a href="https://www.linkedin.com/in/pranav-jayachandran-b971bb1b8/" rel="noreferrer" target="_blank" ><AiFillLinkedin className="hover:text-amber-400 hover:text-3xl text-2xl transition-all duration-100 cursor-pointer text-white" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;