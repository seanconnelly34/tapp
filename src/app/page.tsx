"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard
    router.push("/dashboard");
  }, [router]);

  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-white mb-4'>Welcome</h1>
        <p className='text-gray-400'>Redirecting to dashboard...</p>
      </div>
    </div>
  );
}
