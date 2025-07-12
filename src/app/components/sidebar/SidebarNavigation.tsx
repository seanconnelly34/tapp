"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "../../config/navigation";
import {
  gradients,
  transitions,
  typography,
  interactive,
} from "../../utils/styles";

interface SidebarNavigationProps {
  onLinkClick?: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  onLinkClick,
}) => {
  const pathname = usePathname();

  return (
    <nav className='flex-1 py-4'>
      <ul className='space-y-0'>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={onLinkClick}
              className={`w-full flex items-center pl-6 pr-4 py-3 text-left ${
                transitions.all
              } ${
                pathname === item.href
                  ? `${gradients.primary} ${typography.body}`
                  : `${typography.bodySecondary} ${interactive.hoverButton}`
              }`}
            >
              <span className='mr-3'>{item.icon}</span>
              <span className='font-medium'>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
