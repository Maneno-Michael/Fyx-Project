import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import Table from 'react-bootstrap/Table'
import * as fa from "react-icons/fa";
import axios from 'axios';


function Clients() {





  const [loading, setLoading] = useState(true);
  const [techData, setTechdata] = useState([]);

useEffect (() =>{

    
  axios.get(`/api/admin/customers`).then(res=>{
    
    
    if(res.status === 200)
    {
        console.log('hey there');
      setTechdata(res.data)
    }
    setLoading(false);
  });

}, []);

// if(loading){
//   return <h3 style={{marginLeft:"25%"}}>Loading ...</h3>
// }




    return ( 
        <div className=''>        
            <SidebarAdmin/>
             <ProfileNavAdmin/>
            <div className='container'>
                
            
                <Table borderless hover variant="outline-light">
                <thead>
                <tr>
                        <th>Date</th>
                        <th>Order No</th>
                        <th>Service</th>
                        <th>Technician</th>
                        <th>Invoice</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody className='border shadow p-3 mb-5 bg-body rounded'>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td> <fa.FaFileAlt/></td>
                    <td> <fa.FaReceipt/></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td> <fa.FaFileAlt/></td>
                    <td> <fa.FaReceipt/></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
            </div>
            
        </div>
    );
}



 
export default Clients;