import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export const Layout = () => (
  <div>
    <h1 className='text-3xl font-black'>Application Header</h1>
    <div className='my-2'>
      <Link className='text-blue-600 underline' to='/'>Home</Link> | <Link className='text-blue-600 underline' to='/about'>About</Link>
    </div>
    <Outlet />
  </div>
);
