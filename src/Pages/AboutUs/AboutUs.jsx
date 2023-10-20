

const AboutUs = () => {
    return (
        <div>
            <div className="mt-2">

                <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/4sckQ2W/istockphoto.webp)' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content  text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">About Our Future Tech</h1>
                            <p className="mb-5 text-xl font-medium">your gateway to the forefront of innovation and the future of technology. <br />Step into a world where imagination meets reality, where the boundaries <br />of whats possible are constantly pushed.</p>

                        </div>
                    </div>
                </div>

            </div>

            <h1 className="text-center font-bold text-3xl mt-8">ABOUT <span className="text-pink-400">US</span></h1>


            <div>



                <div className="lg:flex mx-auto w-10/12 gap-10 justify-around mt-10">

                    <div>
                        <img className="w-96" src="https://i.ibb.co/m6SRMfF/about1-1-1024x1024.webp" alt="" />
                    </div>

                    <div className="w-80">
                        <p className="text-xl">Build Your Business With</p>
                        <h2 className="text-2xl">THE POWER OF ECOMMERCE AT YOUR FINGERS!</h2>
                        <p>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.magna.</p>
                        <button className="text-pink-400 font-bold">Read More</button>
                    </div>

                </div>

            </div>



            {/* AND YOU THOUGHT WE SELL ONLY ELECTRONICS? */}


            <div>

                <h1 className="text-center text-3xl mt-16">MEET OUR PROFESSIONALS</h1>
                <p className="text-center">Includes ecom Business as well as Retail Professionals</p>

            </div>


            <div className="mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">


                <div
                    className=" max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto">

                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src="https://i.ibb.co/Njz9tdL/team4.webp"
                            alt="" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl text-neutral-600 dark:text-neutral-200">
                        Krista Singleton
                        </h2>
                        <p className="text-neutral-600">RETAILING MANAGER</p>
                    </div>
                    
                </div>

                <div
                    className=" max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto">

                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src="https://i.ibb.co/CB2H8GR/team5.webp"
                            alt="" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl text-neutral-600 dark:text-neutral-200">
                        Noel Hale
                        </h2>
                        <p className="text-neutral-600">SUPERVISOR, OPERATIONS</p>
                    </div>
                    
                </div>

                <div
                    className=" max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto">

                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src="https://i.ibb.co/qYtbRsP/team6.webp"
                            alt="" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl text-neutral-600 dark:text-neutral-200">
                        Angela Clark
                        </h2>
                        <p className="text-neutral-600">CUSTOMER CARE</p>
                    </div>
                    
                </div>


            </div>



        </div>
    );
};

export default AboutUs;