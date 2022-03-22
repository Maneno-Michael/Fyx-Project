import React from 'react';
// import { Container } from 'react-bootstrap';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import SidebarAdmin from '../../components/sidebarAdmin'             

function AdminDashboard() {
     return ( 
          <div>
          
             <SidebarAdmin/>
             <ProfileNavAdmin/>
             
             
          </div>
      );
}

export default AdminDashboard;