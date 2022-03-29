import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import {Link} from "react-router-dom";



function TechNotifications() {
    return ( 
        <div>
           <SidebarAdmin/>
             <ProfileNavAdmin/> 


             <div className='tabs' style={{marginTop:"0%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

<div><h3><b>Notifications</b></h3></div>

</div>
<hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />



 <div  className='tabs' style={{marginTop:"3%", marginLeft:"20%",display:"flex", gap:"5%"}}> 
<Link style={{textDecoration:'none', color:"black",border:"1px solid white", paddingTop:"5px", paddingBottom:"5px",
    
    paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"orange"}} to={"/"}>Send notification </Link>
</div>



</div>
     );
}

export default TechNotifications;