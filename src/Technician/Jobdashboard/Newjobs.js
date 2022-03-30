import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { useState } from "react";
import "./Jobdashboard.css";
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';
import axios from 'axios';


function Newjobs() {

  
const [details, getDetails] = useState([]);
const getData = async () => {
    try {
        const data = await axios.get("http://fixapi.chengegikonyo.com/api/technician/active");
        console.log(data.data.data);
        getDetails(data.data.data);

    } catch (e) {
        console.log("no execution");
       
    }
};

useEffect(()=>{
    getData();
}, []);

console.log('deta',details);




    return ( 
        <div>
           <TechnicianSidebar/>
            <ProfileTechNav profile="Fundi" /> 
            <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 


            <Link style={{textDecoration:'none', color:"black",border:"1px solid #f8b609", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"#f8b609"}} to={"/Newjobs"}>New Jobs </Link>
            <Link style={{textDecoration:'none', color:"black",border:"1px solid #white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Scheduled"}>Scheduled Jobs </Link>
            <Link style={{textDecoration:'none', color:"black", border:"1px solid #white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Jobhistory"}>Job History </Link>
             
            </div>

            <div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table className="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Order No</th>
      <th>Service</th>
      <th>Description</th>
      <th>Date</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
  {details.map((item,index)=>(
                    
   console.log('i',item),
    <tr key={index}>
      <td>{item.order_no}</td>
      <td>{item.service}</td>
      <td>{item.description}</td>
      <td>{item.date}</td>
      <td>Item.location</td>
      <td>
          <button  style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"white"}}>More Details...</button>

         

    </td>
    </tr>

    ) )}
  
  </tbody>
</table>

<BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"20%",marginRight:"-1.5%"}}/>
                                


          </div>



        </div>
     );
}

export default Newjobs;