// En este fichero crearemos toda la logica de base de datos para las tasks

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from ".";

// CRUD - Create, read, update and delete

export const addNewTask = async (task) => {
  try {
    await addDoc(collection(db, "tasks"), task);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTasks = async () => {
  const querySnapShot = await getDocs(collection(db, "tasks"));

  /*   querySnapShot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
 */
  const tasks = querySnapShot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return tasks;
};

export const updateTask = async (task) => {
  await setDoc(doc(db, "tasks", task.id), {
    title: task.title,
    description: task.description,
  });
};

export const removeTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
};
