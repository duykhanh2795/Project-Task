export default function Button({
  children,
  disabled,
  ...props
}: {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  props?: any;
}) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-slate-800 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
