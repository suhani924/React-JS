import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask, deleteTask } from "./taskSlice";

export default function TaskList() {
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask(text));
    setText("");
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-3xl font-bold text-center text-white">
        📝 Task Manager
      </h1>

      <form onSubmit={submit} className="flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 px-4 py-3 rounded-xl bg-zinc-800 text-white
                     placeholder-zinc-400 outline-none
                     focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700
                     rounded-xl text-white font-medium"
        >
          Add
        </button>
      </form>

      <div className="space-y-3 max-h-72 overflow-y-auto">
        {tasks.length === 0 && (
          <p className="text-zinc-400 text-center">No tasks yet 🚀</p>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center
                       bg-zinc-800 px-4 py-3 rounded-xl"
          >
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              className={`cursor-pointer ${
                task.completed ? "line-through text-zinc-500" : "text-white"
              }`}
            >
              {task.text}
            </span>

            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="text-red-400 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
