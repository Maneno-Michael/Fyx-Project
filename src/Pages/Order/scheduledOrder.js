import React from 'react';
import Sidebar from '../../components/Sidebar'
import IfOrdered from '../Order/ifOrdered';
import ProfileNav from '../../components/profileNav';

function ScheduledOrder() {               
   return (
    <div>
        <Sidebar/>
        <div className='container'>
        <ProfileNav profile="Nicole"/>
            <IfOrdered ordered={false}/>
        </div>
    </div>
   )
    
}
export default ScheduledOrder;