import { useFormContext } from "react-hook-form";

type props = {
  label: string;
  name: string;
  big?: boolean;
};
export default function ({ label, name, big = false }: props) {
  let { register } = useFormContext();
  return (
    <div className="flex items-center gap-x-5 mt-5">
      <label htmlFor={name.replace(" ", "")} className="text-3xl">
        {label}
      </label>
      {!big ? (
        <input
          {...register(name, { minLength: 10, maxLength: 30, required: true })}
          id={name.replace(" ", "")}
          className="border border-slate-700 p-3 outline-none rounded-2xl"
        />
      ) : (
        <textarea
          {...register(name, {
            minLength: 100,
            maxLength: 150,
            required: true,
          })}
          className="border border-slate-700 p-3 outline-none rounded-2xl w-full h-32"
          rows={10}
          placeholder={label}
        ></textarea>
      )}
    </div>
  );
}
