"use client";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useEffect, useRef } from "react";

export default function () {
  const { register, control } = useFormContext();
  const { remove, append, fields } = useFieldArray({
    control: control,
    name: "tags",
  });

  return (
    <div className="flex gap-2 mb-5">
      {fields.map((field, index) => {
        return (
          <div
            tabIndex={0}
            key={index}
            className="flex focus-within:border-2 items-center border-black flex-wrap rounded-lg p-1"
          >
            <input
              {...register(`tags.${index}.name`, { required: true })} // исправлено
              className="w-[50px] h-[30px] bg-transparent outline-none leading-[30px] align-middle "
            />
            <button onClick={() => remove(index)} className="">
              x
            </button>
          </div>
        );
      })}
      <div
        onClick={() => {
          append({ name: "" });
        }}
        className="cursor-pointer text-xl"
      >
        добавить тег
      </div>
    </div>
  );
}
