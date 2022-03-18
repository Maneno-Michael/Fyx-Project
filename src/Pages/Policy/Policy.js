import React from 'react';
// import {Button,Row,container-fluid} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Policy.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
function Policy() {
    return ( 
        <section>
        <Sidebar/>
        <ProfileNav profile="Nicole" />
        <div>

        <div class = "container-fluidz">
        <div className = "card mb-5 shadow-sm"style={{maxHeight:"0%",marginLeft:"10%",borderRadius:"15px",backgroundColor:"white"}}>
    <div id = "fyxpolicyz" style={{}}>
        <h1 class = "text-center"style={{}}>Fyx Policy to be Stated here</h1>
        </div>
    </div>
</div>

            
        </div>
        </section>
     );
}

export default Policy;