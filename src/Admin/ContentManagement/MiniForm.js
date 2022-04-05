import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
function MiniForm() {
     return ( 
          <div>
               <SidebarAdmin/>
             <ProfileNavAdmin/>

             <div className="col-9 offset-3 main">
  <h2>Homepage Miniform</h2>
  <h6><strong>Dashboard/Content Management/</strong><strong className = "text-warning">Miniform</strong></h6>
  <hr id = "contentdivider" />
   <div className = "row">
     <div className = "col">
        <h6>Categories</h6>
     </div>
     <div className = "col">
       <h6></h6>
    </div>
    <div className = "col">
       <h6>Description</h6>
    </div>
    <div className = "col">
      <th></th>
    </div>
   </div>


   <div className = "row serviceslist">
    <div className = "col">
       <p>Services <a href="addservice.html"><img src="assets/icons/Icon ionic-md-add-circle.png"/></a></p>
    </div>
    <div className = "col">
      <ul>
        <li>Repair</li>
      </ul>
   </div>
   <div className = "col">
    <ul>
      <li>Cookers</li>
        <li>Tvs</li>
        <li>Washing Machine</li>
        <li>Fridge</li>
        <li>Microwave</li>
        <li>Laptops</li>
        <li>Phones</li>
    </ul>
   </div>
   </div>


   </div>


          </div>
      );
}

export default MiniForm;