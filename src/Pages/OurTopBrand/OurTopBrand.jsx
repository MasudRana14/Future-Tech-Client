import Marquee from "react-fast-marquee";

const OurTopBrand = () => {

    return (
        <div>


            <h1 className="text-center font-bold text-3xl mt-8">Our Top <span className="text-pink-400">Brand</span></h1>



            <div>
                <Marquee speed={25}>
                    <div className="flex gap-6 mt-10">

                        {/* Card 1  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/tYLHhx0/hpbrand.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                   HP
                                </p>
                              
                            </div>
                        </div>

                        {/* Card 2  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/bFPZM6x/applebrand.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    APPLE
                                </p>
                               
                            </div>
                        </div>

                        {/* Card 3  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/z44nJzL/microsoftbrand.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    MICROSOFT
                                </p>
                                
                            </div>
                        </div>

                        {/* Card 4  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/qyLHt9J/samsungbrand.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                   SAMSUNG
                                </p>

                               
                            </div>
                        </div>

                        {/* Card 5  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mr-5">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/VgVrNFS/gigabitebrand.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    GIGABYTE
                                </p>

                               
                            </div>
                        </div>

                    </div>
                </Marquee>
            </div>


        </div>
    );
};

export default OurTopBrand;