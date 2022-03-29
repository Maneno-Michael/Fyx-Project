import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import axios from 'axios';
import custom from "./useCustom";

function AllTechs() {


const{ data, loading, error } = custom("http://fixapi.chengegikonyo.com/api/admin/Super-Admin/new_technicians");
// const [del, setdata] = useState(data);
// const[newData,setNewData]=useState([])
// console.log('tdata',data)
// data.forEach((vc)=>{
//     console.log(vc);
// })
// setNewData(data.data)
// console.log("new data",newData)
if(loading) {
    <h1>LOARDING...</h1>
}
if(error){
    console.log(error);
}
// useEffect(() =>{
//     fetch("http://fixapi.chengegikonyo.com/api/admin/Super Admin/new_technicians")
//     .then(res =>console.log(res))
// }, [])


    return ( 
       <div>
               <SidebarAdmin/>
             <ProfileNavAdmin/>
             <div className='tabs' style={{marginTop:"2%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

                    <div><h3>Technicians</h3></div>

                    </div>
                    <hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />
                    <div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

                    <table className="table table-borderless">
                    <thead>
                    <tr style={{color:"gray"}}>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Phone number</th>
                    <th>Id number</th>
                    <th>Location Id </th>
                    <th>Area</th>
                    <th>Passport</th>
                    <th>Resume</th>


                    </tr>
                    </thead>
                    <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
                   {/* {data.data.map((dell)=>( */}

                   {data.map((data, index)=>(
                    <tr x={index}>
                     <td>{data.first_name}</td>
                    <td>{data.surname}</td>
                    <td>{data.phone}</td>
                    <td>{data.ID_Number}</td>
                    <td>{data.location_id}</td>
                    <td>{data.area}</td>
                    <td>{data.passport}</td>
                    <td>{data.resume}</td>
                    </tr>

                   ))}
                    
                  {/* ))}   */}
         
                    </tbody>
                    </table>


                    </div>

       </div>
        );
}

export default AllTechs;