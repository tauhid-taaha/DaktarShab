import React from 'react';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60 bg-gray-900/90">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on left */}
        <Image
          src="/logo-single.png"
          alt="Logo"
          width={200}
          height={60}
          className="h-10 w-auto object-contain"
        /><h1>DAAKTARSHAB</h1>

        {/* Auth buttons on right */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton>
              <button className="text-sm px-4 py-1.5 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="text-sm px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;

