import React from 'react';
import  mash from "../../Assets/images/walletbgimage.png";
import union from "../../Assets/icons/Icon awesome-calendar-week.png";
import raiz from "../../Assets/icons/Icon material-timelapse.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut,Line } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from 'react-dom';
// arc and faker error solved
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


function Wallet() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
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
    // linegraph function



    return ( 
 <div>
<section>
              <div className = "container mnz">
              <div className = "row wag">
              <div className = "col mnz -md-6"  >
              <div className = "card p-3 totalCard"style={{borderRadius:"15px",backgroundColor:""}}>
                <h5 className = "ml-5 font-weight-bold">Available Cash</h5>
                <p className = "ml-5 mb-0 availableCash"style={{textDecoration:"underline"}}><span className="mr-2">Ksh.</span>5,000.00</p>
                <p className="text-right muiz mb-0"><button className="withdrawbtn"style={{marginLeft:"86%",borderRadius:"15px"}} data-toggle="modal" data-target="#withdrawcash">Withdraw</button></p>
            </div>
            </div>
            <div id = "walletimgcol" className = "col-md-6">
            <div className = "card mui p-2"style={{borderRadius:"20px",}}>
               <img  id = "walletimg" src = {mash} height="112px" width = "200px"/>
            </div>
            </div>
            </div>
   
                 <div className="chart-holder">

                 <h3 className="secondary-heading mb-4">
                  Summary Earnings
                 </h3>
                 <section>
          
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                   
                      <a className="nav-link" id="lifetime-tab" data-toggle="tab" href="#lifetime" role="tab" aria-controls="home" aria-selected="false">Life Time</a>
                  
    
                      <a className="nav-link" id="monthly-tab" data-toggle="tab" href="#monthly" role="tab" aria-controls="profile" aria-selected="false">Monthly</a>
                   
                    
                     <a className="nav-link active" id="weekly-tab" data-toggle="tab" href="#weekly" role="tab" aria-controls="contact" aria-selected="true">Weekly</a>
                   
                    </ul>
                  {/* graph content */}
                
                
                   <div className="tab-content"style={{}} id="myTabContent">
                    
                   <div className="tab-pane fade active show" id="lifetime" role="tabpanel" aria-labelledby="lifetime-tab" >
                   <div className="card sinax shadow mb-2 chartCard"style={{width:"100%",height:"70%",borderRadius:"20px"}}>
                           {/* linegraph */}
                       <Line options={options} data={data} />
                   </div>
                   </div>
                   </div>
          
                  </section>
                  </div>
                       {/* end of linegraph */}
          
                          
     
                        <div id = "lowercards pt-3">
                        <div className = "row ">
                        <div className="col">
                        <div className="card pt-3">
                        <div className = "row">
                        <div className = "col-md-3 align-items-center" style={{}}>
                           <img className = "cardimgs weekly" src = {union} width="45px" height="45px"/>
                        </div>
                        <div className = "col-md-9">
                            <h6 className = "text-left ml-3">Weekly Earnings</h6>
                            <p className = "ml-3">Ksh 1,500.00</p>
                        </div>
                        </div> 
            </div>
            </div>
                         <div className="col">
                         <div className="card pt-3">
                         <div className = "row">
                         <div className = "col-md-3">
                            <img className = "cardimgs pending" src  width="45px" height="45px"/>
                        </div>
                        <div className = "col-md-9">
                            <h6 className = "text-left ml-3">Pending Payments</h6>
                            <p className = "ml-3">Ksh 3,000.00</p>
                        </div>
                        </div> 
            </div>
            </div>
                       <div className="col">
                       <div className="card pt-3">
                       <div className = "row">
                        <div className = "col-md-3">
                           <img className = "cardimgs due" src ={raiz} width="45px" height="45px"/>
                      </div>
                     <div className = "col-md-9">
                            <h6 className = "text-left ml-3">Total Money Made</h6>
                            <p className = "ml-3">Ksh 3,000.00</p>
                     </div>
                     </div> 
        </div>
        </div>
        </div>
       </div>

      
</div>

 </section>
         
</div>
     );
}

export default Wallet;