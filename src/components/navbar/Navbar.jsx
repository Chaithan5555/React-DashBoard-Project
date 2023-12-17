import React from 'react'
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className="search">
                <input type="text"  placeholder="search...."/>
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item"><LanguageIcon className='icon'/>English</div>
                <div className="item"><DarkModeOutlinedIcon className='icon'/></div>
                <div className="item"><FullscreenExitRoundedIcon  className='icon'/></div>
                <div className="item"><NotificationsActiveOutlinedIcon  className='icon'/></div>
                <div className="item"><ChatBubbleOutlineOutlinedIcon  className='icon'/></div>
                <div className="item"><MenuOutlinedIcon  className='icon'/></div>
                <div className="item"><SettingsOutlinedIcon  className='icon'/></div>
            </div>
            </div>
            </div>
  )
}

export default Navbar
