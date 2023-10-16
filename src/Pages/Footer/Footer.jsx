
import Swal from 'sweetalert2';
import footerBG from '../../assets/images/more/10.png'
import footerLogo from '../../assets/images/more/logo1.png'
const Footer = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log(name, email, message)
        const subscriber = {name, email, message}

        form.reset()
        fetch('https://coffee-emporium-server-side-5qqbiz5j6.vercel.app/subscriber',{
            method : 'POST',
            headers : {
                'content-type':'application/json'
            },
            body: JSON.stringify(subscriber)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Message sent Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className='flex flex-col-reverse md:flex-row justify-evenly items-center' style={{backgroundImage: `url(${footerBG})`}}>
            <div className='flex-1 p-10'>
                <img className='w-11' src={footerLogo} alt="" />
                <h2 className='text-4xl font-rancho font-semibold'>Espresso Emporium</h2>
                <p>
                Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                </p>
                <div>

                </div>
                <h2>Get in Touch</h2>
            </div>

            <div className='flex-1'>
                <h2 className='text-center text-4xl font-rancho font-bold mt-8'>Connect with us</h2>
                <form onSubmit={handleSubmit} className='space-y-4 p-10'>
                    <input className='w-full p-4 rounded-lg bg-gray-200' type="name" name='name' placeholder='Name' /> <br />
                    <input className='w-full p-4 rounded-lg bg-gray-200' type="email" name='email' placeholder='Email' /> <br />
                    <input className='w-full p-4 rounded-lg bg-gray-200 h-28' type="text" name='message' placeholder='Message' /> <br />
                    <input className='btn btn-block bg-orange-950 text-white' type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    );
};

export default Footer;