import React from 'react';
// import { Container } from 'react-bootstrap';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import SidebarAdmin from '../../components/sidebarAdmin'             

import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';
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
import { Container } from 'react-bootstrap';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function AdminDashboard() {
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
 
     return ( 
          <div>
             <SidebarAdmin/>
             <ProfileNavAdmin/>
             
         


<Container>
   
<div className="col-9 offset-3 main">
        <h2>Analytics</h2>
         <h6>Dashboard/Analytics</h6>
      {/* <kilz id = "contentdivider"/> */}

    <a href = "neworders"><button type = "button" className = "btnNewOrder mb-2"><img src = "assets/icons/icons8-purchase-order-50.png" width="20px" height="20px"/> New Orders</button></a>
  <div className = "row">
    <div className = "col-md-6 col-lg-6">
        <h4 className="secondary-heading mb-1">
            Orders
          </h4>
          
          
        <section>
          
            <ul className="nav nav-tabs" id="myTab" role="tablist">
          
             <a className="nav-link" id="lifetime-tab" data-toggle="tab" href="#daily" role="tab" aria-controls="home" aria-selected="false">Daily</a>
              
             
                <a className="nav-link" id="monthly-tab" data-toggle="tab" href="#weekly" role="tab" aria-controls="profile" aria-selected="false">Weekly</a>
            
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link active" id="weekly-tab" data-toggle="tab" href="#monthly" role="tab" aria-controls="contact" aria-selected="true">Monthly</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade active show" id="daily" role="tabpanel" aria-labelledby="lifetime-tab" >
                  <div className="card shadow moneycard mb-4">
                      <div className="card-body">
                        <h6 className = "font-weight-bold">Orders Recieved</h6>
                          <div className="chart-area">
                          {/* linegraph */}
                          <Line options={options} data={data} />

                          </div>
                      </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="monthly-tab">
                  <div className="card shadow moneycard mb-4">
                      <div className="card-body">
                        <h6 className = "font-weight-bold">Orders Recieved</h6>
                          <div className="chart-area">
                              <canvas className = "chartCanvas" id="chLineMonthly" height="100" width="455"></canvas>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="weekly-tab">
                  <div className="card shadow moneycard mb-4">
                      <div className="card-body">
                          <h6 className = "font-weight-bold">Orders Recieved</h6>
                          <div className="chart-area">
                              <canvas className = "chartCanvas" id="chLineWeekly" height="100" width="455"></canvas>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
    
          </section>
    </div>
    <div className = "col-md-3 col-lg-3 mt-5">
       <div id = "orderscard" className = "card shadow-sm">
           <h5 className = "text-center mt-2">Monthly Orders</h5>
        <div className="card-body">
          <div className="chart-area">
            <canvas id="monthlyorders"  width="455"></canvas>
        </div>
        </div>
       </div> 
    </div>
    <div className = "col-md-3 col-lg-3" id = "revenue">
        <h4>Website</h4>
        <div className = "card">
           <h6 className = "text-center font-weight-bold mt-4">Total Amount of Money made in</h6>
           <select>
            <option id = "yr21">2021</option>
            <option id = "yr20">2020</option>
            <option id = "yr19">2020</option>
          </select>

          <p id = "yr21-earn" className = "text-center">ksh.50,000</p>
          <p id = "yr20-earn" className = "text-center">ksh.170,000</p>
          <p id = "yr19-earn" className = "text-center">ksh.200,000</p>
          <hr>
          </hr>
          
        </div>
    </div>
</div>



<div className = "row">
    <div className = "col-md-3" id = "revenue">
        <h4>Revenue</h4>
        <div className = "card">
           <h6 className = "text-center font-weight-bold mt-4">Total Amount of Money made in</h6>
           <select>
            <option id = "yr21">2021</option>
            <option id = "yr20">2020</option>
            <option id = "yr19">2020</option>
          </select>

          <p id = "yr21-earn" className = "text-center">ksh.50,000</p>
          <p id = "yr20-earn" className = "text-center">ksh.170,000</p>
          <p id = "yr19-earn" className = "text-center">ksh.200,000</p>
          <hr>
          </hr>
          
        </div>
    </div>
    
    <div className = "col-md-6 mt-4">
        <section>
          
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" id="lifetime-tab" data-toggle="tab" href="#daily" role="tab" aria-controls="home" aria-selected="false">Daily</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" id="monthly-tab" data-toggle="tab" href="#weekly" role="tab" aria-controls="profile" aria-selected="false">Weekly</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link active" id="weekly-tab" data-toggle="tab" href="#monthly" role="tab" aria-controls="contact" aria-selected="true">Monthly</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade active show" id="daily" role="tabpanel" aria-labelledby="lifetime-tab" >
                  <div className="card shadow moneycard mb-4">
                      <div className="card-body">
                        <h6 className = "font-weight-bold">Money Made</h6>
                          <div className="chart-area">
                           {/* linegraph */}
                           <Line options={options} data={data} />

                             







                            
                          </div>
                      </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="monthly-tab">
                  <div className="card shadow moneycard mb-4">
                      <div className="card-body">
                        <h6 className = "font-weight-bold">Money Made</h6>
                          <div className="chart-area">
                              <canvas className = "chartCanvas" id="chMoneyMonthly" height="100" width="455"></canvas>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="weekly-tab">
                  <div className="card shadow moneycard mb-4">
                      <div className="card-body">
                          <h6 className = "font-weight-bold">Money Made</h6>
                          <div className="chart-area">
                              <canvas className = "chartCanvas" id="chMoneyWeekly" height="100" width="455"></canvas>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
    
          </section>
    </div>
    <div className = "col-md-3">
        <h4>Technicians</h4>
        <div id = "techniciancard" className = "card shadow-sm">
            <h5 className = "text-center mt-2">Number of Technicians</h5>
         <div className="card-body">
           <div className="chart-area">
             <canvas id="numberoftechnicians" width="455"></canvas>
         </div>
         </div>
        </div>  
    </div>
</div>
</div>
</Container>


</div>


               
          
      );
}
export default AdminDashboard;