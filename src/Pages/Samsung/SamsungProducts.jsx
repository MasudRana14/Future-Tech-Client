import PropTypes from 'prop-types'; 

const SamsungProducts = ({samsung}) => {

    const { photo, name, brand, category, price, rating, description } = samsung;

    return (

        <div>


            <div className=" ">

                <div className=" gap-5">

                    <div className="card w-80 h-[500px] bg-base-100 shadow-2xl mx-auto">
                        <figure><img src={photo} alt="Shoes" /></figure>
                        <div className="p-4 ">
                            <h2 className="card-title font-bold">{name}</h2>
                            <p className="mt-2 text-lg font-medium ">Brand: {brand}</p>
                            <p className="mt-2 font-medium">Type: {category}</p>
                            <p className="mt-2 font-medium">Price: ${price}</p>
                            <p className="mt-2 font-medium">Reating: {rating}</p>
                            <p className="mt-2 font-medium">{description}</p>
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

SamsungProducts.propTypes = {
samsung:PropTypes.object.isRequired
}


export default SamsungProducts;