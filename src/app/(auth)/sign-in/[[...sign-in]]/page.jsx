import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => (
  <div className='flex min-h-screen w-full flex-col items-center justify-between gap-0 bg-black bg-[url("/auth/signin.png")] bg-cover bg-center'>
    <span className="w-full ">
      <Link href="/">
        <Image src="/auth/logo.svg" width={100} height={100} alt="logo" className="hover:z-20" />
      </Link>
    </span>
    <SignIn />
    <span className="text-slate-300 mb-5 flex gap-2   text-xs">
      <Link href="/privacy" className="hover:text-white hover:underline">
        Privacy
      </Link>
      <Link href="/contact" className="hover:text-white hover:underline">
        Contact
      </Link>
    </span>
  </div>
);
export default SignInPage;
