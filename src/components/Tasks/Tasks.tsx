import { Task } from "../../App";
import TaskItem from "./TaskItem";

interface TasksProps {
    tasks: Task[];
    toggleDone: (id: string, done: boolean) => void;
    handleDelete: (id: string) => void;
}

const Tasks = ({
  tasks,
  toggleDone,
  handleDelete,
}: TasksProps) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length ? (
        tasks.map((t) => (
          <TaskItem
            key={t.id}
            name={t.name}
            done={t.done}
            id={t.id}
            toggleDone={toggleDone}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <span className="text-yellow-700">New tasks will show up here!</span>
      )}
    </div>
  );
};

export default Tasks;