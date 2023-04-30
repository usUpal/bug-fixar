import React from "react";

const Header = () => {
  return (
    <header className='bg-gray-900 text-white'>
      <nav className='container mx-auto flex items-center justify-between flex-wrap p-6'>
        <div className='flex items-center flex-shrink-0 mr-6'>
          <svg className='fill-current h-8 w-8 mr-2' viewBox='0 0 24 24'>
            <path d='M12 .75a11.25 11.25 0 1 0 11.25 11.25A11.26 11.26 0 0 0 12 .75zm0 20.25a9 9 0 1 1 9-9 9 9 0 0 1-9 9z' />
          </svg>
          <span className='font-semibold text-xl tracking-tight'>
            Bug Fixer
          </span>
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white'>
            <svg className='fill-current h-3 w-3' viewBox='0 0 20 20'>
              {/* <title>Menu</title> */}
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4'
            >
              Docs
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4'
            >
              Examples
            </a>
            <a
              href='https://medium.com/@u.saha.upal'
              className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white'
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href='https://github.com/usUpal/bug-fixar'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0'
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
