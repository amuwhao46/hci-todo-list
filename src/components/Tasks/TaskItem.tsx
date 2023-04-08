const TaskItem = ({
  name,
  done,
  id,
  toggleDone,
  handleDelete,
}: {
  name: string;
  done: boolean;
  id: string;
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white p-1 px-3 rounded-sm md:gap-4">
      <div className="flex gap-2 items-center mx-auto md:mx-0">
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(id, !done)}
        />
        {name}
      </div>
      <button
        className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;