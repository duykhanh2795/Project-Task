import { on } from "events";
import Button from "./Button";
import { useState } from "react";
export default function NewTask({
  onAddTask,
  onDeleteTask,
}: {
  onAddTask: (task: string) => void;
  onDeleteTask: (taskID: string) => void;
}) {
  const [task, setTask] = useState<string>("");
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setTask(e.target.value);
  }
  function handleClick() {
    onAddTask(task);
    setTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-md bg-stone-200"
        onChange={handleChange}
        value={task}
      />
      <Button onClick={handleClick} disabled={task === ""}>
        Add
      </Button>
    </div>
  );
}
