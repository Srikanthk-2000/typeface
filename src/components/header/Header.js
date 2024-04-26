import React from 'react';
import homeicon from '../../assets/logo/homeicon.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate =useNavigate();
  const handleSubmit = ()=>{
    navigate("/register")

  }
  return (
    <React.Fragment>
    <div className='flex flex-row justify-between mt-5'>
      <div className='pl-24  flex'>
        <img
          className='md:h-10 md:w-30 h-5 w-12 text-center'
          src={homeicon}
          alt="Logo"
        />
        <div className='text-red-500 font-bold pl-3 pt-1'>
          <h1>TypeGenie AI</h1>
        </div>
      </div>

      <div className=' pl-40 pr-10'>
        <ul className='flex justify-center '>
          <div className='pr-8 hover:text-red-500'>
          <li>
            <NavLink to="/imagestudio">Product</NavLink>
          </li>
          </div>
          <div  className='pr-8 hover:text-red-500'>
          <li>
            <NavLink to="/platform">platform</NavLink>
          </li>
          </div>
          <div  className='pr-8 hover:text-red-500'>
          <li>
            <Link to="/companypage">Company</Link>
          </li>
          </div>
          <div  className='pr-8 hover:text-red-500'>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          </div>
          <div  className='pr-8 hover:text-red-500'>
          <li>
            <Link to="/login">Login</Link>
          </li>
          </div>
        </ul>
      </div>

      <div className='pr-10'>
        <button className="rounded-none border border-black-600 p-3 bg-black hover:bg-red-500 text-white "  onClick={handleSubmit}>
         
          Join Waitlist
        </button>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Header;
