import Button from "./Button";
export default function SideBar({
  onAddProject,
  projects,
  onSelectedProject,
  selectedProjectID,
}: {
  onAddProject: () => void;
  projects: any;
  onSelectedProject: (id: any) => void;
  selectedProjectID?: null | number | undefined | string;
}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl mr-9">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Project
        </h2>
        <div>
          <Button onClick={onAddProject}>
            + Add Project
          </Button>
        </div>
        <ul className="mt-8">
          {projects.map((project: any) => {
            let buttonStyle: string =
              "w-full text-left px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-700";
            if (project.id === selectedProjectID) {
              buttonStyle += " bg-stone-700 text-[white]";
            } else {
              buttonStyle += " bg-zinc-800 text-stone-400";
            }
            return (
              <li key={project.id} className="my-4">
                <button
                  onClick={() =>
                    onSelectedProject(project.id)
                  }
                  className={buttonStyle}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
