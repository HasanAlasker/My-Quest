import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Screen({ children }: Props) {
  return <div className="w-[95%] m-auto md:w-[80%] max-w-6xl">{children}</div>;
}
