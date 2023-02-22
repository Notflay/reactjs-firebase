import React, { useContext } from "react";
import { ImHome } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppContext } from "../App";
import { BsList } from "react-icons/bs";

const Footer = () => {
  const { setRoute } = useContext(AppContext);

  return (
    <footer className="fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center">
      <div
        className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-100 transition"
        onClick={() => setRoute("home")}
      >
        <ImHome></ImHome>
      </div>
      <div
        className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-100 transition"
        onClick={() => setRoute("shopping")}
      >
        <AiOutlineShoppingCart></AiOutlineShoppingCart>
      </div>
      <div
        className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-100 transition"
        onClick={() => setRoute("tasklist")}
      >
        <BsList></BsList>
      </div>
    </footer>
  );
};

export default Footer;
