"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Card,
  Label,
  LoadingSpinner,
  ErrorMessage,
  StatusBadge,
} from "../../../components";
import { PageContent } from "../../../components/layout";
import { useUser } from "../../../services/profiles";
import { typography, interactive, forms } from "../../../utils/styles";

export default function UserDetailPage() {
  const params = useParams();
  const userId = parseInt(params.id as string, 10);

  const { data: user, isLoading, error, refetch } = useUser(userId);

  if (isLoading) {
    return (
      <PageContent>
        <div className='py-12'>
          <LoadingSpinner size='lg' />
          <p className='text-center text-gray-400 mt-4'>
            Loading user details...
          </p>
        </div>
      </PageContent>
    );
  }

  if (error) {
    return (
      <PageContent>
        <ErrorMessage
          message={`Failed to load user details: ${error.message}`}
          onRetry={() => refetch()}
        />
      </PageContent>
    );
  }

  if (!user) {
    return (
      <PageContent>
        <div className='text-center py-12'>
          <p className='text-gray-400'>User not found.</p>
          <Link
            href='/dashboard/users'
            className={`${interactive.link} mt-4 inline-block`}
          >
            ← Back to Users
          </Link>
        </div>
      </PageContent>
    );
  }

  return (
    <PageContent>
      {/* Breadcrumb Navigation */}
      <div className='mb-6'>
        <nav className='flex items-center space-x-2 text-sm text-gray-400'>
          <Link href='/dashboard/users' className={interactive.linkMuted}>
            Users
          </Link>
          <span>›</span>
          <span className='text-white'>{user.name}</span>
        </nav>
      </div>

      {/* Custom Header with Status Badge */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <h1 className={typography.h1}>{user.name}</h1>
          <StatusBadge status='active' />
        </div>
      </div>

      {/* User Details */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Contact Information */}
        <Card title='Contact Information'>
          <div className='space-y-4'>
            <div>
              <Label>Full Name</Label>
              <p className='text-white text-lg'>{user.name}</p>
            </div>
            <div>
              <Label>Username</Label>
              <p className='text-white font-mono'>@{user.username}</p>
            </div>
            <div>
              <Label>Email Address</Label>
              <p className='text-white'>
                <a href={`mailto:${user.email}`} className={interactive.link}>
                  {user.email}
                </a>
              </p>
            </div>
            <div>
              <Label>Phone Number</Label>
              <p className='text-white'>
                <a href={`tel:${user.phone}`} className={interactive.link}>
                  {user.phone}
                </a>
              </p>
            </div>
            <div>
              <Label>Website</Label>
              <p className='text-white'>
                <a
                  href={`https://${user.website}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={interactive.link}
                >
                  {user.website}
                </a>
              </p>
            </div>
          </div>
        </Card>

        {/* Address Information */}
        <Card title='Address Information'>
          <div className='space-y-4'>
            <div>
              <Label>Street Address</Label>
              <p className='text-white'>{user.address.street}</p>
            </div>
            <div>
              <Label>Suite</Label>
              <p className='text-white'>{user.address.suite}</p>
            </div>
            <div>
              <Label>City</Label>
              <p className='text-white'>{user.address.city}</p>
            </div>
            <div>
              <Label>Zip Code</Label>
              <p className='text-white font-mono'>{user.address.zipcode}</p>
            </div>
            <div>
              <Label>Coordinates</Label>
              <p className='text-white text-sm'>
                <span className='font-mono'>
                  {user.address.geo.lat}, {user.address.geo.lng}
                </span>
                <br />
                <a
                  href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${interactive.link} text-xs`}
                >
                  View on Google Maps →
                </a>
              </p>
            </div>
          </div>
        </Card>

        {/* Company Information */}
        <Card title='Company Information'>
          <div className='space-y-4'>
            <div>
              <Label>Company Name</Label>
              <p className='text-white text-lg font-semibold'>
                {user.company.name}
              </p>
            </div>
            <div>
              <Label>Catch Phrase</Label>
              <p className='text-white italic'>
                &ldquo;{user.company.catchPhrase}&rdquo;
              </p>
            </div>
            <div>
              <Label>Business Focus</Label>
              <p className='text-white'>{user.company.bs}</p>
            </div>
            <div>
              <Label>User ID</Label>
              <p className='text-white font-mono'>#{user.id}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className='mt-8'>
        <Link href='/dashboard/users' className={forms.buttonSecondary}>
          ← Back to Users
        </Link>
      </div>
    </PageContent>
  );
}
