import React from 'react'

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 gap-4 h-16 fixed top-0 left-0 right-0 bg-white">
            <h1 className='text-2xl font-bold text-blue-500'>Clerk Auth</h1>
            <div className='flex items-center gap-4'>
                <SignedOut>
                    <SignInButton mode='modal'/>
                    <SignUpButton>
                        <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                        </button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar