import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

export type ItemType = {
  id: string;
  title: string;
  description: string;
};

interface Props {
  data?: ItemType[];
}

export default function AccordionComponent({ data }: Props) {
  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-2">
      {data?.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="w-full p-4 rounded-lg bg-magenta-crayola"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="w-full flex justify-between group text-white font-semibold text-md text-left">
              <span>{item.title}</span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              >
                <path
                  d="M6.125 10.0625L14 17.9375L21.875 10.0625"
                  stroke="white"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="AccordionContent">
            <p className="text-white text-sm font-medium mt-4">
              {item.description}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
