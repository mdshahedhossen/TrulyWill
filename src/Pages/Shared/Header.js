import React from 'react';

const Header = () => {
    const manueItem=
    <>
    <li><a>Products</a></li>
    <li><a>Pricing</a></li>
    <li><a>Getting Started</a></li>
    <li><a>Blog</a></li>
    <li><a><button class="bg-[#3484F0] rounded-lg w-[150px] h-[54px] text-white font-bold uppercase">Get started</button></a></li>
    </>
    return (
        <div class="navbar bg-white shadow-xl mb-28 p-3">
  <div class="navbar-start px-20">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {manueItem}
      </ul>
    </div>
    <img src="https://uploads-ssl.webflow.com/61dff0c722a50041c81f4400/61e02526dda1bd88ca23cc58_Logo.svg" alt="" />
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {manueItem}
    </ul>
  </div>
</div>
    );
};

export default Header;