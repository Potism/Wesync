import Link from 'next/link';

import { Logo } from '@/components/Logo';

export const Navbar = (props: { reverse?: boolean }) => {
  const textColorClass = props.reverse ? 'text-gray-900' : 'text-gray-100';

  const textMobileClass = props.reverse ? 'text-gray-100' : 'text-gray-900';
  const bgClass = props.reverse ? 'bg-gray-900' : 'bg-gray-100';

  return (
    <div className={`sticky top-0 z-30 pb-2 backdrop-blur-2xl`}>
      <div className="container navbar mx-auto px-3">
        <div className="navbar-start">
          <Link href="/">
            <Logo black={props.reverse} />
          </Link>
        </div>
        <div className="navbar-end">
          <div className={`dropdown dropdown-end sm:hidden`}>
            <label tabIndex={0} className={`btn btn-circle btn-ghost`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 ${textColorClass}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`w-30 menu dropdown-content rounded-box menu-lg z-[1] shadow ${bgClass} ${textMobileClass}`}
            >
              <li>
                <Link href="/tech">Tech</Link>
              </li>
              <li>
                <Link href="/education">Education</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div
            className={`hidden flex-row justify-between space-x-10 sm:block ${textColorClass}`}
          >
            <Link href="/tech">TECH</Link>
            <Link href="/education">EDUCATION</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/about">ABOUT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
