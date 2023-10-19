import { Link } from "react-router-dom";



const Home = () => {



    return (

        <div className="max-w-7xl mx-auto">


            <div className="mt-2">

                <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/tbq5P01/banner-cover.webp)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content  text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to Future Tech</h1>
                            <p className="mb-5 text-lg font-medium">your gateway to the forefront of innovation and the future of technology. <br />Step into a world where imagination meets reality, where the boundaries <br />of whats possible are constantly pushed.</p>

                        </div>
                    </div>
                </div>

            </div>

            <div className="mb-12 mt-12">

                <h1 className="text-3xl font-bold text-center mb-8 text-pink-500">Our Trusted  <span className="text-cyan-500">Brand</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {/* Card 1  */}
                    <Link to="/sony">

                    <div className="card w-96  bg-gray-300 shadow-xl">
                        <figure className="p-2">
                            <img src="https://i.ibb.co/X8gGnZV/Sony.webp" alt="Shoes" className="rounded-xl" />
                        </figure>

                        <div>
                            <h1 className="text-center text-2xl p-2 mb-2 font-bold">Sony</h1>
                        </div>

                    </div>



                    </Link>
                    {/* Card 2  */}
                    <Link to="/apple">
                    
                    
                    <div className="card w-96  bg-gray-300 shadow-xl">
                        <figure className="p-2">
                            <img src="https://i.ibb.co/qjqC8Pk/Apple.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>

                        <div>
                            <h1 className="text-center text-2xl p-2 mb-2 font-bold">Apple</h1>
                        </div>

                    </div>
                    
                    
                    
                    </Link>
                    {/* Card 3 */}
                    <div className="card w-96  bg-gray-300 shadow-xl">
                        <figure className="p-2">
                            <img src="https://i.ibb.co/6XSXYYL/Samsung.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>

                        <div>
                            <h1 className="text-center text-2xl p-2 mb-2 font-bold">Samsung</h1>
                        </div>

                    </div>
                    {/* Card 4 */}
                    <div className="card w-96  bg-gray-300 shadow-xl">
                        <figure className="p-2">
                            <img src="https://i.ibb.co/BG43y7B/Google.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>

                        <div>
                            <h1 className="text-center text-2xl p-2 mb-2 font-bold">Google</h1>
                        </div>

                    </div>
                    {/* Card 5 */}
                    <div className="card w-96  bg-gray-300 shadow-xl">
                        <figure className="p-2">
                            <img src="https://i.ibb.co/7v9Fhrh/Intel.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>

                        <div>
                            <h1 className="text-center text-2xl p-2 mb-2 font-bold">Intel</h1>
                        </div>

                    </div>
                    {/* Card 6 */}
                    <div className="card w-96  bg-gray-300 shadow-xl">
                        <figure className="p-2">
                            <img src="https://i.ibb.co/X8gGnZV/Sony.webp" alt="Shoes" className="rounded-xl" />
                        </figure>

                        <div>
                            <h1 className="text-center text-2xl p-2 mb-2 font-bold">Sony</h1>
                        </div>

                    </div>

                </div>
            </div>

            {/* FEATURED Brand Sections */}

            <section className="mt-20 ">
                <h1 className="text-3xl font-bold text-center text-cyan-500">Our Featured <span className="text-pink-500">Brands</span></h1>

                <div className="mt-16 mb-12 ">

                    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        <div className="card w-72 bg-base-100 shadow-2xl mx-auto">
                            <figure><img src="https://i.ibb.co/6sT5z7J/Microsoft.webp" alt="Shoes" /></figure>
                            <div className="p-4 ">
                                <h2 className="card-title">Microsoft</h2>
                                <p className="mt-2"> Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975.</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-sm bg-cyan-400 hover:bg-pink-400 ">Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-2xl mx-auto">
                            <figure><img src="https://i.ibb.co/cXBW3gv/HP.webp" alt="Shoes" /></figure>
                            <div className="p-4 ">
                                <h2 className="card-title">HP</h2>
                                <p className="mt-2"> The Hewlett-Packard Company, commonly shortened to Hewlett-Packard or HP,....</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-sm bg-cyan-400 hover:bg-pink-400 ">Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-2xl mx-auto">
                            <figure><img src="https://i.ibb.co/9YLKrq8/Gigabyte.webp" alt="Shoes" /></figure>
                            <div className="p-4 ">
                                <h2 className="card-title">Gigabyte</h2>
                                <p className="mt-2">A gigabyte is equivalent to the following standard measurements....</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-sm bg-cyan-400 hover:bg-pink-400 ">Details</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* Why People Love Us Sections  */}

            <section className="mb-12">

                <h1 className="text-3xl font-bold text-center text-pink-500">Why People <span className="text-cyan-500">Love Us</span></h1>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-52 rounded-xl bg-clip-border mx-auto">
                        <div className="p-6">
                            <img src="https://i.ibb.co/fX3B0s5/fb3.jpg" alt="" />

                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Safe 256Bit
                                Encription
                            </p>
                        </div>

                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-52 rounded-xl bg-clip-border mx-auto">
                        <div className="p-6">
                            <img src="https://i.ibb.co/nmsztWN/fb2.jpg" alt="" />

                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                International
                                Shipping
                            </p>
                        </div>

                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-52 rounded-xl bg-clip-border mx-auto">
                        <div className="p-6">
                            <img src="https://i.ibb.co/DtVLjHT/fb1.jpg" alt="" />

                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Factory Sealed
                                Package
                            </p>
                        </div>

                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-52 rounded-xl bg-clip-border mx-auto">
                        <div className="p-6">
                            <img src="https://i.ibb.co/4pczPb1/fb5.jpg" alt="" />

                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Fast & Safe
                                Delivery
                            </p>
                        </div>

                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 shadow-md w-52 rounded-xl bg-clip-border  mx-auto">
                        <div className="p-6">
                            <img src="https://i.ibb.co/br8W6sK/fb4.jpg" alt="" />

                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                24 Hours
                                Services
                            </p>
                        </div>

                    </div>


                </div>

            </section>


        </div>
    );
};

export default Home;