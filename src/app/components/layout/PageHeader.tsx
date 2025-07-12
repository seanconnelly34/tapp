import React from "react";
import { typography } from "../../utils/styles";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  action,
  className = "",
}) => {
  return (
    <header className={`mb-8 ${className}`}>
      <div className='flex justify-between items-start'>
        <div>
          <h1 className={`${typography.h1} mb-2`}>{title}</h1>
          {description && <p className={typography.bodyMuted}>{description}</p>}
        </div>
        {action && <div className='flex-shrink-0'>{action}</div>}
      </div>
    </header>
  );
};

export default PageHeader;
