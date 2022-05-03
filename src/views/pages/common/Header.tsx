import React from 'react';
import logo from "../../../assets/images/Logo.png"
const Header = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex items-center justify-between">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex'>
                    <input type="text" className=' bg-gray-100 p-3 w-full ' />
                    <button className='bg-blue-900 p-1 text-white'>search</button>
                </div>
            </div>

        </div>
    );
};

export default Header;