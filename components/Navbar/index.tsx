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

class NavItem {
  constructor(name: string,
    url: string,
    hideMobile: boolean,
    external: boolean,) {
    this.name = name;
    this.url = url;
    this.hideMobile = hideMobile;
    this.external = external;
  }

  name: string;
  url: string;
  hideMobile: boolean;
  external: boolean;
}

const navItems = [
  {
    name: 'Home',
    url: '/',
    hideMobile: false, external: false,
  },
  {
    name: 'bryan.wyern1@gmail.com',
    url: 'mailto:bryan.wyern1@gmail.com',
    hideMobile: true, external: true,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Transfusion',
    hideMobile: true, external: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/bryan-kok',
    hideMobile: true, external: true,
  },
  {
    name: 'Resume',
    url: 'https://r2.bryankok.com/assets/Bryan_Kok_Resume.pdf',
    hideMobile: false, external: true,
  }
] as NavItem[]

export default function Navbar() {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const toggleMobileExpanded = () => {
    setMobileExpanded(!mobileExpanded);
  }

  return (
    <>
      {/* expanding mobile panel (don't want it to be part of the mix-blend-mode) */}
      <div className={classNames('fixed', 'w-full', styles['mobile-panel'], {
        [styles['mobile-panel-expanded']]: mobileExpanded
      }, 'shadow-lg', 'shadow-teal-600/50')}>
        {/* inner container with padding */}
        <div className={classNames('pt-10', 'px-2', 'pb-2', 'space-y-1')}>

          {navItems
            .filter(({ hideMobile }) => hideMobile)
            .map(({ name, url, hideMobile, external }) =>
              external ?
                <MobileA target="_blank" href={url}>
                  {name}
                </MobileA>
                :
                <Link legacyBehavior href={url}>
                  <MobileA >
                    {name}
                  </MobileA>
                </Link>
            )}

        </div>
      </div>

      <nav className={classNames('fixed', 'mix-blend-difference', 'w-full', 'top-0', styles.navbar)}>
        <div className="w-full flex justify-end p-2.5 space-x-3 hidden sm:flex">

          {navItems.map(({ name, url, hideMobile, external }) =>
            external ?
              <NonDropdownA target="_blank" href={url}>
                {name}
              </NonDropdownA>
              :
              <Link legacyBehavior href={url}>
                <NonDropdownA>
                  {name}
                </NonDropdownA>
              </Link>
          )}

          <ThemeToggler />
        </div>


        {/* abbreviated mobile navbar */}
        <div className={classNames('mix-blend-difference', 'fixed', 'w-full', 'flex', 'justify-end', 'p-2.5', 'space-x-3', {
          'sm:hidden': !mobileExpanded
        })}>

          <button onClick={toggleMobileExpanded}>
            <MdExpandMore className={
              classNames(styles['expand-chevron'], {
                [styles.expanded]: mobileExpanded
              })
            } size={'1.5em'} />
          </button>

          {navItems
            .filter(({ hideMobile }) => !hideMobile)
            .map(({ name, url, hideMobile, external }) =>
              external ?
                <NonDropdownA target="_blank" href={url}>
                  {name}
                </NonDropdownA>
                :
                <Link legacyBehavior href={url}>
                  <NonDropdownA>
                    {name}
                  </NonDropdownA>
                </Link>
            )}
          <ThemeToggler />
        </div>


      </nav>
    </>
  )
}