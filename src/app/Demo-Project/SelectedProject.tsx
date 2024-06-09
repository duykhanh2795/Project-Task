import { useEffect, useState } from "react";
import Task from "./Task";
export default function SelectedProject({
  project,
  tasks,
  ProjectLength,
  selectedProjectID,
  onDelete,
  onAddTask,
  onDeleteTask,
}: {
  project: any;
  tasks: any[];
  ProjectLength: number;
  selectedProjectID: any;
  onDelete: () => void;
  onAddTask: (task: string) => void;
  onDeleteTask: (taskID: string) => void;
}) {
  const formattedDate = new Date(
    project.duedate
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 w-[465px] break-all">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950 hover:bg-[#e39e9e] bg-[#e5e5e5] py-2 px-4 rounded-md"
          >
            Delete
          </button>
        </div>
        ``
        <p className="mb-4 text-stone-400">
          Due Date: {formattedDate}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
        selectedProjectID={selectedProjectID}
      ></Task>
      <span className="text-[#858687] font-bold absolute bottom-8 right-8">
        Create at: {project.currentTime}
      </span>
    </div>
  );
}
