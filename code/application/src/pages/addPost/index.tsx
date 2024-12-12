import { useForm, FormProvider, Controller } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Form/input";
import { ChangeEvent, useState } from "react";
import Tag from "../components/Form/tag";
import { useRouter } from "next/router";

export default function () {
  let methods = useForm();
  let route = useRouter();
  let [imageData, setImageData] = useState();
  const handlerAdd = async (data: any) => {
    let formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("description", data.text);
    formData.append("name", data.name);
    formData.append(
      "tags",
      data.tags.map((e: { name: string }) => e.name)
    );
    let request = fetch("http://localhost:3000/api/addPost", {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        route.push("/");
      } else {
        alert("ошибка, вы не авторизированы");
      }
    });
  };
  const handlerchange = (e: ChangeEvent) => {
    let file = new FileReader();
    file.onload = () => {
      setImageData(file.result);
    };
    file.readAsDataURL(e.target.files[0]);
  };
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handlerAdd)}>
            <Input label="название" name="name" />
            {methods?.formState?.errors?.name && (
              <div className="text-red-400">
                название должно быть не менее 10 символов
              </div>
            )}
            <Input label="описание" name="text" big />
            {methods?.formState?.errors?.text && (
              <div className="text-red-400">
                описание должно быть не менее 100 символов
              </div>
            )}
            <div className="mt-6 flex items-center justify-between">
              <label htmlFor="image" className="p-2 bg-slate-200 rounded-xl">
                Выбрать превью
              </label>
              <input
                id="image"
                {...methods.register("file", { required: true })}
                className="opacity-0"
                type="file"
                onChange={(e) => {
                  handlerchange(e);
                }}
              />
              <img
                src={imageData}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            {methods.formState.errors.file && (
              <div className="text-red-400">выбери картинку</div>
            )}

            <Tag />
            <Button>Отправить</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
