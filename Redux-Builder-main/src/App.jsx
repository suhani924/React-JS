import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black
                    flex items-center justify-center p-4">
      <div className="bg-zinc-900 p-6 rounded-2xl shadow-2xl w-full max-w-md">
        <TaskList />
      </div>
    </div>
  );
}
