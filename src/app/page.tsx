"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./globals.css";
import { twMerge, twJoin } from "tailwind-merge";
import { propagateServerField } from "next/dist/server/lib/render-server";
import SideBar from "./Demo-Project/SideBar";
import NewProject from "./Demo-Project/NewProject";
import NoProjectSelected from "./Demo-Project/NoProjectSelected";
import SelectedProject from "./Demo-Project/SelectedProject";
import { v4 as uuidv4 } from "uuid";

type Projectype = {
  ID: string | null | undefined | number;
  id?: any;
  projects: Projectype[];
  tasks: any[];
};
export default function Page() {
  const [Project, setProject] = useState<Projectype>({
    ID: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(task: string) {
    setProject((prevProjectState: Projectype) => {
      const NewTask = {
        content: task,
        taskID: uuidv4(),
        projectID: Project.ID,
      };
      return {
        ...prevProjectState,
        tasks: [...prevProjectState.tasks, NewTask],
      };
    });
  }
  function handleDeleteTask(taskID: string) {
    setProject((prevProjectState: Projectype) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter(
          (task) => task.taskID !== taskID
        ),
      };
    });
  }
  function handleStartAddProject(): void {
    setProject((prevProjectState: Projectype) => {
      return {
        ...prevProjectState,
        ID: null,
      };
    });
  }
  function handleAddProject(projectData: any): void {
    setProject((prevProjectState: Projectype) => {
      const newProject = {
        ...projectData,
        id: uuidv4(),
        currentTime: new Date().toLocaleString(),
      };
      return {
        ...prevProjectState,
        ID: undefined,
        projects: [
          ...prevProjectState.projects,
          newProject,
        ],
      };
    });
  }
  function handleCancelAddProject() {
    setProject((prevProjectState: Projectype) => {
      return {
        ...prevProjectState,
        ID: undefined,
      };
    });
  }
  function handleSelectedProject(id: any) {
    setProject((prevProjectState: Projectype) => {
      return {
        ...prevProjectState,
        ID: id,
      };
    });
  }
  function handleDeleteProject() {
    setProject((prevProjectState: Projectype) => {
      return {
        ...prevProjectState,
        ID: undefined,
        projects: prevProjectState.projects.filter(
          (project) => project.id !== Project.ID
        ),
      };
    });
  }
  const selectedProject = Project.projects.find(
    (project) => project.id === Project.ID
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={Project.tasks}
      ProjectLength={Project.projects.length}
      selectedProjectID={Project.ID}
    ></SelectedProject>
  );
  if (Project.ID === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (Project.ID === undefined) {
    content = (
      <NoProjectSelected
        onAddProject={handleStartAddProject}
      ></NoProjectSelected>
    );
  }
  return (
    <>
      <div className="h-5 bg-[#5e5e5e]"></div>
      <main className="h-[723px] flex">
        <SideBar
          onAddProject={handleStartAddProject}
          tasks={Project.tasks}
          projects={Project.projects}
          onSelectedProject={handleSelectedProject}
          selectedProjectID={Project.ID}
        ></SideBar>
        {content}
      </main>
    </>
  );
}
