import React from "react";
import { badges } from "../utils/styles";

interface StatusBadgeProps {
  status: "active" | "inactive";
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = "",
}) => {
  return (
    <span className={`${badges.base} ${badges[status]} ${className}`}>
      {status === "active" ? "Active" : "Inactive"}
    </span>
  );
};

export default StatusBadge;
