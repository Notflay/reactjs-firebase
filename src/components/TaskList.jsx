import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { db } from "../firebase";
import {
  addNewTask,
  getTasks,
  removeTask,
  updateTask,
} from "../firebase/taskController";

const task = {
  title: "Este es el titulo",
  description: "Este es la descripcion",
};

const TaskList = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("add");

  const { user } = useContext(AppContext);

  async function createNewTask() {
    await addNewTask(task).catch((e) => console.log("Error!!!"));
    initializeTasks();
  }

  const initializeTasks = async () => {
    getTasks().then((response) => {
      setTasks([...response]);
    });
  };

  function deletTask(id) {
    removeTask(id);
    initializeTasks();
  }

  async function updateExistTask() {
    await updateTask(task);
    setTask({ title: "", description: "" });
    initializeTasks();
    setMode("add");
  }

  function editTask(id) {
    setMode("update");
    const taskToEdit = tasks.find((t) => id === t.id);
    setTask({ ...taskToEdit });
  }

  useEffect(() => {
    initializeTasks();
  }, []);

  return (
    <div>
      <h1 className="text-sky-700 font-semibold text-lg">
        Estás en la taslist
      </h1>
      <div className="flex flex-col gap-4">
        <h2>Introduce una nueva tarea</h2>
        <input
          className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 w-1/5"
          type={"text"}
          value={task.title}
          name="title"
          disabled={!user}
          placeholder="Titulo"
          onChange={(e) =>
            setTask({ ...task, [e.target.name]: e.target.value })
          }
        />
        <textarea
          className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 w-1/5"
          rows={3}
          type={"text"}
          disabled={!user}
          value={task.description}
          name="description"
          placeholder="Descripcion"
          onChange={(e) =>
            setTask({ ...task, [e.target.name]: e.target.value })
          }
        />
        <button
          className="bg-sky-400 text-white rounded shadow py-1 w-1/5 hover:bg-sky-300 transition disabled:bg-sky-200"
          disabled={!user}
          onClick={() =>
            mode === "update" ? updateExistTask() : createNewTask()
          }
        >
          {mode === "add" ? "Añadir" : "Actualizar"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tasks.map((task, key) => (
          <div
            key={key}
            className="rounded-lg border border-sky-300 p-4 flex flex-col gap-2 py-2"
          >
            <h1 className="font-semibold">{task.title}</h1>
            <div className="border-t border-sky-300"></div>
            <p>{task.description}</p>
            <div className="flex flex-row justify-between">
              <button
                className="bg-sky-400 text-white py-1 px-2 rounded"
                onClick={() => {
                  editTask(task.id);
                }}
              >
                Editar
              </button>
              <button
                className="bg-red-600 text-white py-1 px-2 rounded"
                onClick={() => {
                  confirm("¿Seguro que quieres eliminar esta tarea?") &&
                    deletTask(task.id);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      {!user && (
        <p className="text-red-600">
          Necesitas estar logueado para leer y añadir
        </p>
      )}
    </div>
  );
};

export default TaskList;
