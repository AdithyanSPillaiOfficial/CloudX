"use client";
import DragDropWidget from '@/widgets/DragDropWidget';
import FolderWidget from '@/widgets/FolderWidget'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function page() {
  const [contents, setContents] = useState([
    {
      name : "Folder 1"
    },
    {
      name : "Folder 2"
    },
    {
      name : "Folder 3"
    },
    {
      name : "Folder 4"
    },
    {
      name : "Folder 5"
    },
    {
      name : "Folder 6"
    },
    {
      name : "Folder 7"
    },
    {
      name : "Folder 8"
    },
    {
      name : "Folder 9"
    },
    {
      name : "Folder 10"
    }
  ])
  const handleFileDrop = (files) => {
    console.log("Uploaded Files : ", files);
    //files.map( file => toast.success("Uploaded : "+file.name));
    Array.from(files).map(file => toast.success("Uploaded "+file.name))
  }
  return (
    <div className='w-full h-full rounded-2xl bg-white p-5 flex flex-wrap gap-5 items-start content-start'>
        {contents.map((content, index) => (
          <FolderWidget folder={content} key={index}/>
        ))}
        <DragDropWidget onDrop={handleFileDrop}/>
    </div>
  )
}

export default page