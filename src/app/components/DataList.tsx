"use client";

import React, { ReactNode } from "react";
import { LoadingSpinner, ErrorMessage } from "./";
import { CardGrid } from "./layout";
import { commonStyles } from "../utils/styles";

interface DataListProps<T> {
  title: string;
  data: T[] | undefined;
  isLoading: boolean;
  error: Error | null;
  onRetry: () => void;
  renderItem: (item: T) => ReactNode;
  emptyMessage?: string;
  loadingMessage?: string;
  columns?: 2 | 3 | 4;
}

function DataList<T>({
  title,
  data,
  isLoading,
  error,
  onRetry,
  renderItem,
  emptyMessage = "No items found.",
  loadingMessage = "Loading...",
  columns = 3,
}: DataListProps<T>) {
  return (
    <div className='text-white'>
      <h2 className={commonStyles.sectionHeader}>{title}</h2>

      {isLoading && (
        <div className='py-12'>
          <LoadingSpinner size='lg' />
          <p className='text-center text-gray-400 mt-4'>{loadingMessage}</p>
        </div>
      )}

      {error && <ErrorMessage message={error.message} onRetry={onRetry} />}

      {data && data.length > 0 && (
        <CardGrid columns={columns}>
          {data.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
        </CardGrid>
      )}

      {data && data.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-400'>{emptyMessage}</p>
        </div>
      )}
    </div>
  );
}

export default DataList;
