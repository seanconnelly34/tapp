"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SidebarLogo,
  SidebarNavigation,
  SidebarFooter,
  BurgerIcon,
  ErrorBoundary,
} from "../components";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='flex h-screen bg-black'>
      {/* Mobile Header */}
      <div className='md:hidden fixed top-0 left-0 right-0 z-40 bg-zinc-900 border-b border-gray-800 p-4 flex items-center'>
        <button
          onClick={toggleMobileMenu}
          className='text-white hover:text-gray-300 transition-colors'
          aria-label='Toggle menu'
        >
          <BurgerIcon />
        </button>
        <Link
          href='/dashboard'
          className='ml-4 text-xl font-bold text-white hover:text-gray-300 transition-colors'
        >
          Dashboard
        </Link>
      </div>

      {/* Desktop Sidebar */}
      <div className='hidden md:flex w-64 h-screen bg-zinc-900 border-r border-gray-800 flex-col'>
        <SidebarLogo />
        <SidebarNavigation />
        <SidebarFooter />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarLogo onClick={closeMobileMenu} />
        <SidebarNavigation onLinkClick={closeMobileMenu} />
        <SidebarFooter />
      </div>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={closeMobileMenu}
        />
      )}

      {/* Main Content */}
      <main className='flex-1 overflow-auto pt-16 md:pt-0'>
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </div>
  );
}
