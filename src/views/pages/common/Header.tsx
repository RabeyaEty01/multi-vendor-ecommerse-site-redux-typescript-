import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/Logo.png"
const Header = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex items-center justify-between">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex items-center'>
                    <Link to="/" className='mr-10 text-gray-800'>
                        Home
                    </Link>
                    <Link to="/cart" className='mr-10 text-gray-800'>
                        Cart
                    </Link>
                    <Link to="/login" className='mr-10 text-gray-800'>
                      Login
                    </Link>
                    <input type="text" className=' bg-gray-100 p-3 w-full ' />
                    <button className='bg-blue-900 p-1 text-white'>search</button>
                </div>
               
            </div>

        </div>
    );
};

export default Header;