import { OnPerPageSelect, OnSetPage } from '@patternfly/react-core';
import { useState } from 'react';

type UsePaginationResults = {
  page: number;
  perPage: number;
  onSetPage: OnSetPage;
  onPerPageSelect: OnPerPageSelect;
};

function usePagination(): UsePaginationResults {
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
