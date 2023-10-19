import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";


const Login = () => {

const {signIn} = useContext(AuthContext)
const [errorAlert, setErrorAlert] = useState()
const location = useLocation()
const changeNavigate = useNavigate('')


const handleLogin = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    
    signIn(email,password)
    .then(result =>{
        swal("Good job!", "Login Successfully", "success");
        changeNavigate(location?.state ? location.state : "/")
    })
    .catch(error =>{
        setErrorAlert(error.message)
    })
}




    return (
        <div>
            <h1>Login</h1>


            <div className="">

                <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-12">

                    <form onSubmit={handleLogin}  className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div>
                                {
                                    errorAlert && <h1 className="text-red-600 text-xl mb-2">{errorAlert}</h1>
                                }
                            </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                </div>
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>

                      <div className="w-full text-center bg-blue-600 text-white rounded-2xl p-2 font-medium hover:cursor-pointer hover:bg-lime-700">
                      <input type="submit" value="Login to your account" />
                      </div>

                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Login;