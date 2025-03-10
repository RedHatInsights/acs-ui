import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { Bullseye } from '@patternfly/react-core/dist/dynamic/layouts/Bullseye';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { EmptyState } from '@patternfly/react-core/dist/dynamic/components/EmptyState';
import { EmptyStateActions } from '@patternfly/react-core/dist/dynamic/components/EmptyState';
import { EmptyStateBody } from '@patternfly/react-core/dist/dynamic/components/EmptyState';
import { EmptyStateFooter } from '@patternfly/react-core/dist/dynamic/components/EmptyState';
import { EmptyStateVariant } from '@patternfly/react-core/dist/dynamic/components/EmptyState';
import { Pagination } from '@patternfly/react-core/dist/dynamic/components/Pagination';
import { Spinner } from '@patternfly/react-core/dist/dynamic/components/Spinner';
import { Toolbar } from '@patternfly/react-core/dist/dynamic/components/Toolbar';
import { ToolbarContent } from '@patternfly/react-core/dist/dynamic/components/Toolbar';
import { ToolbarItem } from '@patternfly/react-core/dist/dynamic/components/Toolbar';
import {
  ActionsColumn,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@patternfly/react-table';
import CubesIcon from '@patternfly/react-icons/dist/dynamic/icons/cubes-icon';
import SearchIcon from '@patternfly/react-icons/dist/dynamic/icons/search-icon';

import usePagination from '../../hooks/usePagination';
import useInstances from '../../hooks/apis/useInstances';
import useCreateInstance from '../../hooks/apis/useCreateInstance';
import useDeleteInstance from '../../hooks/apis/useDeleteInstance';
import useCloudAccounts from '../../hooks/apis/useCloudAccounts';
import useAnalytics from '../../hooks/useAnalytics';

import CreateInstanceModal from './CreateInstanceModal';
import DeleteInstanceModal from './DeleteInstanceModal';
import InstanceDetailsDrawer from './InstanceDetailsDrawer';
import { getDateTimeDifference } from '../../utils/date';
import Status from '../../components/Status';
import InstancesToolbarSearchFilter from './InstancesToolbarSearchFilter';
import useTableSort from '../../hooks/useTableSort';
import {
  AWS_PROVIDER,
  cloudProviderValueToLabel,
} from '../../utils/cloudProvider';
import { filtersToSearchQuery } from '../../utils/searchQuery';
import { linkBasename, mergeToBasename } from '../../utils/paths';
import RegionLabel from '../../components/RegionLabel';
import { useCloudRegions } from '../../hooks/apis/useCloudRegions';

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
  const navigate = useNavigate();

  const { analyticsTrack } = useAnalytics();
  const { page, perPage, onSetPage, onPerPageSelect } = usePagination();
  const { sortOption, getSortParams } = useTableSort({
    sortFields,
    defaultSortOption,
  });
  const [filters, setFilters] = useState({});

  const { data: cloudAccountsData } = useCloudAccounts();
  const cloudAccountIds =
    cloudAccountsData?.cloudAccounts?.map(
      (cloudAccount) => cloudAccount.cloudAccountId
    ) || [];

  const { data: regionList, isFetching: isFetchingRegions } = useCloudRegions({
    provider: AWS_PROVIDER,
  });
  const regions = useMemo(() => regionList?.items || [], [regionList]);

  const { data, isFetching } = useInstances({
    query: {
      page,
      size: perPage,
      orderBy: `${sortOption.field} ${sortOption.direction}`,
      search: filtersToSearchQuery(filters, regions),
    },
    // Refetch the data every 10 seconds
    refetchInterval: 10000,
  });

  const createInstance = useCreateInstance();
  const deleteInstance = useDeleteInstance();
  const [creatingInstance, setCreatingInstance] = useState(null);
  const [deletingInstance, setDeletingInstance] = useState(null);
  const [viewingInstance, setViewingInstance] = useState(null);

  const instances = data?.items || [];
  const isTableLoading = (isFetching || isFetchingRegions) && !data;
  const totalInstances = data?.total ?? 0;

  let content = null;

  useEffect(() => {
    insights?.chrome?.appAction?.('instances-page');
  }, []);

  function onRequestCreate(values) {
    const response = createInstance.mutateAsync({
      region: values.region,
      cloud_provider: values.cloud_provider,
      name: values.name,
      multi_az: values.availabilityZones === 'multi',
      cloud_account_id: values.cloud_account_id,
    });
    return response.catch((error) => {
      return error;
    });
  }

  function onCreateInstanceHandler() {
    analyticsTrack('start-create-instance-form');
    setCreatingInstance({});
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

  const hasNoInstances =
    instances.length === 0 &&
    Object.keys(filters).length === 0 &&
    !isTableLoading;

  if (hasNoInstances) {
    content = (
      <EmptyState
        headingLevel="h4"
        icon={CubesIcon}
        titleText="No ACS instances."
      >
        <EmptyStateBody>Create one to get started.</EmptyStateBody>
        <EmptyStateFooter>
          <EmptyStateActions>
            <Button
              variant="primary"
              onClick={() => onCreateInstanceHandler({})}
            >
              Create ACS instance
            </Button>
          </EmptyStateActions>
        </EmptyStateFooter>
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
              <Button
                variant="primary"
                onClick={() => onCreateInstanceHandler({})}
              >
                Create ACS instance
              </Button>
            </ToolbarItem>
            {instances.length !== 0 && (
              <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
                <Pagination
                  itemCount={totalInstances}
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
        <Table aria-label="ACS instances table">
          <Thead>
            <Tr>
              <Th sort={getSortParams('name')}>Name</Th>
              <Th sort={getSortParams('cloud_provider')}>Cloud provider</Th>
              <Th sort={getSortParams('region')}>Region</Th>
              <Th sort={getSortParams('owner')}>Owner</Th>
              <Th sort={getSortParams('status')} modifier="nowrap">
                Status
              </Th>
              <Th sort={getSortParams('created_at')}>Time created</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {isTableLoading && (
              <Tr>
                <Td colSpan={8}>
                  <Bullseye>
                    <Spinner />
                  </Bullseye>
                </Td>
              </Tr>
            )}
            {!isTableLoading && instances.length === 0 && (
              <Tr>
                <Td colSpan={8}>
                  <Bullseye>
                    <EmptyState
                      headingLevel="h2"
                      icon={SearchIcon}
                      titleText="No results found"
                      variant={EmptyStateVariant.sm}
                    >
                      <EmptyStateBody>
                        Clear all filters and try again.
                      </EmptyStateBody>
                      <EmptyStateFooter>
                        <Button variant="link" onClick={onClearFilters}>
                          Clear all filters
                        </Button>
                      </EmptyStateFooter>
                    </EmptyState>
                  </Bullseye>
                </Td>
              </Tr>
            )}
            {!isTableLoading &&
              instances.length !== 0 &&
              instances.map((instance) => {
                const instanceDetailsURL = mergeToBasename(
                  `instances/instance/${instance.id}`,
                  linkBasename
                );
                return (
                  <Tr
                    key={instance.name}
                    onRowClick={(event) => {
                      if (
                        event.target.tagName === 'TD' &&
                        instance.status === 'ready'
                      ) {
                        setViewingInstance(instance);
                      }
                    }}
                    isRowSelected={viewingInstance?.name === instance?.name}
                    isClickable
                  >
                    <Td dataLabel="Name">
                      <Button
                        variant="link"
                        isInline
                        isDisabled={instance.status !== 'ready'}
                        component={(props) => (
                          <Link {...props} to={instanceDetailsURL} />
                        )}
                      >
                        {instance.name}
                      </Button>
                    </Td>
                    <Td dataLabel="Cloud provider">
                      {cloudProviderValueToLabel(instance.cloud_provider)}
                    </Td>
                    <Td dataLabel="Region">
                      <RegionLabel id={instance.region} />
                    </Td>
                    <Td dataLabel="Owner">{instance.owner}</Td>
                    <Td dataLabel="Status">
                      {' '}
                      <Status status={instance.status} />
                    </Td>
                    <Td dataLabel="Time created">
                      {getDateTimeDifference(instance.created_at)}
                    </Td>
                    <Td isActionCell className="pf-v5-u-pr-xl">
                      <ActionsColumn
                        items={[
                          {
                            title: 'Details',
                            onClick: (event) => {
                              event.preventDefault();
                              navigate(instanceDetailsURL);
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
              })}
          </Tbody>
        </Table>
        {instances.length !== 0 && (
          <Toolbar>
            <ToolbarContent>
              <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
                <Pagination
                  itemCount={totalInstances}
                  perPage={perPage}
                  page={page}
                  onSetPage={onSetPage}
                  widgetId="acs-instances-bottom-pagination"
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
        {content}
        <CreateInstanceModal
          isOpen={!!creatingInstance || hasNoInstances}
          onClose={closeCreateInstanceModal}
          onRequestCreate={onRequestCreate}
          cloudAccountIds={cloudAccountIds}
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

export default InstancesPage;
