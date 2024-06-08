import NewTask from "./NewTask";
export default function Task({
  tasks,
  onAddTask,
  onDeleteTask,
}: {
  tasks: any[];
  onAddTask: (task: string) => void;
  onDeleteTask: (taskID: string) => void;
}) {
  return (
    <section className="text-black">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <NewTask
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      ></NewTask>
      {tasks.length === 0 ? (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li
                key={task.taskID}
                className="flex justify-between my-4"
              >
                <span>{task.content}</span>
                <button
                  onClick={() => onDeleteTask(task.taskID)}
                  className="text-stone-700 hover:text-red-500 hover:font-bold"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {/* <p className="text-stone-800 mb-4">
        This project does not have any tasks yet
      </p> */}
      {/* <ul>{tasks.map((task) => {
        return ()
      })}</ul> */}
    </section>
  );
}
