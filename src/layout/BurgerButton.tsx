import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const BurgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add a click event listener to the document
      document.addEventListener('click', handleClickOutside);
      // Prevent scrolling when the menu is open
      document.documentElement.classList.add('overflow-hidden');
    } else {
      // Remove the click event listener when the menu is closed
      document.removeEventListener('click', handleClickOutside);
      // Allow scrolling when the menu is closed
      document.documentElement.classList.remove('overflow-hidden');
    }

    return () => {
      // Clean up the event listener and scrolling class when the component unmounts
      document.removeEventListener('click', handleClickOutside);
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className="md:hidden" ref={menuRef}>
      <button
        className={`p-2 focus:outline-none ${
          isOpen ? 'text-red-500' : 'text-white'
        } ${isOpen ? 'bg-white' : 'bg-transparent'}`}
        onClick={toggleMenu}
      >
        <svg
          className={`h-12 w-12 ${isOpen ? 'text-gray-900' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-gray-900 text-5xl text-white">
          {/* Replace the placeholder links with Next.js Link components */}
          <Link href="/">Home</Link>
          <Link href="/tech">Tech</Link>
          <Link href="/education">Education</Link>
          <Link href="/about">About</Link>
        </div>
      )}
    </div>
  );
};

export default BurgerButton;
