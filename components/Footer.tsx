import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-5 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-5 flex text-sm text-gray-700 dark:text-gray-400">
          {`${siteMetadata.author} • © ${new Date().getFullYear()} • Made with `}
          <span className="text-red-500 mx-1" aria-label="love">
            ❤
          </span>
          {`&`}
          <Link className="ml-1" href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Nextjs
          </Link>
        </div>
      </div>
    </footer>
  )
}
