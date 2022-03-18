
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';
import BookService from './Pages/BookService/BookService';
import Feedback from './Pages/Feedback/Feedback';
import Policy from './Pages/Policy/Policy';
import History from './Pages/History/History';
import Order from './Pages/Order/Order';
import ScheduledOrder from './Pages/Order/scheduledOrder';
import HistoryError from './Pages/History/historyError';
import Homepage from './Pages/Homepage/Homepage';


import TechHome from './Technician/TechHome/TechHome';
import TechLogin from './Technician/TechLogin/TechLogin';
import TechRegister from './Technician/TechRegister/TechRegister';
import TechProfile from './Technician/TechProfile/TechProfile';
import TechAbout from './Technician/TechAbout/TechAbout';
import Jobdashboard from './Technician/Jobdashboard/Jobdashboard';
import Notifications from './Technician/Notifications/Notifications';
import TechPolicy from './Technician/TechPolicy/TechPolicy';
import Wallet from './Technician/Wallet/Wallet';
import TechForgot from './Technician/TechLogin/TechForgot';
import Newjobs from './Technician/Jobdashboard/Newjobs';
import Scheduled from './Technician/Jobdashboard/Scheduled';
import Jobhistory from './Technician/Jobdashboard/Jobhistory';


import './App.css';

function App() {
  return (
      <Router>
         <Routes>
            <Route exact path="/" element={< Homepage />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/bookservice" element={<BookService />}></Route>
            <Route exact path="/feedback" element={<Feedback />}></Route>
            <Route exact path="/history" element={<History />}></Route>
            <Route exact path="/order" element={<Order />}></Route>
            <Route exact path="/scheduledorder" element={<ScheduledOrder />}></Route>
            <Route exact path="/historyerror" element={<HistoryError />}></Route>
            <Route exact path="/policy" element={<Policy />}></Route>
            <Route exact path="/home" element={<Home />}></Route>


           
            <Route exact path="/techlogin" element={<TechLogin />}></Route>
            <Route exact path="/techregister" element={<TechRegister />}></Route>
            <Route exact path="/techprofile" element={<TechProfile />}></Route>
            <Route exact path="/techabout" element={<TechAbout />}></Route>
            <Route exact path="/jobdashboard" element={<Jobdashboard />}></Route>
            <Route exact path="/notifications" element={<Notifications />}></Route>
            <Route exact path="/techpolicy" element={<TechPolicy />}></Route>
            <Route exact path="/wallet" element={<Wallet />}></Route>
            <Route exact path="/techhome" element={<TechHome />}></Route>
            <Route exact path="/techforgot" element={<TechForgot />}></Route>
            <Route exact path="/newjobs" element={<Newjobs />}></Route>
            <Route exact path="/scheduled" element={<Scheduled />}></Route>
            <Route exact path="/jobhistory" element={<Jobhistory />}></Route>
            
        </Routes>   
        </Router>
  );
}

export default App;
