import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  // const context = useContext(ShoppingCartContext);
  const {openCheckOutMenu, setSearchByCategory, count} = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="w-full flex justify-between items-center fixed z-10 py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchByCategory('')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => setSearchByCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => setSearchByCategory('furniture')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => setSearchByCategory('toys')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => setSearchByCategory('others')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">miel@loco.yeap</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
        <li className="flex">
       
            <ShoppingBagIcon 
            className="h-4 w-4 text-black"
            onClick={() => openCheckOutMenu()}/>
            {count}
          
        </li>
      </ul>
    </nav>
  );
};
