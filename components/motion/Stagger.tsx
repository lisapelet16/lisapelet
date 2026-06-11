import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export default function Stagger({ children, className = "" }: StaggerProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
