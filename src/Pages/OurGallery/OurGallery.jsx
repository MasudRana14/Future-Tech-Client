

const OurGallery = () => {
    return (
        <div>

            <h1 className="text-center font-bold text-3xl mt-8">Brand<span className="text-pink-400"> Gallery</span></h1>



            <div>

                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/bFPZM6x/applebrand.jpg" />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/tYLHhx0/hpbrand.jpg" />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/VgVrNFS/gigabitebrand.jpg" />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/z44nJzL/microsoftbrand.jpg" />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/CQvr3RW/intelbrand.jpg" />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/qyLHt9J/samsungbrand.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurGallery;