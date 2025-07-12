import React from "react";
import { LoadingSpinner } from "./";
import { PageContent } from "./layout";

interface PageLoadingStateProps {
  title?: string;
  subtitle?: string;
}

const PageLoadingState: React.FC<PageLoadingStateProps> = ({
  title = "Loading...",
  subtitle = "Please wait while we fetch your data",
}) => {
  return (
    <PageContent>
      <div className='flex flex-col items-center justify-center min-h-[60vh] text-white'>
        <LoadingSpinner size='lg' />
        <p className='mt-4 text-lg text-gray-400'>{title}</p>
        <p className='mt-2 text-sm text-gray-500'>{subtitle}</p>
      </div>
    </PageContent>
  );
};

export default PageLoadingState;
