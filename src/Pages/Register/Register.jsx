import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";


const Register = () => {

const { createUser} = useContext(AuthContext)
const [errorRegister, setErrorRegister] = useState('')

const navigate = useNavigate();


const handleRegister = e=>{
    e.preventDefault();
    setErrorRegister('')
   const form = new FormData(e.currentTarget);
   const name = form.get('name');
   const email = form.get('email');
   const photo = form.get('photo');
   const password = form.get('password');
  
    
    
   if(password.length )

   // User Register 
   createUser(email, password)
       .then(result => {
           console.log(result.user)
           swal("Good job!", "Register Successfully", "success");
          
       })
       navigate("/")
       .catch(error => {
          setErrorRegister(error.message)
         
       })


}


    return (
        <div className="">
          


            <div className="">

                <div className="w-96 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 mt-8 mb-10">

                    <form onSubmit={handleRegister} className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register Now</h5>
                        <div>
                                {
                                    errorRegister && <h1 className="text-red-600 text-center mb-2">{errorRegister}</h1>
                                }
                            </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email"  placeholder="Your Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                            <input type="text" name="photo"  placeholder="Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password"  placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                    

                        <div className="w-full text-center bg-blue-600 text-white rounded-2xl p-2 font-medium hover:cursor-pointer hover:bg-lime-700">
                      <input type="submit" value="Register" />
                      </div>

                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                           Already Have Account Please? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                        </div>
                    </form>
                </div>

            </div>




        </div>
    );
};

export default Register;