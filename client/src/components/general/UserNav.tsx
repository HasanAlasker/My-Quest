import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import NavMenu from "./NavMenu";

export default function UserNav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className=" z-100 flex items-center justify-between sticky top-0 backdrop-blur-lg py-3">
      <a href="/" className="font-bold text-md md:text-xl">
        AlaskerDev
      </a>
      <Button onClick={() => setMenu(true)} variant={"outline"}>
        <Menu />
      </Button>
      {menu && <NavMenu onClose={() => setMenu(false)}></NavMenu>}
    </nav>
  );
}
