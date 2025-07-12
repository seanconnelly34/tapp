import React from "react";
import { Card } from "../../components";
import { PageContent, PageHeader, CardGrid } from "../../components/layout";
import { commonStyles } from "../../utils/styles";

export default function DetailsPage() {
  return (
    <PageContent>
      <PageHeader
        title='Details'
        description='View detailed analytics and reports'
      />

      <div className='text-white'>
        <h2 className={commonStyles.sectionHeader}>Details & Analytics</h2>
        <CardGrid columns={2}>
          <Card title='System Performance'>
            <p>CPU Usage: 45%</p>
            <p>Memory: 2.1GB / 8GB</p>
            <p>Uptime: 15 days</p>
          </Card>
          <Card title='Recent Activity'>
            <p>Last login: 2 minutes ago</p>
            <p>Database backup: 1 hour ago</p>
            <p>System update: Yesterday</p>
          </Card>
        </CardGrid>
      </div>
    </PageContent>
  );
}
