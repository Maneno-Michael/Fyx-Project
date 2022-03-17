import React from 'react';
import {Link} from "react-router-dom";


function Scheduled() {
    return ( 
        <div>
            
            <div className='tabs' style={{marginTop:"8%", marginLeft:"20%",display:"flex", gap:"5%"}}> 


            <Link style={{textDecoration:'none', color:"black",border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Newjobs"}>New Jobs </Link>
            <Link style={{textDecoration:'none', color:"black",border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
                 paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"white"}} to={"/Scheduled"}>Scheduled Jobs </Link>
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
        <td>John</td>
        <td>Doe</td>
        <td>joh.com</td>
        <td>John</td>
        <td>Doe</td>
        <td><Link style={{textDecoration:'Underline', color:" #f8b609",}} to={"/Newjobs"}>More Details... </Link>
            </td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mar.com</td>
        <td>John</td>
        <td>Doe</td>
        <td><Link style={{textDecoration:'Underline', color:" #f8b609",}} to={"/Newjobs"}>More Details... </Link>
            </td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>jul.com</td>
        <td>John</td>
        <td>Doe</td>
        <td><Link style={{textDecoration:'Underline', color:" #f8b609",}} to={"/Newjobs"}>More Details... </Link>
            </td>
      </tr>
    </tbody>
  </table>
  
            </div>


        </div>
     );
}

export default Scheduled;