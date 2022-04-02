import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap';
import axios from 'axios';


function NewOrderr() {


     const [details, getDetails] = useState([]);
  const getData = async () => {
      try {
          const data = await axios.get("/api/admin/Super-Admin/new_jobs");
     
          getDetails(data.data.data);
  
      } catch (e) {
          console.log("no execution");
         
      }
  };
  
  useEffect(()=>{
      getData();
  }, []);
  
  console.log('data',details);


     return ( 
          <div>
          <SidebarAdmin/>
          <Container>
          <ProfileNavAdmin/>  

          <h1>New Orders</h1>
          <div className='d-flex flex-row '>Dashboard / Order Managment/<h5 style={{color:"#fca311"}}>New</h5></div>
          <hr/>
          <Table borderless hover variant="outline-light">
               <thead>
               <tr>
                         
                         <th>Order No</th>
                         <th>Service</th>
                         <th>Customer</th>
                         <th>Technician</th>
                         <th>Status</th>
                         
                    </tr>
                    </thead>
                    <tbody className='border shadow p-3 mb-5 bg-body rounded'>
               {details.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.order_id}</td>
                    <td>{item.service}</td>
                    <td>{item.status}</td>
                    <td>{item.technician_assigned}</td>
                    <td>{item.claim} </td>
                   
                    </tr>
                ) )}
                  
               </tbody>
               </Table>
          </Container> 
               </div>
               
          
        );
    }

export default NewOrderr;