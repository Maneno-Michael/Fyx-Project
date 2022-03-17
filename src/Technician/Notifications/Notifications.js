import React from 'react';
import {Link} from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";

function Notifications() {
    return ( 
        <div>
            <div className='tabs' style={{marginTop:"8%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

<h5 style={{textDecoration:'none', border:"1px solid #e8e9ed", paddingTop:"10px", paddingBottom:"10px",
     paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)", background:"#e8e9ed"}}>Notifications from the admin</h5>
 
</div>

<div className='tables' style={{marginTop:"2%", marginLeft:"20%",width:"60%"}}>

<table class="table table-borderless">
<thead>
<tr style={{color:"gray"}}>
<th>Order No</th>
<th>Status</th>
<th>Reason</th>

</tr>
</thead>
<tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
<tr >
<td>John</td>
<td style={{color:"lightgreen",fontWeight:"500"}}>Request Approved</td>
<td> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </td>
<td><button style={{color:"red",background:"white",border:"0px"}}> <MdDelete style={{fontSize:"18px",color:"red"}} />Delete</button></td>


</tr>

<tr>
<td>Mary</td>
<td style={{color:"lightgreen",fontWeight:"500"}}>Moe</td>
<td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
<td><button style={{color:"red",background:"white",border:"0px"}}> <MdDelete style={{fontSize:"18px",color:"red"}} />Delete</button></td>

</tr>
<tr>
<td>July</td>
<td style={{color:"lightgreen",fontWeight:"500",fontWeight:"500"}}>Dooley</td>
<td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
<td><button style={{color:"red",background:"white",border:"0px"}}> <MdDelete style={{fontSize:"18px",color:"red"}} />Delete</button></td>

</tr>
</tbody>
</table>
<BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"20%",marginRight:"-1.5%"}}/>
                                

</div>

        </div>
     );
}

export default Notifications;