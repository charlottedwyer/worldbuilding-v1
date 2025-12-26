import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

export default function NavLinkItem({
  to,
  icon,
  label,
}: {
  to: string;
  icon?: ReactNode;
  label: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
          isActive ? "bg-zinc-800 text-zinc-50" : "text-zinc-300 hover:bg-zinc-900",
        ].join(" ")
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
