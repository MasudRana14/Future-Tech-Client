

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-gray-200 text-base-content">
                <aside>
                <div className=" text-center">
                        <img className="w-14" src="https://i.ibb.co/NC4GZv2/future.png" alt="" />
                       
                    </div>
                    <h1 className="text-2xl font-bold text-cyan-500 ">Future <span className="text-pink-500">Tech</span></h1>
                </aside>
                <nav>
                    <header className="footer-title">Menu</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Helpful Links</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;