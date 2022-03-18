import React from 'react';
import {Link} from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";


function Scheduled() {
    return ( 
        <div>
            
            <div className='tabs' style={{marginTop:"8%", marginLeft:"20%",display:"flex", gap:"5%"}}> 


            <Link style={{textDecoration:'none', color:"black",border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Newjobs"}>New Jobs </Link>
            <Link style={{textDecoration:'none', color:"black",border:"1px solid #f8b609", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"#f8b609"}} to={"/Scheduled"}>Scheduled Jobs </Link>
            <Link style={{textDecoration:'none', color:"black", border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Jobhistory"}>Job History </Link>
             
            </div>


<div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

  <table class="table table-borderless">
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
      
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"white"}}>More Details...</button>
       </td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"white"}}>More Details...</button>
      </td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"white"}}>More Details...</button>
       </td>
      </tr>
    </tbody>
  </table>
  

  <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"20%",marginRight:"-1.5%"}}/>
                                

            </div>


        </div>
     );
}

export default Scheduled;