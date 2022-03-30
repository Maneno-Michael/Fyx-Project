import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import Table from 'react-bootstrap/Table'
import axios from 'axios';


function Clients() {

  const [details, getDetails] = useState([]);
  const getData = async () => {
      try {
          const data = await axios.get("/api/admin/Super-Admin/customers");
          console.log(data);
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
        <div className=''>        
            <SidebarAdmin/>
             <ProfileNavAdmin/>
            <div className='container'>
            <h1>Clients</h1>
          <div className='d-flex flex-row '>Dashboard / Client Managment/<h5 style={{color:"#fca311"}}>Clients</h5></div>
          <hr/>  
  

            
                <Table borderless hover variant="outline-light">
                <thead>
                <tr>
                         <th>Id</th>
                        <th>User Id</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Phone number</th>
                        <th>Address</th>
                        <th>Updated time</th>
                        
                        <th>Completed Orders</th>
                        
                        
                    </tr>
                </thead>
                <tbody className='border shadow p-3 mb-5 bg-body rounded'>
                {details.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.user_id}</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.updated_at}</td>
                    <td>{item.completed_orders}</td>
                    
                    
                   
                    
                    </tr>
                ) )}

                </tbody>
                </Table>
            </div>
            
        </div>
    );
}



 
export default Clients;