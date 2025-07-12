# TAPP Job Assessment - User Management Dashboard

A modern, responsive user management dashboard built with Next.js 15 and React 19, demonstrating advanced React patterns, TypeScript proficiency, and clean architecture principles.

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## 🎯 Assessment Overview

This project demonstrates proficiency in modern React development, showcasing:

- **Clean Architecture**: Separation of concerns with dedicated service, component, and utility layers
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Modern React Patterns**: Custom hooks, component composition, and efficient state management
- **Code Quality**: Reusable components, consistent styling, and comprehensive error handling
- **User Experience**: Responsive design, loading states, and intuitive navigation

## ✨ Key Features

- **User Management Dashboard** with comprehensive user profiles
- **Responsive Design** that works seamlessly across all device sizes
- **Real-time Data Fetching** with React Query for optimal performance
- **Form Validation** using React Hook Form and Zod schemas
- **Error Handling** with user-friendly error messages and retry mechanisms
- **Reusable Component System** with consistent design patterns
- **Loading States** and skeleton screens for better UX
- **Navigation System** with breadcrumbs and intuitive routing

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety and developer experience
- **Tailwind CSS v4** - Utility-first CSS framework

### State Management & Data Fetching
- **React Query (@tanstack/react-query)** - Server state management
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation and type inference

### Development Tools
- **Turbopack** - Fast bundler for development
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   The `.env.example` file contains the required configuration:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   │   ├── forms/         # Form-specific components
│   │   ├── icons/         # SVG icon components
│   │   ├── layout/        # Layout components
│   │   └── sidebar/       # Sidebar components
│   ├── config/            # Application configuration
│   ├── dashboard/         # Dashboard pages and layouts
│   ├── hooks/             # Custom React hooks
│   ├── schemas/           # Zod validation schemas
│   ├── services/          # API services and data fetching
│   └── utils/             # Utility functions and styles
```

## 🏗 Architecture Highlights

### Component System
- **Atomic Design Principles**: Organized components from basic UI elements to complex layouts
- **Composition over Inheritance**: Flexible component composition patterns
- **Consistent Styling**: Centralized style system with reusable patterns

### Service Layer
```typescript
// Clean API abstraction
export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}/users`);
  // Comprehensive error handling
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }
  return response.json();
}
```

### Custom Hooks
```typescript
// React Query integration for efficient data fetching
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

### Type Safety
```typescript
// Comprehensive type definitions
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
```

## 🎨 Design System

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid development
- **Component Variants**: Consistent styling patterns across components
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Dark Theme**: Modern dark UI with carefully chosen color palette

### Reusable Components
- **Button**: Multiple variants (primary, secondary, danger)
- **Card**: Flexible container with consistent styling
- **Modal**: Accessible modal system with backdrop and focus management
- **Form Components**: Validated inputs with error states
- **Loading States**: Skeleton screens and spinners

## 🔧 Development Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌟 Technical Decisions

### Why React Query?
- **Caching**: Intelligent caching reduces unnecessary API calls
- **Background Updates**: Automatic refetching keeps data fresh
- **Error Handling**: Built-in error states and retry mechanisms
- **Loading States**: Automatic loading state management

### Component Architecture
- **Single Responsibility**: Each component has a clear, focused purpose
- **Prop Interfaces**: Well-defined TypeScript interfaces for all props
- **Error Boundaries**: Graceful error handling at component level
- **Accessibility**: ARIA labels and keyboard navigation support

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting with Next.js
- **Image Optimization**: Next.js Image component for optimized loading
- **Bundle Analysis**: Optimized imports and tree shaking

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Environment Variables
Ensure the following environment variables are set in production:
- `NEXT_PUBLIC_API_BASE_URL`: API endpoint URL

### Platform Deployment
This application is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** containers

## 📝 Code Quality

### Standards
- **TypeScript**: Strict mode enabled for maximum type safety
- **ESLint**: Configured with Next.js recommended rules
- **Component Patterns**: Consistent patterns across all components
- **Error Handling**: Comprehensive error boundaries and user feedback

### Testing Considerations
The codebase is structured for easy testing with:
- Clear separation of concerns
- Pure functions for utilities
- Mockable API layer
- Isolated component logic

## 🤝 Development Process

This project demonstrates:
- **Git Best Practices**: Meaningful commit messages and branch strategy
- **Code Organization**: Logical file structure and naming conventions
- **Documentation**: Comprehensive inline documentation
- **Scalability**: Architecture that supports future feature additions

---

**Built with ❤️ for the TAPP Assessment**

*This project showcases modern React development practices, clean architecture, and attention to detail in both code quality and user experience.*
