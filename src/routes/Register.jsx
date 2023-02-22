import React, { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";
import { AppContext } from "../App";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute, setUser } = useContext(AppContext);
  const creaUsuario = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        toast(`Usuario ${email} registrado correctamente!`);
        setUser(user);
        setRoute("home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    creaUsuario();
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-sky-700 font-semibold text-center">Registrate go!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input
          className="border border-gray-500 rounded py-1 px-2 outline-none"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-500 rounded py-1 px-2 outline-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-sky-400 py-1 text-white rounded shadow">
          Registrate
        </button>
      </form>
    </div>
  );
};

export default Register;
