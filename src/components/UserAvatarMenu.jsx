"use client"
import Cookies from 'js-cookie';
import { CircleUser, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify'

function UserAvatarMenu() {
    const router = useRouter();
    function handleLogout() {
        Cookies.remove('sessionid');
        Cookies.remove('user');
        toast.success("Logged Out Sucessfully");
        router.replace("/login");
    }
  return (
    <div className='absolute right-0 mz-5 z-10 flex flex-col bg-white shadow-xl p-3'>
        <div className='p-5 flex flex-row gap-5 hover:bg-[#c6f7ec67] rounded-2xl'>
            <CircleUser />
            Profile
        </div>
        <div className='p-5 flex flex-row gap-5 hover:bg-[#c6f7ec67] rounded-2xl' onClick={handleLogout}>
            <LogOut />
            Logout
        </div>
    </div>
  )
}

export default UserAvatarMenu