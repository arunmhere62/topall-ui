'use client';

// import { Link } from '@/i18n/routing';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background py-20 text-center">
      <Image src="/images/all-img/404-2.svg" alt="" height={300} width={300} />
      <div className="mx-auto mt-12 w-full max-w-[546px]">
        <h4 className="mb-4 text-default-900">Page not found</h4>
        <div className="mb-10 text-base font-normal dark:text-white">
          The page you are looking for might have been removed had its name changed or is temporarily unavailable.
        </div>
      </div>
      <div className="mx-auto w-full max-w-[300px]">
        <Link href="/admin/dashboard" className="btn block bg-white text-center transition-all duration-150 hover:bg-opacity-75">
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
