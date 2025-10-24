import { Folder } from 'lucide-react'
import React from 'react'

function FolderWidget({folder}) {
  return (
    <div className='w-70 h-min rounded-2xl bg-[#e7fff9] hover:bg-teal-100 flex flex-row p-2 gap-2 items-center'>
        <Folder fill='teal' color='teal' />
        <div>
            <p className='font-bold'>{folder.name}</p>
            <p>0 Files, 0 bytes</p>
        </div>
    </div>
  )
}

export default FolderWidget