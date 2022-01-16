import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';
import ThemeToggler from '../ThemeToggler';

import classNames from "classnames";

import styles from '../../styles/Navbar.module.css';

/*const _MobileA = styled.a.attrs({
  className: 'p-2 rounded-md block hover:bg-gray-400 hover:text-white active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 cursor-pointer'
})``;*/

const MobileA = styled.a.attrs({
  className: 'p-2 block underline-offset-4 hover:underline hover:decoration-4 focus:outline-none cursor-pointer'
})`
  color: var(--colors-primary);
`;

const NonDropdownA = styled.a.attrs({
  className: 'underline-offset-4 hover:underline hover:decoration-4 focus:outline-none cursor-pointer'
})``;


{/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">annoyed</span>
  </span> */}

export default () => {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const toggleMobileExpanded = () => {
    setMobileExpanded(!mobileExpanded);
  }

  return (
    <nav className={classNames('absolute', 'w-full', 'top-0', styles.navbar)}>
      <div className="mix-blend-difference fixed w-full flex justify-end p-2.5 space-x-3 hidden sm:flex">
        <Link href='/'>
          <NonDropdownA>
            bryan.kok@outlook.com
          </NonDropdownA>
        </Link>
        <Link href='/'>
          <NonDropdownA>
            GitHub
          </NonDropdownA>
        </Link>
        <Link href='/'>
          <NonDropdownA>
            Resume
          </NonDropdownA>
        </Link>
        <ThemeToggler />
      </div>

      {/* expanding mobile panel */}
      <div className={classNames('fixed', 'w-full', styles['mobile-panel'], {
        [styles['mobile-panel-expanded']]: mobileExpanded
      }, 'shadow-lg', 'shadow-teal-600/50')}>
        {/* inner container with padding */}
        <div className={classNames('pt-10', 'px-2', 'pb-2', 'space-y-1')}>

          <Link href='/'>
            <MobileA>GitHub</MobileA>
          </Link>

          <Link href='/'>
            <MobileA>bryan.kok@outlook.com</MobileA>
          </Link>
        </div>

      </div>

      {/* abbreviated mobile navbar */}
      <div className="mix-blend-difference fixed w-full flex justify-end p-2.5 space-x-3 sm:hidden">

        <button onClick={toggleMobileExpanded}>
          <MdExpandMore className={
            classNames(styles['expand-chevron'], {
              [styles.expanded]: mobileExpanded
            })
          } size={'1.5em'} />
        </button>

        <Link href='/'>
          <NonDropdownA>
            Resume
          </NonDropdownA>
        </Link>
        <ThemeToggler />
      </div>


    </nav>
  )
}