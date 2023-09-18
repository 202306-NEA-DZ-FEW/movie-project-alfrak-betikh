import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ currentPage, totalPages, getPageLink }) => {
  const router = useRouter();
  const { query } = router;

  const renderPageLink = (page) => {
    const updatedQuery = {
      ...query,
      page: page.toString(),
    };

    return (
      <Link
        href={{ pathname: router.pathname, query: updatedQuery }}
        key={page}
      >
        <li
          className={`relative block rounded px-3 py-1.5 text-sm text-content transition-all duration-300 hover:bg-accent ${
            currentPage === page ? "bg-accent text-white" : ""
          }`}
        >
          {page}
        </li>
      </Link>
    );
  };

  const renderDots = () => (
    <li
      key="dots"
      className="relative block rounded px-3 py-1.5 text-sm text-content transition-all duration-300 hover:bg-accent"
    >
      ...
    </li>
  );

  const renderFirstPage = () => {
    if (totalPages > 2 && currentPage > 3) {
      return renderPageLink(1);
    }
    return null;
  };

  const renderLastPage = () => {
    if (totalPages > 2 && currentPage < totalPages - 2) {
      return renderPageLink(totalPages);
    }
    return null;
  };

  return (
    <ul className="list-style-none flex">
      {currentPage > 1 && (
        <Link href={getPageLink(currentPage - 1)} key="prev">
          <li className="relative block font-bold rounded px-3 py-1.5 text-sm text-content transition-all duration-300 hover:bg-accent">
            Previous
          </li>
        </Link>
      )}

      {renderFirstPage()}

      {currentPage > 3 && renderDots()}

      {currentPage > 2 && renderPageLink(currentPage - 1)}

      {renderPageLink(currentPage)}

      {currentPage < totalPages - 1 && renderPageLink(currentPage + 1)}

      {totalPages > 2 && currentPage < totalPages - 2 && renderDots()}

      {renderLastPage()}

      {currentPage < totalPages - 1 && (
        <Link href={getPageLink(currentPage + 1)} key="next">
          <li className="relative block font-bold rounded px-3 py-1.5 text-sm text-content transition-all duration-300 hover:bg-accent">
            Next
          </li>
        </Link>
      )}
    </ul>
  );
};

export default Pagination;
