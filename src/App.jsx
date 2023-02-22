import { onMessage } from "firebase/messaging";
import { useState, createContext, useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { app, messaging } from "./firebase";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Shopping from "./routes/Shopping";

export const AppContext = createContext(null);

onMessage(messaging, (payload) => {
  console.log("Nueva notificación en directo", payload);
  toast.custom((t) => (
    <div className="bg-sky-300 p-4 rounded-lg shadow-lg">
      <h1 className="text-lg text-sky-700 font-semibold">
        {payload.notification.title}
      </h1>
      <p className="text-sm text-sky-500">{payload.notification.body}</p>
    </div>
  ));
});

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <div className="h-screen">
        <Toaster />
        <Header />
        <main className="px-6 my-20">
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {user && <p>Usuario logeado: {user.email}</p>}
          {route === "shopping" && <Shopping />}
          {route === "tasklist" && <TaskList />}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
