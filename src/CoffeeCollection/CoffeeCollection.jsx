
import { FaEye } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCollection = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, supplier, taste, category, details, photo, price}=coffee
    
    const handleView = _id =>{
        fetch(`https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/coffee/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCoffees(data)
            })
    }

    const handleDelete = _id =>{
        // console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/coffee/${_id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                      )
                      const remaining = coffees.filter(cof => cof._id !== _id)
                      setCoffees(remaining)
                    //   console.log(remaining)
                }
            })
            }
          })
    }
    return (
        
        <div className="bg-gray-200 rounded-xl">
            <div className="flex items-center gap-8">
                <div>
                    <img className="rounded-l-xl" src={photo} alt="" />
                </div>

                <div className="flex items-center">
                    <div className="w-72">
                        <h2>Coffee Name: <span className="font-bold text-xl">{name}</span> </h2>
                        <p>Chef: {chef}</p>
                        <p>Price:  <span className="font-bold text-lg">{price}</span></p>
                    </div>
                    <div className="grid w-1/4 space-y-2">
                       
                        <Link to={`view/${_id}`}>
                            <p onClick={() => handleView(_id)} className='bg-green-800 text-white flex justify-center rounded-lg py-2'><FaEye></FaEye></p>
                        </Link>

                         <Link to={`updatecoffee/${_id}`}>
                             <p className='bg-blue-800 text-white flex justify-center rounded-lg py-2'><FaEdit></FaEdit></p>
                        </Link>

                        <Link>
                            <p className='bg-red-600 text-white flex justify-center rounded-lg py-2' onClick={() => handleDelete(_id)}><FaTrashAlt></FaTrashAlt></p>
                        </Link>
                        
                       
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CoffeeCollection;