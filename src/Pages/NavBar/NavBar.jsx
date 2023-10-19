import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () =>{
       
        logOut(
            swal("Good job!", "SignOut Successfully", "success")
        )
        .then()
        .catch()
    }

    const navList = <>

        {/* Home  */}
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-400 underline" : ""
            }
        >
           <p className="font-bold"> Home</p>
        </NavLink>

        {/* Add Product  */}

        <NavLink
            to="/product"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-400 underline" : ""
            }
        >
            <p className="font-bold"> Add Product</p>
        </NavLink>

        {/* My Cart */}

        <NavLink
            to="/mycart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-400 underline" : ""
            }
        >
           <p className="font-bold">My Cart</p>
        </NavLink>

        {
                user ? "" :  <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-pink-400 underline" : ""
                }
            >
                <p className="font-bold">Register</p>
            </NavLink>
    
            }



    </>


    return (
        <div>
            <div className="navbar  shadow-md rounded-lg mt-5 px-6 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <div className=" flex items-center gap-3">
                        <img className="w-10" src="https://i.ibb.co/NC4GZv2/future.png" alt="" />
                        <h1 className="text-2xl font-bold text-cyan-500 ">Future <span className="text-pink-500">Tech</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {navList}
                    </ul>
                </div>
                {
                    user ?  <div onClick={handleSignOut} className="navbar-end ">
                    <Link className="font-bold text-white px-2 py-1 rounded-lg hover:bg-cyan-500 bg-pink-500">SignOut</Link>
                </div>
                        :
                        <div className="navbar-end">
                            <Link className="font-bold text-white px-2 py-1 rounded-lg hover:bg-cyan-500 bg-pink-500" to="/login">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default NavBar;