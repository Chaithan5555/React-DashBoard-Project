import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person'
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
          <Link to = "/">
          <span className="logo">CHAITHAN'S PROJECT</span>
          </Link>
          </div>
          <hr />
        <div className="center">
            <ul>
              <p className="title">MAIN</p>
                <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <Link to="/users"> 
                <li><PersonIcon className='icon'/><span>Users</span></li>
                 </Link>
                <Link to="/products">
                <li><StoreIcon className='icon'/><span>Products</span></li>
                </Link>
                <li><CreditCardIcon className='icon'/><span>Orders</span></li>
                <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><AssessmentIcon className='icon'/><span>Stats</span></li>
                <li><NotificationsNoneIcon className='icon'/><span>Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><SettingsSystemDaydreamOutlinedIcon className='icon'/><span>System health</span></li>
                <li><PsychologyOutlinedIcon className='icon'/><span>Logs</span></li>
                <li><SettingsApplicationsIcon className='icon'/><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountCircleOutlinedIcon className='icon'/><span>Profile</span></li>
                <li><ExitToAppIcon className='icon'/><span>Logout</span></li>
                
            </ul>
        </div>
         <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          </div>   
    </div>
  )
}

export default Sidebar