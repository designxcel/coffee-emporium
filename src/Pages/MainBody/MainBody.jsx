import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'
import headerBG from '../../assets/images/more/3.png'

const MainBody = () => {
    return (
        <div>
            <div className='h-[800px] flex md:flex-row justify-around' style={{backgroundImage: `url(${headerBG})`}}>
                <div>

                </div>
                <div className=' text-white flex flex-col-reverse md:flex-row justify-center items-center'>
                    <div className='text-center'>
                        <h2 className='font-rancho text-5xl font-semibold'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='mt-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your <br />  companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <h2 className='bg-orange-400 p-4 md:w-1/4 text-center rounded-lg text-black mt-10'>Learn More</h2>
                        
                    </div>
                </div>
            </div>

            <div className='py-14 h-auto bg-[#ECEAE3] flex flex-col md:flex-row justify-evenly items-center text-[#331A15]'>
                <div className='space-y-2'>
                    <img src={icon1} alt="" />
                    <h2 className='text-4xl font-rancho'>Awesome Aroma</h2>
                    <p>You will definitely be a fan of <br /> the design & aroma of your coffee</p>
                </div>

                <div className='space-y-2'>
                    <img src={icon2} alt="" />
                    <h2 className='text-4xl font-rancho'>High Quality</h2>
                    <p>We served the coffee to you <br /> maintaining the best quality</p>
                </div>

                <div className='space-y-2'>
                    <img src={icon3} alt="" />
                    <h2 className='text-4xl font-rancho'>Pure Grades</h2>
                    <p>The coffee is made of the green <br /> coffee beans which you will love</p>
                </div>

                <div className='space-y-2'>
                    <img src={icon4} alt="" />
                    <h2 className='text-4xl font-rancho'>Proper Roasting</h2>
                    <p>Your coffee is brewed by first <br /> roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default MainBody;