import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import DuckDuckStorage from '../../utils/DuckDuckStorage';

function Header(props:any) {
    const [isLogOutActionOpen,setisLogOutActionOpen] = useState(false);
    const navigate = useNavigate();
    const setisLogOutActionOpenFunc = () => {
        setisLogOutActionOpen(!isLogOutActionOpen)
     }
     const logOut = () => {
        DuckDuckStorage.deleteUser();
        navigate('/login')
        
     }
    return (
       <div className='home-container'>
         <div className='home-elements-container'>
            <div className='logo'>
            <img src={`${process.env.PUBLIC_URL}/img/headerLogin.svg`} alt="" className='header-login-img'/>
            </div>
            <div className='user-details'>
                <div className='arrow-container'>
                <div onClick={setisLogOutActionOpenFunc}>
                    <img src={`${process.env.PUBLIC_URL}/img/arrow-down.svg`} alt="" />
                </div>
                {isLogOutActionOpen && <div className='logOutAction-container' onClick={logOut}>
                    התנתקות
                </div>}
                </div>
                <div>
                    <p>aharon reiss</p>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/userImg.svg`} alt="" />
                </div>
            </div>
          </div>
       </div>
    )
}
export default Header;