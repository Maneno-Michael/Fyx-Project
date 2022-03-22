import React from "react";
import './sidebar.css';
import * as fa from "react-icons/fa";
import { IoPersonCircle} from "react-icons/io5"; 
import * as mb from "react-icons/md";
import {MdLogout} from "react-icons/md";


const Sidebar=()=>{
    
    let li = document.querySelectorAll(".nav-link");
    
    li.forEach(link =>{
        link.addEventListener("click",()=>{
            // e.preventDefault()
        li.forEach(navLink => navLink.classList.remove('active'));
            
            link.classList.add("active")
        })
    })
    return (
        
        <div>
        {/* <!-- Sidebar  --> */}
         <header>
        <nav id="sidebar" className="">
        <div className="logo">
                <img src="/Assets/images/Asset 2.svg" alt="fyx logo" className="img-fluid"/>
            </div>
            <ul class="list-unstyled components">
            <li className="nav-link"><a href="/profile" className=" menu-item"> <IoPersonCircle  style={{ fontSize:"30px", color:"black"}}/> Profile</a></li>
                    <li className="nav-link"><a href="/history" className=" menu-item"><fa.FaHistory style={{color:"black",fontSize:"350x"}} className="ms-2"/> History</a></li>
                    <li className="nav-link">  <a href="/bookservice" className=" menu-item"> <fa.FaBookMedical style={{color:"black",fontSize:"20px"}} className="ms-2" />Book Service</a></li>               
                    <li className="nav-link ">  <a href="/order" className=" menu-item"><fa.FaListAlt  style={{ fontSize:"20px", color:"black"}}  className="ms-2" />Order</a></li>
                    <li className="nav-link"> <a href="/feedback" className=" menu-item"><mb.MdFeedback style={{color:"black",fontSize:"20px"}} className="ms-2"/>Feedback</a></li>
                    <li className="nav-link">  <a href="/policy" className=" menu-item"><fa.FaFileContract style={{color:"black",fontSize:"20px"}} className="ms-2" />FYX policy</a></li>
                    <li className="nav-link">  <a href="/home" className=" menu-item"><fa.FaHome style={{color:"black",fontSize:"20px"}}  className="ms-2" />home</a></li>
            </ul>
            <div className="settings" >
                <ul>
                    <li>  <a href="/about" className="text-black"><fa.FaInfoCircle style={{color:"black",fontSize:"30px"}}  className="ms-2" />About us</a></li>
                    <li>  <a href="/"> <MdLogout style={{color:"black",fontSize:"35px"}}  className="ms-2" />Log Out</a></li>
                </ul>
            </div>
        </nav>
        </header>
        </div>
    
    )
    }   

export default Sidebar;