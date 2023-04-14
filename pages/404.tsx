import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <span className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </span>
      </div>
      <div className="max-w-md">
        <h1 className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </h1>
        <p className="mb-8">
          But don't worry, you can find plenty of other things on the homepage.
        </p>
        <Link href="/">
          <button className="focus:shadow-outline-primary inline rounded-lg border border-transparent bg-secondary-700 px-4 py-2 font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-secondary-500 focus:outline-none">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
