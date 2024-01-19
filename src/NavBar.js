import react from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from './images/logo.png'

function NavBar({clickHandler}){
    return(
        <>
        <div className='navBar-container'>
        <div className='navBar'>
                <div className='logo'>
                    <img src={logo} alt={'kada'}></img>
                    <h2>KADA</h2>
                </div>
                <div className='nav-btn-container'>               
                <ul>
                        <li><a href="#getStarted">Home</a></li>
                        <li><a href="#aboutUs">About Us</a></li>
                        <li><a href="">Pages</a></li>
                    
                    </ul>
                    
                   
                </div>
                <div className='login-signup'>
                    <button className='btn  login' onClick={clickHandler}>Login</button>
                    <button className='btn sign-up' onClick={clickHandler}>Sign up</button>
                    </div>
                    
                </div>
        </div>
            
            
    </>
    ) 
}

export default NavBar