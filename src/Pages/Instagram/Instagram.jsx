import React from 'react';
import cup1 from '../../assets/images/cups/Rectangle9.png'
import cup2 from '../../assets/images/cups/Rectangle10.png'
import cup3 from '../../assets/images/cups/Rectangle11.png'
import cup4 from '../../assets/images/cups/Rectangle12.png'
import cup5 from '../../assets/images/cups/Rectangle13.png'
import cup6 from '../../assets/images/cups/Rectangle14.png'
import cup7 from '../../assets/images/cups/Rectangle15.png'
import cup8 from '../../assets/images/cups/Rectangle16.png'

const Instagram = () => {
    return (
        <div className='max-w-7xl mx-auto py-14 text-center'>
            <h2>Follow Us Now</h2>
            <h2 className='font-rancho font-bold text-5xl mb-8'>Follow on Instagram</h2>
            <div className='grid grid-cols-4 gap-4'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </div>
    );
};

export default Instagram;