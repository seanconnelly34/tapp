"use client";

import React from "react";
import Link from "next/link";
import { typography, interactive, surfaces } from "../../utils/styles";

interface SidebarLogoProps {
  onClick?: () => void;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ onClick }) => {
  return (
    <div className={`p-6 border-b ${surfaces.border}`}>
      <Link
        href='/dashboard'
        onClick={onClick}
        className={`${typography.h2} ${interactive.linkMuted}`}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default SidebarLogo;
