import { BsBookmarkPlusFill } from "react-icons/bs";
import ThemeSwitcher from "./themeSwitcher";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    const fetchMovies = () =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_READ_ACCESS}`
            }
          };
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      }
      if(search !== ""){
          fetchMovies()
      }
  }, [search]);
  return (
    <div>
      <nav className="container px-10 py-3 max-w-custom">
        <div className="flex justify-between items-center">
          logo
          <div className="hidden sm:flex items-center gap-2">
            <input
              type="text"
              placeholder="search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border-2 text-[12px] py-1 focus:border-[--focus-color] px-2 border-solid border-[--primary-color] w-[350px] rounded-lg outline-none text-black search placeholder:text-gray-600 cursor-pointer"
            />
            <div className=" transition duration-200 px-3 ease-in  hover:bg-[--hover-color] cursor-pointer shadow-sm p-1 rounded-md">
              <div>Go Pro</div>
            </div>
            <div className="flex items-center  transition duration-200 px-3 ease-in  hover:bg-[--hover-color] cursor-pointer shadow-sm p-1 rounded-md">
              <div>
                <BsBookmarkPlusFill className="color-[--primary-color]" />
              </div>
              <div>Watchlist</div>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
