import Mail from './mail.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={kind}
    >
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-secondary-600 dark:text-secondary-400 dark:text-gray-200 dark:hover:text-secondary-600 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
