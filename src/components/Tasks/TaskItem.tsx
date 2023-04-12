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
          className="form-checkbox bg-gray-200 hover:bg-yellow-100 text-yellow-700 border-none w-5 h-5"
        />
        {name}
      </div>
      <button
        className="bg-yellow-200 hover:bg-yellow-300 rounded-lg p-1 px-3 transition m-2"
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;