import React from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchIcon from "@mui/icons-material/Search";
import  ShoppingBasketIcon  from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }] = useStateValue();

    return (
    <nav  className = "header"  >
        {/*logo*/}
    <Link to = "/">
    <img  className="header__logo" 
    src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
     alt=''/>
    </Link>

        {/*Search box*/}
        <div className="header__search">
        <input type = "text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
        </div>
        {/*3 links*/}
        <div className="header__nav">
         {/* firstlink */}
         <Link  to="/login" className="header__link">
            <div className="header__options">
            <span className="header__optionsLineOne">Hello me</span>
            <span className="header__optionsLineTwo">Sign in</span>
            </div>
            </Link>
         {/* secondlink */}
         <Link  to="/" className="header__link">
            <div className="header__options">
            <span className="header__optionsLineOne">Returns</span>
            <span className="header__optionsLineTwo">& Orders</span>
            </div>
            </Link>
         {/* thirdlink */}
         <Link  to="/" className="header__link">
            <div className="header__options">
            <span className="header__optionsLineOne">Your</span>
            <span className="header__optionsLineTwo">Prime</span>
            </div>
            </Link>
            {/* fourthlink */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionsBasket">
                {/* Shopping basket icon */}
                <ShoppingBasketIcon/>
                {/* Number of items in the shopping basket */}
                <span className="header__optionsLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
        {/*Basket icon with Nubeer*/}
    </nav> 

    )
}

export default Header
