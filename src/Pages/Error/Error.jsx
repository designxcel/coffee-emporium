
import error from '../../assets/images/404/404.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>

            {/* <h2>Error</h2> */}
            <img className='md:h-full md:absolute' src={error} alt="" />
            <div className='md:relative top-40 left-40'>
                <Link to="/">
                    <h2 className='bg-cyan-500 px-4 py-2 font-bold rounded-full'>GO HOME</h2>
                </Link>
                
            </div>
        </div>
    );
};

export default Error;