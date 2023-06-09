import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container";
import Input from "./components/Input";
import Summary from "./components/Summary/Summary";
import Tasks from "./components/Tasks/Tasks";
import { useHotkeys } from "react-hotkeys-hook";
import Footer from "./components/Footer";

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();

    if (value == "" || value == null) {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTasks((tasks) => [...tasks, newTask]);
  };

  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="h-screen flex justify-center m-5">
        <div className="flex flex-col items-center">
          <div className="border rounded-lg shadow-lg p-10 flex flex-col gap-10 bg-slate-600 md:w-[800px]">
            <h1 className="flex justify-center text-4xl text-white font-bold capitalize">
              To-do list
            </h1>
            <Container title={"Summary"}>
              <Summary tasks={tasks} />
            </Container>
            <Container>
              <Input handleSubmit={handleSubmit} />
            </Container>
            <Container title={"Current Tasks"}>
              <Tasks
                tasks={tasks}
                toggleDone={toggleDoneTask}
                handleDelete={handleDeleteTask}
              />
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
