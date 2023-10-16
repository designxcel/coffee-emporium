import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form =event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const newCoffee = {name, chef, supplier, taste, category, details, photo, price}
        console.log(newCoffee)
        form.reset()
        fetch('https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/coffee',{
            method : 'POST',
            headers : {
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='max-w-6xl mx-auto'>
            
            <Navbar></Navbar>
            <h2 className='text-4xl font-bold font-rancho text-center mt-10 mb-5'>Add New Coffee</h2>
            <p></p>
            <form onSubmit={handleAddCoffee}>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name= "name" placeholder="Enter Coffee name" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef" placeholder="Enter coffee chef name" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="name" name= "supplier" placeholder="Enter coffee supplier" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="name" name= "category" placeholder="Enter Coffee category" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name= "photo" placeholder="Enter photo url" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name= "price" placeholder="Enter Coffee Price" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex mt-10'>
                    <div className='w-full'>
                        <div className="form-control">
                        
                        <input type="submit" value="Add Coffee" className='btn btn-block bg-gray-900 text-white' />
                        </div>
                    </div>
                </div>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;