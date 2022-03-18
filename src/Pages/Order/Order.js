import React from 'react';
import ProfileNav from '../../components/profileNav';
import Sidebar from '../../components/Sidebar';

function Order() {
    return ( 
        <div>
          <Sidebar/>
          <ProfileNav profile="Nicole"/>  
        </div>
     );
}

export default Order;