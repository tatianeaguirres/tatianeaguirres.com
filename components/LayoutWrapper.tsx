import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from './Image'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <Link
            href="/"
            className="hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400"
          >
            <div className="flex items-center justify-between">
              <Image
                alt=""
                src="/static/images/logo.png"
                className="object-cover object-center"
                width={60}
                height={60}
              />
              {typeof siteMetadata.headerTitle === 'string' ? (
                <span className="hidden ml-3 text-4xl font-logo sm:block">
                  {siteMetadata.headerTitle}
                </span>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
          <div className="flex items-center text-base leading-5">
            <nav className="hidden sm:block">
              <ul className="flex items-center">
                {headerNavLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="p-1 font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400 sm:p-4"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
