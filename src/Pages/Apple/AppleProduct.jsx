
const AppleProduct = ({ apple }) => {
    return (
        <div>
            <div className="mt-16 mb-12 ">

                <div className=" gap-5">

                    <div className="card w-80 h-[500px] bg-base-100 shadow-2xl mx-auto">
                        <figure><img src={apple.photo} alt="Shoes" /></figure>
                        <div className="p-4 ">
                            <h2 className="card-title font-bold">{apple.name}</h2>
                            <p className="mt-2 text-lg font-medium ">Brand: {apple.brand}</p>
                            <p className="mt-2 font-medium">Type: {apple.category}</p>
                            <p className="mt-2 font-medium">Price: ${apple.price}</p>
                            <p className="mt-2 font-medium">Reating: {apple.rating}</p>
                            <p className="mt-2 font-medium">{apple.description}</p>
                            <div className="card-actions mt-2">
                                <button className="btn btn-sm bg-cyan-400 hover:bg-pink-400 ">Update</button>

                                <button className="btn btn-sm bg-pink-400 hover:bg-cyan-400 ">Details</button>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default AppleProduct;