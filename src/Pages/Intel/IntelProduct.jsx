import PropTypes from 'prop-types';

const IntelProduct = ({ intel }) => {

    const { photo, name, brand, category, price, rating, description } = intel;

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
                                <button className="btn btn-sm font-bold bg-cyan-400 hover:bg-green-400 ">Update</button>

                                <button className="btn btn-sm font-bold bg-pink-400 hover:bg-lime-600 ">Details</button>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

IntelProduct.propTypes = {
intel:PropTypes.object.isRequired
}

export default IntelProduct;