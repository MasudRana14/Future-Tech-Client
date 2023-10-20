import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-pink-100 text-base-content">
                <aside>
                <div className=" text-center">
                        <img className="w-14" src="https://i.ibb.co/NC4GZv2/future.png" alt="" />
                       
                    </div>
                    <h1 className="text-2xl font-bold text-cyan-500 ">Future <span className="text-pink-500">Tech</span></h1>
                </aside>
                <nav>
                    <header className="footer-title font-bold">Menu</header>
                    <a className="link link-hover font-bold">Branding</a>
                    <a className="link link-hover font-bold">Design</a>
                    <a className="link link-hover font-bold">Marketing</a>
                    <a className="link link-hover font-bold">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <Link to="/about" className="link link-hover font-bold">About us</Link>
                    <Link to="/contact" className="link link-hover font-bold">Contact</Link>
                    <Link to="/mycart" className="link link-hover font-bold">My Cart</Link>
                    <Link to="/product" className="link link-hover font-bold">Add Product</Link>
                </nav>
                <nav>
                    <header className="footer-title font-bold">Helpful Links</header>
                    <a className="link link-hover font-bold">Terms of use</a>
                    <a className="link link-hover font-bold">Privacy policy</a>
                    <a className="link link-hover font-bold">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;