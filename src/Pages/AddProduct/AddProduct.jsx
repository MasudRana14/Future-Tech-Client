import swal from 'sweetalert';




const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const description = form.description.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const productAdd = { name, brand, description, price, category, rating, photo }

        // send data to server 
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(productAdd)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Product Added Successfully!", "success");
                }
            })
    }



    return (
        <div className=" ">


            

            <h1 className="text-3xl text-center mt-6 font-bold">Add <span className='text-pink-400'>Product</span></h1>
            <hr className='w-2/6 mx-auto' />

            <div className="lg:w-2/4 md:w-2/4 mx-auto mt-10 mb-10 bg-pink-100 p-10">

                <form onSubmit={handleAddProduct}>

                    {/* Form Row name and brand name */}

                    <div className="lg:flex md:flex  gap-6">
                        {/* Name Field  */}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Product Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>


                    {/* Form Row Price and Rating */}
                    <div className="lg:flex md:flex  gap-6">
                        {/* Name Field  */}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" placeholder="Product Price" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder=" Product Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>




                    </div>
                    {/* Form Row name and brand name */}
                    <div className="lg:flex md:flex  gap-6">
                        {/* Name Field  */}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Product Category" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="rating" placeholder="Product Rating" className="input input-bordered w-full" />
                            </label>
                        </div>



                    </div>

                   
                    <div className="">
                     

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder=" Product Short description" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="mt-5">
                        <input className="btn btn-block bg-green-500 hover:bg-blue-500" type="submit" value="Add Product" />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddProduct;


