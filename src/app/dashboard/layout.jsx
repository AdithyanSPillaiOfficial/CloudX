"use client";
import SideMenu from '@/components/SideMenu'
import TitleBar from '@/components/TitleBar'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function DashboardLayout({ children }) {
  const router = useRouter();
  const sessionId = Cookies.get("sessionid");
  const user = Cookies.get('user');
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
    if (!(sessionId || user)) {
      toast.warning("Please Login")
      router.replace("/login")
    }
  }, [])

  // prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className='w-full h-full flex flex-col box-border bg-teal-100'>
      {sessionId && (
        <>
          <TitleBar />
          <div className='w-full h-full mb-10 flex flex-row px-5'>
            <SideMenu />
            {children}
          </div>
        </>
      )}
    </div>
  )
}

export default DashboardLayout