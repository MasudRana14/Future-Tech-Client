

import { FaMicroblog, FaLocationArrow, FaPhone, } from 'react-icons/fa';


const Contact = () => {


    return (

        <div className="max-w-7xl mx-auto">

            <h1 className="text-3xl font-bold text-center mt-9">Contact <span className="text-pink-400">US</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10 mb-10">

                <div className="mx-auto border-2 p-5 bg-green-200">
                    <span><FaLocationArrow></FaLocationArrow></span>
                    <h1 className='text-2xl font-bold'>Shop Address</h1>
                    <p className='text-lg font-medium'>Airport Road,<br /> Jashore Sador,<br /> Bangladesh</p>
                </div>

                <div className="mx-auto border-2 p-5 bg-pink-200">
                    <span><FaPhone></FaPhone></span>
                    <h1 className='text-2xl font-bold'>Phone</h1>
                    <p className='text-lg font-medium'>+880 173 746 83 23</p>
                    <p className='text-lg font-medium'>+880 195 000 34 67</p>
                    <p className='text-lg font-medium'>+880 150 244 67 72</p>
                    
                </div>

                <div className="mx-auto border-2 p-5 bg-cyan-200">
                    <span><FaMicroblog></FaMicroblog></span>
                    <h1 className='text-2xl font-bold'>E-Mail</h1>
                    <p className='text-lg font-medium'>feautureteach@gmail.com</p>
                    <p className='text-lg font-medium'>shopteach@yahoo.com</p>
                    <p className='text-lg font-medium'>phero@gmail.com</p>
                   
                </div>

            </div>

        </div>
    );
};

export default Contact;