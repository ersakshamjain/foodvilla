import { useState,useContext} from "react";
import Logo from "../assests/img/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Title = () => (
  <a href="/">
    <img data-testid="logo" className=" h-28 p-2 ml-5" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const {user} = useContext(userContext)


  const cartItem = useSelector(store => store.cart.items);
  console.log(cartItem)

  return (
  
    <div className="header flex justify-between bg-white shadow-lg ">
      <Title />
      <div className="nav-items ">
        
        <ul className="flex py-10 ml-32">
        
          <li className="px-2 text-xl text-bold">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2 text-xl">
            <Link to="/about"> About</Link>
          </li>

          <li className="px-2 text-xl">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2 text-xl">
            <Link to="/instamart">Instamart</Link>
          </li>
        
          <li className="px-2 text-xl" >
            <Link to="/cart" data-testid="cart">Cart- {cartItem.length} Items</Link>
          </li>
        
        </ul>
      </div>
      <h1 data-testid="Online-Status">{isOnline ? "✅" : "🔴"}</h1>
      <span className="font-bold p-10 text-purple-900 border-s-orange-100">{user.name}</span>
      {isLoggedIn ? (
        <button className="px-4 m-7 bg-purple-900 text-white rounded-lg text-lg  hover:bg-gray-400 hover:text-black" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="px-[22px] m-7  bg-purple-900 text-white rounded-lg text-lg hover:bg-gray-400 hover:text-black" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
    
  );
};

export default Header;
