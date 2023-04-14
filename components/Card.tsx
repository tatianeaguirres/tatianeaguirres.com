import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <Link
    href={href}
    aria-label={`Link to ${title}`}
    className="md p-4 md:w-1/2 hover:text-primary-800 hover:dark:text-primary-300"
    style={{ maxWidth: '544px' }}
  >
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && (
        <Image
          alt=""
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <p className="prose mb-3 max-w-none text-gray-700 dark:text-gray-400">{description}</p>
        <p className="text-base font-medium leading-6 text-primary-800 dark:text-primary-300">
          Learn more &rarr;
        </p>
      </div>
    </div>
  </Link>
)

export default Card
