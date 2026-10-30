import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Button } from "../ui/button";

interface Props {
  title: string;
  icon: IconName;
  to: string;
  onClose: () => void;
}
export default function MenuOptionBtn({ title, icon, to, onClose }: Props) {
  return (
    <a href={to} onClick={onClose} className="flex w-full">
      <Button
        variant={"ghost"}
        onClick={() => console.log(to)}
        className={"flex justify-between w-full"}
      >
        {title} <DynamicIcon name={icon} />
      </Button>
    </a>
  );
}
