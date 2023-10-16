import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Instagram from '../Instagram/Instagram';
import Footer from '../Footer/Footer';
import CoffeeCollection from '../../CoffeeCollection/CoffeeCollection';

import { useLoaderData } from 'react-router-dom';
import menuBG from '../../assets/images/more/1.png'
import MainBody from '../MainBody/MainBody';
import View from '../View/View';

const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div>
            <Navbar></Navbar>
            <MainBody></MainBody>

            <div style={{backgroundImage: `url(${menuBG})`}}>
            <div className='max-w-6xl mx-auto mt-14'>
                <h2 className='text-4xl font-bold font-rancho text-center mb-10'>Popular Coffee</h2>
                
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        coffees?.map(coffee => 
                        <CoffeeCollection 
                        key={coffee._id} 
                        coffee={coffee}
                        coffees={coffees} 
                        setCoffees={setCoffees}
                        ></CoffeeCollection>)
                    }

                   
                </div>
                
                
            </div>
            </div>

            <Instagram></Instagram>
            <Footer></Footer>
        </div>
    );
};

export default Home;