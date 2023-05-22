import Link from "next/dist/client/link";
import { PropsWithChildren } from "react";
import { BsApple, BsArrowRightCircle, BsBrowserFirefox, BsGithub, BsGooglePlay } from 'react-icons/bs';

export default function MajorLinkButton(props: PropsWithChildren<{ text: string, href: string }>) {
  const { text, href } = props;
  return <Link legacyBehavior href={href} passHref>
    <a className="flex flex-row space-x-2 items-center bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
      <span className="whitespace-nowrap text-lg">{text}</span>
      <BsArrowRightCircle size={20} />
    </a>
  </Link>
}

export function MajorExternalLinkButton(props: PropsWithChildren<{ text: string, href: string, target?: string }>) {
  const { text, href, target } = props;
  return <a href={href} target={target} className="flex flex-row space-x-2 items-center bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    <span className="whitespace-nowrap text-lg">{text}</span>
    <BsArrowRightCircle size={20} />
  </a>
}

export function GithubLinkButton(props: PropsWithChildren<{ text: string, href: string, target?: string }>) {
  const { text, href, target } = props;
  return <a href={href} target={target} className="flex flex-row space-x-2 items-center dark:bg-zinc-700 bg-zinc-800 dark:hover:bg-zinc-800 hover:bg-zinc-900 focus:outline-none focus:ring focus:ring-zinc-400 active:bg-zinc-900 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    <BsGithub size={20} />
    <span className="whitespace-nowrap text-lg">{text}</span>
  </a>
}

export function AppStoreLinkButton(props: PropsWithChildren<{ text: string, href: string, target?: string }>) {
  const { text, href, target } = props;
  return <a href={href} target={target} className="flex flex-row space-x-2 items-center dark:bg-blue-700 bg-blue-800 dark:hover:bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-900 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    <BsApple size={20} />
    <span className="whitespace-nowrap text-lg">{text}</span>
  </a>
}


export function PlayStoreLinkButton(props: PropsWithChildren<{ text: string, href: string, target?: string }>) {
  const { text, href, target } = props;
  return <a href={href} target={target} className="flex flex-row space-x-2 items-center dark:bg-green-700 bg-green-800 dark:hover:bg-green-800 hover:bg-green-900 focus:outline-none focus:ring focus:ring-green-400 active:bg-green-900 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    <BsGooglePlay size={20} />
    <span className="whitespace-nowrap text-lg">{text}</span>
  </a>
}

// BsBrowserFirefox

export function FirefoxLinkButton(props: PropsWithChildren<{ text: string, href: string, target?: string }>) {
  const { text, href, target } = props;
  return <a href={href} target={target} className="flex flex-row space-x-2 items-center dark:bg-orange-600 bg-orange-700 dark:hover:bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-800 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    <BsBrowserFirefox size={20} />
    <span className="whitespace-nowrap text-lg">{text}</span>
  </a>
}