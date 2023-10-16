import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, chef, supplier, taste, category, details, photo, price}=coffee

    const handleUpdateCoffee = event => {
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
        const updatedCoffee = {name, chef, supplier, taste, category, details, photo, price}
        console.log(updatedCoffee)
        form.reset()
        fetch(`https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/coffee/${_id}`,{
            method : 'PUT',
            headers : {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                
            }
        })
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='mb-10'>
            <NavLink className="mr-8 bg-orange-950 text-white rounded-lg py-2 px-4" to="/">Back to Home</NavLink>
            <NavLink className="mr-8 bg-orange-950 text-white rounded-lg py-2 px-4" to="/signup">Login/SignUp</NavLink>
            </div>
            <h2 className='text-4xl font-bold text-center font-rancho'>Update Coffee : {name}</h2>
            <p></p>
            <form onSubmit={handleUpdateCoffee}>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name= "name" defaultValue={name} placeholder="Enter Coffee name" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef name" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="name" name= "supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste"  defaultValue={taste} placeholder="Enter Coffee Taste" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="name" name= "category" defaultValue={category} placeholder="Enter Coffee category" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name= "photo" defaultValue={photo} placeholder="Enter photo url" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name= "price" defaultValue={price} placeholder="Enter Coffee Price" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className='flex mt-10'>
                    <div className='w-full'>
                        <div className="form-control">
                        
                        <input type="submit" value="Update Coffee" className='btn btn-block bg-gray-900 text-white' />
                        </div>
                    </div>
                </div>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default UpdateCoffee;