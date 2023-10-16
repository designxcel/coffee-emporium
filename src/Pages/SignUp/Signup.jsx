import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";


const Signup = () => {
    const {createUser} = useContext(AuthContext) 
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        if(password.length < 6){
            // swal("warning!", "Password should be at least 6 characters", "error");
            Swal.fire({
                title: 'Warning!',
                text: 'Password should be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }
        else if(!/[A-Z]/.test(password)){
            // swal("Oops!", "Password should have at least one uppercase letter", "error")
            Swal.fire({
                title: 'Warning!',
                text: 'Password should have at least one uppercase letter',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }
        else if(!/[!@#$%^&*()]/.test(password)){
            // swal("Oops!", "Password should have at least one special character", "error")
            Swal.fire({
                title: 'Warning!',
                text: 'Password should have at least one special character',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }

        form.reset()
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            const createdAt = result.user?.metadata?.creationTime;
            const user = {email, password, name, photo, createdAt}
            fetch('https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Account Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                <h1 className="text-5xl font-bold mt-10">Sign Up now!</h1>
                </div>
                <div className=" w-full shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Already have an account?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">SignUp</button>
                    </div>
                </form>
                </div>
                <div className='mt-10 text-center'>
                    <NavLink className="mr-8 bg-orange-950 text-white rounded-lg py-2 px-4" to="/">Back to Home</NavLink>
            
            </div>
            </div>
        </div>
    );
};

export default Signup;