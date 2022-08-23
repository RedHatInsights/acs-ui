import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import {
  EmptyState,
  EmptyStateIcon,
  Title,
  EmptyStateBody,
  EmptyStatePrimary,
  Button,
  Card,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Pagination,
  Bullseye,
  EmptyStateVariant,
} from '@patternfly/react-core';
import {
  ActionsColumn,
  TableComposable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@patternfly/react-table';
import { CubesIcon, SearchIcon } from '@patternfly/react-icons';

import usePagination from '../../hooks/usePagination';
import useInstances from '../../hooks/apis/useInstances';
import useCreateInstance from '../../hooks/apis/useCreateInstance';
import useDeleteInstance from '../../hooks/apis/useDeleteInstance';

import CreateInstanceModal from './CreateInstanceModal';
import DeleteInstanceModal from './DeleteInstanceModal';
import InstanceDetailsDrawer from './InstanceDetailsDrawer';
import { getDateTimeDifference } from '../../utils/date';
import Status from '../../components/Status';
import InstancesToolbarSearchFilter from './InstancesToolbarSearchFilter';
import useTableSort from '../../hooks/useTableSort';
import { regionValueToLabel } from '../../utils/region';
import { cloudProviderValueToLabel } from '../../utils/cloudProvider';
import { filtersToSearchQuery } from '../../utils/searchQuery';

const sortFields = [
  'name',
  'cloud_provider',
  'region',
  'owner',
  'status',
  'created_at',
];
const defaultSortOption = {
  field: 'name',
  direction: 'asc',
};

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
function InstancesPage() {
  const history = useHistory();

  const { page, perPage, onSetPage, onPerPageSelect } = usePagination();
  const { sortOption, getSortParams } = useTableSort({
    sortFields,
    defaultSortOption,
  });
  const [filters, setFilters] = useState({});

  const { data, isFetching } = useInstances({
    query: {
      page,
      size: perPage,
      orderBy: `${sortOption.field} ${sortOption.direction}`,
      search: filtersToSearchQuery(filters),
    },
  });
  const createInstance = useCreateInstance();
  const deleteInstance = useDeleteInstance();
  const [creatingInstance, setCreatingInstance] = useState(null);
  const [deletingInstance, setDeletingInstance] = useState(null);
  const [viewingInstance, setViewingInstance] = useState(null);

  const instances = data?.items || [];

  useEffect(() => {
    insights?.chrome?.appAction?.('instances-page');
  }, []);

  function onRequestCreate(values) {
    const response = createInstance.mutateAsync({
      region: values.region,
      cloud_provider: values.cloud_provider,
      name: values.name,
      multi_az: values.availabilityZones === 'multi',
    });
    return response.catch((error) => {
      return error;
    });
  }

  function closeCreateInstanceModal() {
    setCreatingInstance(null);
  }

  function onRequestDelete(instanceID) {
    const response = deleteInstance.mutateAsync(instanceID);
    return response.catch((error) => {
      return error;
    });
  }

  function closeDeleteInstanceModal() {
    setDeletingInstance(null);
  }

  function closeInstanceDetailsDrawer() {
    setViewingInstance(null);
  }

  function onClearFilters() {
    setFilters({});
  }

  let content = null;

  if (
    !isFetching &&
    instances?.length === 0 &&
    Object.keys(filters).length === 0
  ) {
    content = (
      <EmptyState>
        <EmptyStateIcon icon={CubesIcon} />
        <Title size="lg" headingLevel="h4">
          No ACS instances.
        </Title>
        <EmptyStateBody>Create one to get started.</EmptyStateBody>
        <EmptyStatePrimary>
          <Button variant="primary" onClick={() => setCreatingInstance({})}>
            Create ACS instance
          </Button>
        </EmptyStatePrimary>
      </EmptyState>
    );
  } else {
    content = (
      <>
        <Toolbar clearAllFilters={onClearFilters}>
          <ToolbarContent>
            <InstancesToolbarSearchFilter
              filters={filters}
              setFilters={setFilters}
            />
            <ToolbarItem>
              <Button variant="primary" onClick={() => setCreatingInstance({})}>
                Create ACS instance
              </Button>
            </ToolbarItem>
            {instances.length !== 0 && (
              <ToolbarItem
                variant="pagination"
                align={{ default: 'alignRight' }}
              >
                <Pagination
                  itemCount={instances.length}
                  perPage={perPage}
                  page={page}
                  onSetPage={onSetPage}
                  widgetId="acs-instances-top-pagination"
                  onPerPageSelect={onPerPageSelect}
                  isCompact
                />
              </ToolbarItem>
            )}
          </ToolbarContent>
        </Toolbar>
        <TableComposable aria-label="ACS instances table">
          <Thead>
            <Tr>
              <Th sort={getSortParams('name')}>Name</Th>
              <Th sort={getSortParams('cloud_provider')}>Cloud provider</Th>
              <Th sort={getSortParams('region')}>Region</Th>
              <Th sort={getSortParams('owner')}>Owner</Th>
              <Th sort={getSortParams('status')}>Status</Th>
              <Th sort={getSortParams('created_at')}>Time created</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {!isFetching && instances.length === 0 ? (
              <Tr>
                <Td colSpan={8}>
                  <Bullseye>
                    <EmptyState variant={EmptyStateVariant.small}>
                      <EmptyStateIcon icon={SearchIcon} />
                      <Title headingLevel="h2" size="lg">
                        No results found
                      </Title>
                      <EmptyStateBody>
                        Clear all filters and try again.
                      </EmptyStateBody>
                      <Button variant="link" onClick={onClearFilters}>
                        Clear all filters
                      </Button>
                    </EmptyState>
                  </Bullseye>
                </Td>
              </Tr>
            ) : (
              instances?.map((instance) => {
                const instanceDetailsURL = `/instances/instance/${instance.id}`;
                return (
                  <Tr
                    key={instance.name}
                    onRowClick={(event) => {
                      if (event.target.getAttribute('type') !== 'button') {
                        setViewingInstance(instance);
                      }
                    }}
                    isRowSelected={viewingInstance?.name === instance?.name}
                  >
                    <Td dataLabel="Name">
                      <Link to={instanceDetailsURL}>{instance.name}</Link>
                    </Td>
                    <Td dataLabel="Cloud provider">
                      {cloudProviderValueToLabel(instance.cloud_provider)}
                    </Td>
                    <Td dataLabel="Region">
                      {regionValueToLabel(instance.region)}
                    </Td>
                    <Td dataLabel="Owner">{instance.owner}</Td>
                    <Td dataLabel="Status">
                      <Status status={instance.status} />
                    </Td>
                    <Td dataLabel="Time created">
                      {getDateTimeDifference(instance.created_at)}
                    </Td>
                    <Td isActionCell>
                      <ActionsColumn
                        items={[
                          {
                            title: 'Details',
                            onClick: (event) => {
                              event.preventDefault();
                              history.push(instanceDetailsURL);
                            },
                          },
                          {
                            title: 'Delete',
                            onClick: (event) => {
                              event.preventDefault();
                              setDeletingInstance(instance);
                            },
                          },
                        ]}
                      />
                    </Td>
                  </Tr>
                );
              })
            )}
          </Tbody>
        </TableComposable>
        {instances.length !== 0 && (
          <Toolbar>
            <ToolbarContent>
              <ToolbarItem
                variant="pagination"
                align={{ default: 'alignRight' }}
              >
                <Pagination
                  itemCount={instances.length}
                  perPage={perPage}
                  page={page}
                  onSetPage={onSetPage}
                  widgetId="acs-instances-top-pagination"
                  onPerPageSelect={onPerPageSelect}
                />
              </ToolbarItem>
            </ToolbarContent>
          </Toolbar>
        )}
      </>
    );
  }

  return (
    <InstanceDetailsDrawer
      isExpanded={!!viewingInstance}
      instance={viewingInstance}
      onClose={closeInstanceDetailsDrawer}
    >
      <PageHeader>
        <PageHeaderTitle title="ACS Instances" />
      </PageHeader>
      <Main>
        <Card>{content}</Card>
        <CreateInstanceModal
          isOpen={!!creatingInstance}
          onClose={closeCreateInstanceModal}
          onRequestCreate={onRequestCreate}
        />
        <DeleteInstanceModal
          instance={deletingInstance}
          isOpen={!!deletingInstance}
          onClose={closeDeleteInstanceModal}
          onRequestDelete={onRequestDelete}
        />
      </Main>
    </InstanceDetailsDrawer>
  );
}

export default withRouter(InstancesPage);
