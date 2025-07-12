"use client";

import React from "react";
import Link from "next/link";
import { Card, Button, StatsOverview } from "../components";
import { PageContent, PageHeader, CardGrid } from "../components/layout";
import { StarIcon } from "../components/icons";
import { commonStyles } from "../utils/styles";

export default function DashboardPage() {
  const dashboardStats = [
    { title: "Total Users", value: "1,234", valueColor: "text-blue-500" },
    { title: "Active Users", value: "987", valueColor: "text-green-500" },
    { title: "System Uptime", value: "15 days", valueColor: "text-purple-500" },
    { title: "CPU Usage", value: "45%", valueColor: "text-yellow-500" },
  ];

  return (
    <PageContent>
      <PageHeader
        title='Dashboard Overview'
        description="Welcome back! Here's what's happening with your system."
      />

      {/* Quick Stats Grid */}
      <StatsOverview title='Quick Stats' stats={dashboardStats} columns={4} />

      {/* Quick Actions */}
      <div className='mb-8'>
        <h2 className={commonStyles.sectionHeader}>Quick Actions</h2>
        <CardGrid columns={2}>
          <Link href='/dashboard/users' className='block'>
            <Card title='Manage Users' className={commonStyles.interactiveCard}>
              <p>View and manage user accounts</p>
              <p className={commonStyles.actionLink}>→ Go to Users</p>
            </Card>
          </Link>
          <Link href='/dashboard/details' className='block'>
            <Card
              title='System Details'
              className={commonStyles.interactiveCard}
            >
              <p>Check system performance and analytics</p>
              <p className={commonStyles.actionLink}>→ Go to Details</p>
            </Card>
          </Link>
        </CardGrid>
      </div>

      {/* Recent Activity */}
      <div className='mb-8'>
        <h2 className={commonStyles.sectionHeader}>Recent Activity</h2>
        <Card title='Latest Events'>
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <span>New user registration</span>
              <span className='text-gray-500 text-sm'>2 minutes ago</span>
            </div>
            <div className='flex justify-between items-center'>
              <span>System backup completed</span>
              <span className='text-gray-500 text-sm'>1 hour ago</span>
            </div>
            <div className='flex justify-between items-center'>
              <span>Database optimization</span>
              <span className='text-gray-500 text-sm'>3 hours ago</span>
            </div>
            <div className='flex justify-between items-center'>
              <span>Security scan completed</span>
              <span className='text-gray-500 text-sm'>Yesterday</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Button Showcase */}
      <div>
        <h2 className={commonStyles.sectionHeader}>Button Examples</h2>
        <Card title='Button Variants with New Gradient'>
          <div className='flex flex-wrap gap-4'>
            <Button text='Primary Gradient' variant='primary' />
            <Button text='Secondary' variant='secondary' />
            <Button text='Outline' variant='outline' />
            <Button text='With Icon' variant='primary' icon={<StarIcon />} />
          </div>
        </Card>
      </div>
    </PageContent>
  );
}
