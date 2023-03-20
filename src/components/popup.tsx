"use client";

import React, { FormEvent, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
}

export default function Popup(props: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const currentLocation = window.location.href;
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || currentLocation;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;

    window.location.assign(
      `${checkoutUrl}?name=${name}&email=${email}&phonenumber=${phone}`
    );
  };

  return (
    <main className={poppins.className}>
      <Dialog.Root open={props.isOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="backdrop-blur-md data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="overflow-scroll data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-violet-web text-center text-3xl font-bold">
              Vamos iniciar...
            </Dialog.Title>
            <Dialog.Description className="text-rick-black text-center text-lg">
              Por favor preencha os campos abaixo
            </Dialog.Description>

            <Form.Root className="w-full" onSubmit={handleSubmit}>
              <div className="mt-8">
                <Form.Field
                  className="grid mb-[10px]"
                  name="name"
                  serverInvalid={false}
                >
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-rick-black">
                      Seu nome
                    </Form.Label>
                    <Form.Message
                      className="text-[13px] text-rick-black opacity-[0.8]"
                      match="valueMissing"
                    >
                      Por favor informe seu nome
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="box-border w-full bg-gray-200 inline-flex h-12 appearance-none items-center justify-center rounded-md px-4 text-sm leading-none text-rick-black  outline-none focus:shadow-[0_0_0_1px_gray]"
                      type="text"
                      required
                      ref={nameRef}
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field className="grid mb-[10px]" name="email">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-rick-black">
                      Email
                    </Form.Label>
                    <Form.Message
                      className="text-[13px] text-rick-black opacity-[0.8]"
                      match="valueMissing"
                    >
                      Por favor informe seu email
                    </Form.Message>
                    <Form.Message
                      className="text-[13px] text-rick-black opacity-[0.8]"
                      match="typeMismatch"
                    >
                      Informe um email válido
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="box-border w-full bg-gray-200 inline-flex h-12 appearance-none items-center justify-center rounded-md px-4 text-sm leading-none text-rick-black  outline-none focus:shadow-[0_0_0_1px_gray]"
                      type="email"
                      required
                      ref={emailRef}
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field className="grid mb-[10px]" name="phone">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-rick-black">
                      Telefone
                    </Form.Label>
                    <Form.Message
                      className="text-[13px] text-rick-black opacity-[0.8]"
                      match="valueMissing"
                    >
                      Por favor informe seu telefone
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="box-border w-full bg-gray-200 inline-flex h-12 appearance-none items-center justify-center rounded-md px-4 text-sm leading-none text-rick-black  outline-none focus:shadow-[0_0_0_1px_gray]"
                      type="phone"
                      required
                      ref={phoneRef}
                    />
                  </Form.Control>
                </Form.Field>
              </div>

              <div className="mt-[25px] flex justify-end">
                <Form.Submit asChild>
                  <button
                    onClick={props.onSubmit}
                    type="submit"
                    className="flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-violet-web text-lg text-white uppercase font-bold w-full whitespace-nowrap"
                  >
                    Continuar
                  </button>
                </Form.Submit>
              </div>
            </Form.Root>

            <Dialog.Close asChild>
              <button
                className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
                aria-label="Close"
                onClick={props.onClose}
              >
                <svg
                  width="513"
                  height="513"
                  viewBox="0 0 513 513"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M290.606 256.921L385.606 161.921C390.115 157.42 392.651 151.313 392.657 144.942C392.662 138.572 390.137 132.46 385.636 127.951C381.135 123.442 375.028 120.906 368.657 120.901C362.287 120.895 356.175 123.42 351.666 127.921L256.666 222.921L161.666 127.921C157.157 123.412 151.042 120.879 144.666 120.879C138.29 120.879 132.175 123.412 127.666 127.921C123.157 132.43 120.625 138.545 120.625 144.921C120.625 151.297 123.157 157.412 127.666 161.921L222.666 256.921L127.666 351.921C123.157 356.43 120.625 362.545 120.625 368.921C120.625 375.297 123.157 381.412 127.666 385.921C132.175 390.43 138.29 392.963 144.666 392.963C151.042 392.963 157.157 390.43 161.666 385.921L256.666 290.921L351.666 385.921C356.175 390.43 362.29 392.963 368.666 392.963C375.042 392.963 381.157 390.43 385.666 385.921C390.175 381.412 392.708 375.297 392.708 368.921C392.708 362.545 390.175 356.43 385.666 351.921L290.606 256.921Z"
                    fill="#DF599A"
                  />
                </svg>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
