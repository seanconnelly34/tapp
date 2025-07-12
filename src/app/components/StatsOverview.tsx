"use client";

import React from "react";
import { Card } from "./";
import { CardGrid } from "./layout";
import { commonStyles } from "../utils/styles";

interface StatItem {
  title: string;
  value: string | number;
  valueColor?: string;
}

interface StatsOverviewProps {
  title: string;
  stats: StatItem[];
  columns?: 2 | 3 | 4;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({
  title,
  stats,
  columns = 3,
}) => {
  return (
    <div className='text-white mb-8'>
      <h2 className={commonStyles.sectionHeader}>{title}</h2>
      <CardGrid columns={columns}>
        {stats.map((stat, index) => (
          <Card
            key={index}
            title={stat.title}
            value={stat.value?.toString() || "..."}
            valueColor={stat.valueColor}
          />
        ))}
      </CardGrid>
    </div>
  );
};

export default StatsOverview;
