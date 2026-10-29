import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Button } from "../ui/button";

interface Props {
  title: string;
  icon: IconName;
  to: string;
}
export default function MenuOptionBtn({ title, icon, to }: Props) {
  return (
    <Button variant={'ghost'} onClick={() => console.log(to)} className={'flex justify-between'}>
      {title} <DynamicIcon name={icon} />
    </Button>
  );
}
