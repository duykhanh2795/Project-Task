import { forwardRef } from "react";
const Input = forwardRef(function Input(
  {
    label,
    textarea,
    id,
    type,
    ...props
  }: {
    label: string;
    textarea?: boolean;
    id?: string;
    type?: string;
    props?: any;
  },
  ref: any
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          ref={ref}
          className={classes}
          {...props}
        />
      ) : (
        <input
          id={id}
          ref={ref}
          className={classes}
          type={type}
          {...props}
        />
      )}
    </p>
  );
});
export default Input;
