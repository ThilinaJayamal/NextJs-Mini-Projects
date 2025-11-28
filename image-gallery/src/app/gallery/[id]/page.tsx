import { images } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

async function ImageViewer({ params }: { params: Promise<{ id: number }> }) {

    const { id } = await params;
    const image = images[id - 1];
    return (
        <div className='w-full h-screen flex justify-center items-center bg-gray-500/40'>
            <Image src={image?.img} alt='' className='rounded-xl h-auto w-auto' />
        </div>
    )
}

export default ImageViewer