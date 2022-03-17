import logo from './logo.svg';
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

import './App.css';

function App() {
  return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Home />}></Route>
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
            <Route exact path="/" element={<Home />}></Route>
        </Routes>   
        </Router>
  );
}

export default App;
