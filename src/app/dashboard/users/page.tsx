"use client";

import React from "react";
import {
  Button,
  FormModal,
  StatsOverview,
  DataList,
  UserCard,
  PageLoadingState,
} from "../../components";
import { CreateUserForm } from "../../components/forms";
import { CreateUserFormData } from "../../schemas/userSchema";
import { PageContent, PageHeader } from "../../components/layout";
import { useUsers } from "../../services/profiles";
import { useModalWithSuccess } from "../../hooks";

export default function UsersPage() {
  const { data: users, isFetching, error, refetch } = useUsers();

  const {
    isOpen: isCreateModalOpen,
    showSuccess: showSuccessMessage,
    openModal: openCreateModal,
    closeModal: closeCreateModal,
    handleSubmit: handleCreateUser,
  } = useModalWithSuccess<CreateUserFormData>(() => {
    // User creation functionality will be implemented when backend API is ready
  });

  // Show page-level loading state on initial load or when refetching
  if (isFetching && !users) {
    return (
      <PageLoadingState
        title='Loading Users...'
        subtitle='Fetching user data and statistics'
      />
    );
  }

  // Calculate stats
  const userStats = [
    {
      title: "Total Users",
      value: users?.length || 0,
      valueColor: "text-blue-500",
    },
    {
      title: "Active Users",
      value: users?.length || 0,
      valueColor: "text-green-500",
    },
    {
      title: "Companies",
      value: users ? new Set(users.map((u) => u.company.name)).size : 0,
      valueColor: "text-purple-500",
    },
  ];

  return (
    <PageContent>
      <PageHeader
        title='Users'
        description='Manage and view user information'
        action={
          <Button
            text='Create User'
            variant='primary'
            onClick={openCreateModal}
          />
        }
      />

      {/* Stats Overview */}
      <StatsOverview title='Users Overview' stats={userStats} columns={3} />

      {/* Users List */}
      <DataList
        title='All Users'
        data={users}
        isLoading={false}
        error={error}
        onRetry={refetch}
        renderItem={(user) => <UserCard key={user.id} user={user} />}
        emptyMessage='No users found.'
        loadingMessage='Loading users...'
        columns={3}
      />

      {/* Create User Modal */}
      <FormModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        title='Create New User'
        showSuccess={showSuccessMessage}
        successMessage='User created successfully!'
        form={<CreateUserForm onSubmit={handleCreateUser} />}
        actions={[
          {
            text: "Cancel",
            variant: "secondary",
            onClick: closeCreateModal,
          },
          {
            text: "Create User",
            variant: "primary",
            type: "submit",
          },
        ]}
      />
    </PageContent>
  );
}
