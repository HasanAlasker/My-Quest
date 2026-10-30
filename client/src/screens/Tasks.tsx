import TaskBox from "@/components/task/TaskBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const storagekey = "tasks";

const loadTasks = () => {
  try {
    const storedTasks = localStorage.getItem(storagekey);
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    return [];
  }
};

export interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export default function Tasks() {
  const [task, setTask] = useState("");
  const [list, setList] = useState<Task[]>(loadTasks);

  const addTask = () => {
    console.log(task);
    const id = crypto.randomUUID();

    setList((p) => [...p, { id, title: task, isComplete: false }]);
    console.log(list);
    setTask("");
  };

  const completeTask = (id: string) => {
    setList((p) =>
      p.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t)),
    );
  };

  const deleteTask = (id: string) => {
    setList((p) => p.filter((t) => t.id !== id));
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };

  useEffect(() => {
    localStorage.setItem(storagekey, JSON.stringify(list));
  }, [list]);

  return (
    <div className="py-10 flex flex-col items-center">
      {/* text input for adding tasks */}
      <div className="flex w-full max-w-md gap-2">
        <Input
          onKeyDown={handleEnter}
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>
          Add Task <Plus />
        </Button>
      </div>

      {/* area to view existing tasks */}
      <div className="mt-10 w-full max-w-md">
        {list.map((t) => (
          <TaskBox
            key={t.id}
            task={t}
            onDelete={() => deleteTask(t.id)}
            onComplete={() => completeTask(t.id)}
          />
        ))}
      </div>
    </div>
  );
}
