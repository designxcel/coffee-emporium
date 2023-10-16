import React, { useContext } from 'react';
import navBG from '../../assets/images/more/15.jpg'


import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then(result => {
            Swal.fire({
                title: 'Success!',
                text: 'logged out Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch()
    }
    return (
        <div>
            <div className='h-auto flex flex-col md:flex-row justify-around items-center gap-10 py-4' style={{backgroundImage: `url(${navBG})`}}>
                <Link to="/">
                    <h2 className='font-rancho text-white text-center text-4xl font-bold p-5 tracking-wide'>Espresso Emporium</h2>
                </Link>
               
                <div className='text-white text-center'>
                    <NavLink className="mr-8 bg-white text-black rounded-lg py-2 px-4" to="/addcoffee">AddCoffee</NavLink>
                    
                    <NavLink className="mr-8 bg-white text-black rounded-lg py-2 px-4" to="/signup">Signup</NavLink>
                    <NavLink className="mr-8 bg-white text-black rounded-lg py-2 px-4" to="/signin">Login</NavLink>
                </div>

                {/* <Link to="/signin">
                         <button className='btn'>Signin</button>
                        </Link> */}

                <div>
                    {
                        user ?
                         <button onClick={handleSignOut} className='btn'>Signout</button>
                        :
                        <Link to="/signin">
                         <button className='btn'>Signin</button>
                        </Link>
                    }
                </div>
                
                    
                
            </div>
            
        </div>
    );
};

export default Navbar;