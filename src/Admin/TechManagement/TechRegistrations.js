import React, { useEffect, useState } from 'react';
import { BiMessageRounded } from "react-icons/bi";
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function TechRegistrations() {

  const navigate = useNavigate();

  const [ details, setDetails] = useState ('');


const approve = (e) => {
  e.preventDefault();

  
axios.post(`api/admin/Super-Admin/technician/${details}/approve`) .then(res =>{
  if(res.status === 200)
  {
  
      alert("approved technician successfully");

      navigate('/home');

  }else{
      alert("Not approved");

      navigate('/login');
  }

});

  }

  
const reject = (d) => {
  d.preventDefault();

  
axios.post(`api/admin/Super-Admin/technician/${details}/reject`) .then(res =>{
  if(res.status === 200)
  {
  
      alert("Rejected technician successfully");

      navigate('/techregistration');

  }else{
      alert(" Rejection not approved");
      navigate('/techregistration');
      
  }

});

}
  

  
    return ( 
        <div>
        <SidebarAdmin/>
             <ProfileNavAdmin/> 

            <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

            <div><h3>List of Registration Forms</h3></div>
            
            </div>
            <hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />
            <div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table className="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Date</th>
      <th>Registration ID</th>
      

    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
    <tr>
      <td><input name='date' type="date" /></td>
      <td>
        <input onChange={(handleInput)=>{
        const val = handleInput.target.value;
        setDetails(val);
         }} name='reg_Id' type="text" />
         
         </td>

      <td>
          <button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"transparent"}}>More Details...</button>
      </td>
      <td><button onClick={approve} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"orange"}}>Add Technician</button></td>
      <td><button onClick={reject} style={{borderRadius:"15px",paddingLeft:"20px", paddingRight:"20px", border:"0px solid", background:"transparent",boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>Reject Technician</button></td>
    </tr>

    <tr>
      <td></td>
      <td></td>

      <td></td>
    </tr>
  </tbody>
</table>


          </div>



        </div>
     );
}

export default TechRegistrations;