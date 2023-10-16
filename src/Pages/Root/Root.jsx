import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='py-5'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;