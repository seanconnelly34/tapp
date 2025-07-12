"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema, CreateUserFormData } from "../../schemas/userSchema";
import { FormField, TextInput } from "./";

interface CreateUserFormProps {
  onSubmit: (data: CreateUserFormData) => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  const handleFormSubmit = (data: CreateUserFormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-6'>
      {/* Personal Information */}
      <div>
        <h3 className='text-lg font-medium text-white mb-4'>
          Personal Information
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-1'>
          <FormField label='Full Name' error={errors.name?.message} required>
            <TextInput
              {...register("name")}
              placeholder='Enter full name'
              error={!!errors.name}
            />
          </FormField>

          <FormField label='Username' error={errors.username?.message} required>
            <TextInput
              {...register("username")}
              placeholder='Enter username'
              error={!!errors.username}
            />
          </FormField>

          <FormField
            label='Email Address'
            error={errors.email?.message}
            required
          >
            <TextInput
              {...register("email")}
              type='email'
              placeholder='Enter email address'
              error={!!errors.email}
            />
          </FormField>

          <FormField
            label='Phone Number'
            error={errors.phone?.message}
            required
          >
            <TextInput
              {...register("phone")}
              type='tel'
              placeholder='Enter phone number'
              error={!!errors.phone}
            />
          </FormField>

          <FormField
            label='Website'
            error={errors.website?.message}
            required
            className='md:col-span-2'
          >
            <TextInput
              {...register("website")}
              type='text'
              placeholder='Enter website (e.g., google.com)'
              error={!!errors.website}
            />
          </FormField>
        </div>
      </div>

      {/* Address Information */}
      <div>
        <h3 className='text-lg font-medium text-white mb-4'>
          Address Information
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-1'>
          <FormField
            label='Street Address'
            error={errors.address?.street?.message}
            required
          >
            <TextInput
              {...register("address.street")}
              placeholder='Enter street address'
              error={!!errors.address?.street}
            />
          </FormField>

          <FormField
            label='Suite/Apartment'
            error={errors.address?.suite?.message}
            required
          >
            <TextInput
              {...register("address.suite")}
              placeholder='Enter suite/apartment'
              error={!!errors.address?.suite}
            />
          </FormField>

          <FormField
            label='City'
            error={errors.address?.city?.message}
            required
          >
            <TextInput
              {...register("address.city")}
              placeholder='Enter city'
              error={!!errors.address?.city}
            />
          </FormField>

          <FormField
            label='Zip Code'
            error={errors.address?.zipcode?.message}
            required
          >
            <TextInput
              {...register("address.zipcode")}
              placeholder='Enter zip code'
              error={!!errors.address?.zipcode}
            />
          </FormField>
        </div>
      </div>

      {/* Company Information */}
      <div>
        <h3 className='text-lg font-medium text-white mb-4'>
          Company Information
        </h3>
        <div className='grid grid-cols-1 gap-4 px-1'>
          <FormField
            label='Company Name'
            error={errors.company?.name?.message}
            required
          >
            <TextInput
              {...register("company.name")}
              placeholder='Enter company name'
              error={!!errors.company?.name}
            />
          </FormField>

          <FormField
            label='Catch Phrase'
            error={errors.company?.catchPhrase?.message}
            required
          >
            <TextInput
              {...register("company.catchPhrase")}
              placeholder='Enter company catch phrase'
              error={!!errors.company?.catchPhrase}
            />
          </FormField>

          <FormField
            label='Business Focus'
            error={errors.company?.bs?.message}
            required
          >
            <TextInput
              {...register("company.bs")}
              placeholder='Enter business focus'
              error={!!errors.company?.bs}
            />
          </FormField>
        </div>
      </div>
    </form>
  );
};

export default CreateUserForm;
