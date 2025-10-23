"use client";
import { CircleUser } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import UserAvatarMenu from './UserAvatarMenu'

function TitleBar() {
  const [avatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  return (
    <div className='w-full flex flex-row p-5'>
        <div className='text-3xl font-bold'>
            <Image src={'/cloudx.png'} width={170} height={50} alt='CloudX Logo' />
        </div>
        <div className='ml-auto mr-2'>
          <div className='relative inline-block' onClick={()=>setIsAvatarMenuOpen(!avatarMenuOpen)} tabIndex={0} onBlur={() => setIsAvatarMenuOpen(false)}>
            <CircleUser width={40} height={40}/>
            {avatarMenuOpen && (<UserAvatarMenu />)}
          </div>
        </div>
    </div>
  )
}

export default TitleBar