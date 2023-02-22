import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { SiFirebase } from "react-icons/si";
import { AppContext } from "../App";
import { auth } from "../firebase";

const Header = () => {
  const { setRoute, user, setUser } = useContext(AppContext);

  const hazLogout = () => {
    signOut(auth)
      .then(() => {
        setRoute("login");
        setUser(null);
        toast("Usuario ha hecho log out");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  return (
    <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setRoute("home")}
      >
        <SiFirebase className="text-2xl text-pink-600"></SiFirebase>
        <span className="text-2xl text-pink-600">FireShopping</span>
      </div>
      <button
        className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition"
        onClick={() => setRoute("shopping")}
      >
        Shopping
      </button>
      {user ? (
        <button onClick={hazLogout}>Log out</button>
      ) : (
        <button
          className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition"
          onClick={() => setRoute("login")}
        >
          Logifn
        </button>
      )}
      <button
        className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition"
        onClick={() => setRoute("register")}
      >
        Registrate
      </button>
    </header>
  );
};

export default Header;
