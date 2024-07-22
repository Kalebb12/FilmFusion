import ThemeSwitcher from "../themeSwitcher";
import "./navbar.css"
const Navbar = () => {
    return ( 
        <div>
            <nav className="container py-3 max-w-custom">
                <div className="flex justify-between items-center">
                    logo
                    <div className="hidden sm:inline-block">
                        <input type="text" className="border-2 px-2 border-solid border-[--primary-color] w-[350px] rounded-lg outline-none text-black search" />
                    </div>
                    <ThemeSwitcher/>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;