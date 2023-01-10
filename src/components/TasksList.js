import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <> 
      <div className="w-6/12">
        <h1 className="text-center text-xl">Todo ReduxToolkit</h1>
      <header className="flex justify-between items-center py-4">
        <h2>
          {
            tasks.length === 0 ? ("Add new task") : (`Tasks (${tasks.length})`)
          }
        </h2>

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-3">
        {tasks.map((task) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-yellow-600 px-2 py-1 text-xs rounded-md self-center font-bold"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-600 px-2 py-1 text-xs rounded-md font-bold"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default TasksList;
