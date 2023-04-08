import {
  IoGrid,
  IoGridOutline,
  IoCalendar,
  IoCalendarOutline,
  IoPerson,
  IoPersonOutline,
  IoBagHandle,
  IoBagHandleOutline,
} from "react-icons/io5";

export const paths = [
  {
    name: "painel",
    path: "/panel",
    isSelected: true,
    icon: IoGridOutline,
    iconFocused: IoGrid,
  },
  {
    name: "aluguéis",
    path: "/rentals",
    isSelected: false,
    icon: IoCalendarOutline,
    iconFocused: IoCalendar,
  },
  {
    name: "clientes",
    path: "/costumers",
    isSelected: false,
    icon: IoPersonOutline,
    iconFocused: IoPerson,
  },
  {
    name: "produtos",
    path: "/products",
    isSelected: false,
    icon: IoBagHandleOutline,
    iconFocused: IoBagHandle,
  },
];
