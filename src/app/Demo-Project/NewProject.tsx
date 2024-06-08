import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

type Data = {
  title: string | undefined | null;
  description: string | undefined | null;
  duedate: string | undefined | null;
};
export default function NewProject({
  onAdd,
  onCancel,
}: {
  onAdd: (ProjectData: Data) => void;
  onCancel: () => void;
}) {
  const modal = useRef<any>();

  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const duedate = useRef<HTMLInputElement>();
  function handleSave(): void {
    const projectData = {
      title: title.current?.value,
      description: description.current?.value,
      duedate: duedate.current?.value,
    };
    if (
      Object.values(projectData).some((value) => {
        return value?.trim() === "";
      })
    ) {
      modal.current?.open();
      return;
    }
    onAdd(projectData);
  }
  return (
    <>
      <Modal ref={modal} buttonLabel="Close">
        <h2 className="text-xl font-bold my-4">
          Invalid Input
        </h2>
        <p className="mb-4">
          Please make sure you provid a valid value
        </p>
        <p className="mb-4 font-bold italic">Warning...</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my--4">
          <li>
            <button
              onClick={onCancel}
              className="text-[black] hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md text-white bg-stone-800 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="text-[black] font-bold">
          <Input type="text" ref={title} label="Title" />
          <Input
            type="text"
            ref={description}
            label="Description"
            textarea
          />
          <Input
            type="date"
            ref={duedate}
            label="Due Date"
          />
        </div>
      </div>
    </>
  );
}
