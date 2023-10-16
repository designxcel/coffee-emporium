import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser)

    const handleDelete = id =>{
        console.log(id)
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
              
            fetch(`https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/user/${id}`, {
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
                      const remaining = users.filter(user => user._id !== id)
                      setUsers(remaining)
                }
            })
            }
          })
    }
    return (
        <div>
            <h2>Users List: {loadedUser.length}</h2>
            <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Creation Time</th>
                                <th>Last Logged At</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            {
                                users.map(user => 
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.lastLoggedAt}</td>
                                        
                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                        </td>
                                    </tr>   
                                    
                                    )
                            }     
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default Users;