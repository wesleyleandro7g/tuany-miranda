"use client";

import Image from "next/image";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Input } from "@/components/input";
import { AuthContext } from "@/contexts/authContext";

const loginFormSchema = z.object({
  email: z.string().nonempty("Informe o email").email("O email é inválido"),
  password: z.string().nonempty("Informe a senha"),
});

type submitFormDataType = z.infer<typeof loginFormSchema>;

export default function Login() {
  const router = useRouter();
  const { setIsAuth, setToken } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<submitFormDataType>({
    resolver: zodResolver(loginFormSchema),
  });

  function handleLogin(data: submitFormDataType) {
    if (data.email === "wesley@gmail.com" && data.password === "1234") {
      setIsAuth(true);
      setToken("token");

      localStorage.setItem("token", "fake-token");

      router.push("/dash/panel");
    }
  }

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-10 w-11/12 lg:w-1/4 px-4 py-10 rounded-xl lg:bg-white lg:shadow-lg lg:border border-slate-100">
        <Image src="/tuany-logo-rose.svg" alt="logo" width={160} height={56} />

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col w-full gap-10"
        >
          <div className="flex flex-col w-full gap-6">
            <Input
              label="Email"
              type="email"
              hasError={!!errors.email}
              errorMessage={errors.email?.message}
              register={register("email")}
            />
            <Input
              label="Senha"
              type="password"
              hasError={!!errors.password}
              errorMessage={errors.password?.message}
              register={register("password")}
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-full bg-primary capitalize text-white font-semibold"
          >
            entrar
          </button>
        </form>
      </div>
    </div>
  );
}
