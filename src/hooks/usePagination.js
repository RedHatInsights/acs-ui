import { useState } from 'react';

function usePagination() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  function onSetPage(_, newPage) {
    setPage(newPage);
  }

  function onPerPageSelect(_, newPerPage) {
    setPerPage(newPerPage);
  }

  return {
    page,
    perPage,
    onSetPage,
    onPerPageSelect,
  };
}

export default usePagination;
