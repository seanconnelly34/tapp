import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  address: z.object({
    street: z.string().min(1, "Street is required"),
    suite: z.string().min(1, "Suite is required"),
    city: z.string().min(1, "City is required"),
    zipcode: z.string().min(1, "Zipcode is required"),
  }),
  phone: z.string().min(1, "Phone is required"),
  website: z.string().min(1, "Website is required"),
  company: z.object({
    name: z.string().min(1, "Company name is required"),
    catchPhrase: z.string().min(1, "Catch phrase is required"),
    bs: z.string().min(1, "Business focus is required"),
  }),
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;
