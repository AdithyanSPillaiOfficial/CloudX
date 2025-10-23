import { FilePlus, FileUp, FolderPlus, FolderUp } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'

function NewMenu() {
    const menuItems = [
        {
            name : "New File",
            icon : (<FilePlus />),
            action : () => {toast.success("New File Created")}
        },
        {
            name : "New Folder",
            icon : (<FolderPlus />),
            action : () => {toast.success("New Folder Created")}
        },
        {
            name : "Upload File",
            icon : (<FileUp />),
            action : () => {toast.success("File Uploaded Sucessfully")}
        },
        {
            name : "Upload Folder",
            icon : (<FolderUp />),
            action : () => {toast.success("Folder Uploaded Sucessfully")}
        }
    ]
  return (
    <div className='absolute left-40 top-0 bg-white z-10 shadow-xl p-3'>
        {menuItems.map((menuItem, index) => (
            <div className='w-50 p-4 hover:bg-[#c6f7ec67] rounded-2xl flex flex-row gap-5' onClick={menuItem.action} key={index}>
                {menuItem.icon}
                <p>{menuItem.name}</p>
            </div>
        ))}
    </div>
  )
}

export default NewMenu