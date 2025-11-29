import Link from 'next/link';
import React from 'react'

function App() {
  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
      <Link href={"/gallery"}>
        <button className='px-8 py-2 rounded-full bg-black text-white hover:bg-black/80 cursor-pointer'>Gallery</button>
      </Link>
    </div>
  )
}

export default App;