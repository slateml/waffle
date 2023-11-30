"use client"

import React, { useState } from 'react';

import { File } from 'lucide-react';
import Waffle from './Waffle.jsx'

const FileExplorer = () => {
    const [files, setFiles] = useState([]);

    return (
        <div className="file-explorer h-full">
            <div className='flex space-x-2'>
                <div><Waffle /></div>
                <div>Waffle</div>
            </div>
            <div className="file-stack mt-8">
                <div className='text-sm'>Files</div>
                {Array.isArray(files) && files.map(file => (
                    <div key={file.id} className="file">
                        <File size={14} className='mr-2 flex-shrink-0' />
                        <div className='truncate text-ellipsis'>{file.name}</div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export { FileExplorer };
