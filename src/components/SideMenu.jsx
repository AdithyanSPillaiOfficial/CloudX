"use client";
import { BookText, HardDrive, Home, Image, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import NewMenu from './NewMenu';

function SideMenu() {
    const [menuItems, setMenuItems] = useState([
        {
            name : "Home",
            route : "/",
            icon : (<Home />)
        },
        {
            name : "My Drive",
            route : "/mydrive",
            icon : (<HardDrive />)
        },
        {
            name : "Images",
            route : "/images",
            icon : (<Image />)
        },
        {
            name : "Videos",
            route : "/videos",
            icon : (<Video />)
        },
        {
            name : "Documents",
            route : "/documents",
            icon : (<BookText />)
        }
    ]);

    const [newMenuOpen, setNewMenuOpen] = useState(false);

    const router = useRouter();
  return (
    <div className='w-75 m-3'>
        <button className='h-15 w-30 my-5 rounded-2xl items-center justify-center bg-white flex flex-row gap-3 shadow-lg hover:shadow-xl hover:text-teal-700 transition-all duration-300 relative' onClick={() => setNewMenuOpen(!newMenuOpen)} onBlur={() => setNewMenuOpen(false)}>
            <p className='text-5xl'>+</p><p className='text-xl'>New</p>
            {newMenuOpen && (<NewMenu />)}
        </button>
        {menuItems.map((menuItem, index) => (
            <div className='w-full hover:bg-white p-3 rounded-2xl flex flex-row gap-3 items-center' key={index} onClick={() => router.push(menuItem.route)}>
                {menuItem.icon}
                {menuItem.name}
            </div>
        ))}
    </div>
  )
}

export default SideMenu