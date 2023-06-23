import React from 'react';
import './Header.css';

function Header(props:any) {
    return (
       <div className='home-container'>
         <div className='home-elements-container'>
            <div className='logo'>
            <img src="/img/headerLogin.svg" alt="" className='header-login-img'/>
            </div>
            <div className='user-details'>
                <div>
                    <img src="/img/triangular.svg" alt="" />
                </div>
                <div>
                    <p>aharon reiss</p>
                </div>
                <div>
                    <img src="/img/userImg.svg" alt="" />
                </div>
            </div>
          </div>
       </div>
    )
}
export default Header;