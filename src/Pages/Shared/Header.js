import { signOut } from 'firebase/auth';
import React from 'react';
import  sLink from 'react-scroll'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';



const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
};

    const manueItem=
    <>
    <li><Link to='/'>Home</Link></li>
    {/* <li><Link activeclassName="active" to="/queston" spy={true} smooth={true} offset={50} duration={500}>Question</Link></li> */}
    <li><a href='#question'>Products</a></li>
    <li><a>Pricing</a></li>
    <li><a>Getting Started</a></li>
    <li><a>Blog</a></li>
    {
      user? <li><button className="btn btn-outline btn-success text-white font-bold uppercase" onClick={logout}>Logout</button></li>
      :
      <li><Link to='/login' className="bg-[#3484F0] rounded-lg w-[150px] h-[54px] text-white font-bold uppercase">Get started</Link></li>
    }
    </>
    return (
        <div className="navbar bg-white shadow-xl mb-28 p-3">
  <div className="navbar-start px-20">
    <div className="dropdown">
      <label  tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"   strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul  tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {manueItem}
      </ul>
    </div>
    <img src="https://uploads-ssl.webflow.com/61dff0c722a50041c81f4400/61e02526dda1bd88ca23cc58_Logo.svg" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {manueItem}
    </ul>
  </div>
</div>
    );
};

export default Header;