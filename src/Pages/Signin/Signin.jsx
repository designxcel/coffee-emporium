import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";


const Signin = () => {
    const { signInUser } = useContext(AuthContext)

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleSignIn = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        form.reset()
        signInUser(email, password)
        .then(result => {
            console.log(result.user)

            navigate(location?.state? location.state : "/")
            const user = {
                email,
                lastLoggedAt: result.user.metadata.lastSignInTime
                
            }
            fetch('https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/user', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto flex-col ">
                <div className="text-center">
                <h1 className="text-5xl font-bold mb-10">Sign in now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleSignIn} className="card-body">
                   
                    
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
                        <a href="#" className="label-text-alt link link-hover">Do not Have an account?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Signin</button>
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

export default Signin;