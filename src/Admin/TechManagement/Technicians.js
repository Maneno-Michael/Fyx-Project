import React from 'react';
import { AiFillStar } from "react-icons/ai";
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';

function Technicians() {
    return ( 
        <div>
            
        <SidebarAdmin/>
             <ProfileNavAdmin/> 
            <div className='tabs' style={{marginTop:"8%", marginLeft:"25%",display:"flex", gap:"5%"}}> 

            <div><h3>Technicians</h3></div>
            
            </div>
            <hr style={{width:"60%",marginLeft:"25%",border:"1px solid black"}} />
            <div className='tables' style={{marginTop:"2%", marginLeft:"25%",width:"60%"}}>

<table className="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Job ID No.</th>
      <th>Rank</th>
      <th>Complete jobs</th>
      <th>Service</th>
      <th>Full Name</th>
      <th>Location</th>
        <th>Area</th>
      <th>Phone number</th>
      

    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
    <tr>
      <td></td>
      <td>   <AiFillStar style={{fontSize:"10PX",color:"orange"}}/>            <select  name='Rank'  style={{background:"transparent",border:"0px solid" }}  id=" " >
      <AiFillStar style={{fontSize:"10PX"}}/>  <option  value="selected"> Rank </option>
                    <option value="Kenya">Gold</option>
                    <option value="Tanzania">Regular</option>
                    </select> <br/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
    <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


          </div>

          

        </div>
     )
    }

export default Technicians;