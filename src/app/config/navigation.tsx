import React from "react";
import { UsersIcon, DetailsIcon } from "../components/icons";

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: "users",
    label: "Users",
    icon: <UsersIcon />,
    href: "/dashboard/users",
  },
  {
    id: "details",
    label: "Details",
    icon: <DetailsIcon />,
    href: "/dashboard/details",
  },
];
