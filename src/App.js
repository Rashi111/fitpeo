import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import SideBar from './Component/Sidebar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="main_wrapper">
      <div className='wrap_sidebar'><SideBar /></div>
      <div className='wrap_dashboard'><Dashboard /></div>
    </div>
  );
}

export default App;
