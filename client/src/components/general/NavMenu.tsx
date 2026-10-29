import { X } from "lucide-react";
import { Button } from "../ui/button";
import MenuOptionBtn from "./MenuOptionBtn";
import type { IconName } from "lucide-react/dynamic";

interface Props {
  onClose: () => void;
}

const menu = [
  { title: "Home", icon: "home", to: "" },
  { title: "About", icon: "info", to: "#about" },
  { title: "Projects", icon: "projector", to: "#projects" },
  { title: "Contact", icon: "bubbles", to: "#contact" },
];

export default function NavMenu({ onClose }: Props) {
  return (
    <div className="backdrop-blur-sm w-full absolute inset-0 h-svh py-3 flex flex-col">
      <Button onClick={onClose} variant={"outline"} className={"self-end mb-5"}>
        <X />
      </Button>
      {menu.map((item) => (
        <MenuOptionBtn
          title={item.title}
          icon={item.icon as IconName}
          to={item.to}
        />
      ))}
      <div className="mt-10 flex flex-1" onClick={onClose}></div>
    </div>
  );
}
