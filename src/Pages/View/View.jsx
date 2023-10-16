import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import navBG from '../../assets/images/more/15.jpg'

const View = () => {
   const views = useLoaderData()
   const {_id, name, chef, supplier, taste, category, details, photo, price} = views;
    return (
        <div>
            <div className='h-32 flex justify-center items-center' style={{backgroundImage: `url(${navBG})`}}>
                <Link to="/">
                    <h2 className='font-rancho text-white text-4xl font-bold p-5 tracking-wide'>Espresso Emporium</h2>
                </Link>
            </div>
            <div className="card bg-base-100 mt-10">
            <figure><img src={photo} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="card-title">Chef: {chef}</h2>
                <h2 className="card-title">Supplier: {supplier}</h2>
                <h2 className="card-title">Taste: {taste}</h2>
                <p className="card-title">Details: {details}</p>
                <p className="card-title">Price: {price}</p>
                
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default View;