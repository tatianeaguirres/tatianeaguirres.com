import Link from '@/components/Link'

interface Props {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-70 disabled:dark:opacity-80"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            className="text-secondary-800 dark:text-secondary-300 hover:text-secondary-600 dark:hover:text-secondary-400"
            href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-70 disabled:dark:opacity-80"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link
            className="text-secondary-800 dark:text-secondary-300 hover:text-secondary-600 dark:hover:text-secondary-400"
            href={`/blog/page/${currentPage + 1}`}
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}
