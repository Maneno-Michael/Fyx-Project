import React from 'react';
import './TechHome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import barak from "../../Assets/images/techhomeimg.png";
import mtaa from "../../Assets/icons/Icon material-techdashboard.png";
import { Doughnut,Line } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from 'react-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  
} from 'chart.js';
import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TechHome() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' 
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
     
    ],
  };
// doughnutchart
  const mlembe = {
    labels: [ ["rate", ] ],
    datasets: [
      {
        label:["rate", "No rate"],
        data: [100,25],
        backgroundColor: [
          'rgb(88, 89, 93)', 'rgb(248, 182, 9)'        ,
          ,
        ],
        borderColor: [
          'grey',
         
        ],
        borderWidth: 1,
      },
    ],
  };

  

    return ( 
        <section>
       <div>
       <div className = "container">
       <div id = "welcomecard"style={{marginLeft:"10%",maxWidth:"80%",borderRadius:"10px"}} className = "card mb-2 shadow-sm">
          <div className="card-body">
            <div className = "row">
              <div id = "welcomeimg" style={{marginLeft:"20%"}} className = "col">
                <img className = "ml-0 "  src={barak} height="150px" width="150px"/>
                 </div>
                <div id="welcomewords"  className = "col" >
                    <h2 className = "text-center">WELCOME Fundi!</h2>
                </div>
                   
       </div>    
       </div>
       </div>

{/* charts */}



<div className= "row ml-1 mr-2 mb-4">
            <div className= "col col-md-9 p-0" >
                <a href = "activejobs.js"><button id = "activejobs"style={{marginLeft:"20%",borderRadius:"15px",borderColor:"yellow",backgroundColor:"white"}}><img src = {mtaa}/>  <span>New Jobs</span></button></a>
                <h6 id = "chartheader" style={{marginLeft:"20%"}}>Jobs done per week</h6>
                <div id = "chartCard"style={{marginRight:"5%",marginLeft:"15%",maxWidth:"70%",maxHeight:"80%",borderRadius:"15px"}} class="card shadow mt-2">        
                    <div class="card-body">
                    <Line options={options} data={data} />
                   {/* linegraph */}
                
                       <div class="chart-area" >
                       </div>
                       </div>
                </div>          
                </div>
               
            <div className= "col col-md-3 p-0">
                <div id = "ratingcard" style={{marginRight:"10%",marginTop:"20%",borderRadius:"15px"}} className= "card">
                    <div class="card-body">
                        <div class="chart-area">
                        <Doughnut data={mlembe} />
                          <canvas id="technicianratings" ></canvas>
                      </div>
                      </div> 
                      <p id = "ratingparagraph" className= "text-center">Customer Rating <FontAwesomeIcon icon="fa-solid fa-star" /><i className= "fa fa-star fa-2x"></i><i className= "fa fa-star fa-2x"></i><i className= "fa fa-star fa-2x"></i><i className= "fas fa-star-half-alt fa-2x"></i></p> 
                </div>
              
                </div> 
                </div>

            
              {/* note */}
             <div className = "row mb-4">
            <div id = "note" className = "col-md-4">
                <p className = "text-center text-danger"><strong>Note:</strong></p>
            </div>
            <div id = "notewords" className = "col-md-8 pt-2">
               <p className = "text-left small"style={{marginLeft:"20%"}}>
                   Outsourcing of Fyx's Technicians is highly discouraged. In an instance where this happens, we will not be liable for
                   the damages that may be caused e.g theft, destruction of property etc. by the technician.
                   Outsourcing of a technician will cause him/her to be let go.
               </p>
            </div> 
    </div>      
            
  

    </div>
     </div>   
    </section>  
     );
}

export default TechHome;
                    
                   
                        

         

