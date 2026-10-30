import type { Task } from "@/screens/Tasks";
import { Check, Undo2, X } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  task: Task;
  onDelete: () => void;
  onComplete: () => void;
}
export default function TaskBox({ task, onDelete, onComplete }: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className={`${task.isComplete && "line-through"}`}>{task.title}</p>
      <div className="flex gap-2">
        {!task.isComplete && (
          <Button onClick={onComplete}>
            <Check />
          </Button>
        )}
        {task.isComplete && (
          <Button onClick={onComplete}>
            <Undo2 />
          </Button>
        )}
        <Button variant={"secondary"} onClick={onDelete}>
          <X />
        </Button>
      </div>
    </div>
  );
}
