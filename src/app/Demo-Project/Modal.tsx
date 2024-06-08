import {
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const Modal = forwardRef(function Modal(
  {
    children,
    buttonLabel,
  }: { children: React.ReactNode;
    buttonLabel: string;
  },
  ref: any
) {
  const dialog = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => {
    return {
      open(): void {
        dialog.current?.showModal();
      },
    };
  });
  let portalElement = document.getElementById("portal");
  if (!portalElement) {
    portalElement = document.createElement("div");
    portalElement.id = "portal";
    document.body.appendChild(portalElement);
  }
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonLabel}</Button>  
      </form>
    </dialog>,
    portalElement as Element
  );
});
export default Modal;
