import React from 'react';
import './Nav.css';
import kartImg from '../images/kart_mini.jpeg';
import profileImg from '../images/profile.jpeg';
import exitImg from '../images/exit.jpeg';
import { useSelector } from 'react-redux';
import { kartState } from '../reducers/products/productSlice';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate = useNavigate();
    const kart = useSelector(kartState);
  return (
    <div className='nav'>
        <h1 className='logo' onClick={() => navigate('/')}>Shop</h1>
        <div className='icons'>
            <img 
              className='nav__icon' 
              src={kartImg} 
              alt='kart_image' 
              onClick={() => navigate('/kart')}
            />
            { kart.length !== 0 ? (
                <div className='kart-count'>{ kart.length }</div>
            ) : null}
            <img className='nav__icon' style={{ width: "30px", height: "30px" }} src={profileImg} alt='profile_image'/>
            <img className='nav__icon' src={exitImg} alt='exit_image'/>
        </div>
        
    </div>
  )
}

export default Nav;