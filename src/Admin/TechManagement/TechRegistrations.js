import React, { useEffect, useState } from 'react';
import { BiMessageRounded } from "react-icons/bi";
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import axios from 'axios';



function TechRegistrations() {


//   const [loading, setLoading] = useState(true);
//   const [techData, setTechdata] = useState([]);

// useEffect (() =>{

//   axios.get(`/api/technicians`).then(res=>{
    
//     if(res.status === 200)
//     {
//       setTechdata(res.data)
//     }
//     setLoading(false);
//   });

// }, []);

// if(loading){
//   return <h3 style={{marginLeft:"25%"}}>Loading ...</h3>
// }

  
    return ( 
        <div>
        <SidebarAdmin/>
             <ProfileNavAdmin/> 

            <div className='tabs' style={{marginTop:"8%", marginLeft:"25%",display:"flex", gap:"5%"}}> 

            <div><h3>List of Registration Forms</h3></div>
            
            </div>
            <hr style={{width:"60%",marginLeft:"25%",border:"1px solid black"}} />
            <div className='tables' style={{marginTop:"2%", marginLeft:"25%",width:"60%"}}>

<table className="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Date</th>
      <th>Registration ID</th>
      

    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
    <tr>
      <td></td>
      <td></td>

      <td>
          <button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"transparent"}}>More Details...</button>
      </td>
      <td><button style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"orange"}}>Add Technician</button></td>
      <td><button style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>Reject Technician</button></td>
    </tr>

    <tr>
      <td></td>
      <td></td>

      <td><button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"transparent"}}>More Details...</button>
      </td>
    </tr>
  </tbody>
</table>


          </div>



        </div>
     );
}

export default TechRegistrations;