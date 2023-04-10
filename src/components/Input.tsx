import { FormEvent, useState } from "react";

const InputContainer = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  const [newTaskName, setNewTaskName] = useState("");
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newTaskName);
        setNewTaskName("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-black">Enter your next task:</label>
        <input
          className="p-2 rounded-sm"
          type="text"
          value={newTaskName}
          placeholder="Finish this project"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-200 rounded-lg hover:bg-yellow-300 p-1 transition"
      >
        Add task
      </button>
    </form>
  );
};

export default InputContainer;