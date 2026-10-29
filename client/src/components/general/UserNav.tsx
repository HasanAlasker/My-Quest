import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import NavMenu from "./NavMenu";

export default function UserNav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between relative py-3">
      <div>logo</div>
      <Button onClick={() => setMenu(true)} variant={"outline"}>
        <Menu />
      </Button>
      {menu && <NavMenu onClose={() => setMenu(false)}></NavMenu>}
    </nav>
  );
}
