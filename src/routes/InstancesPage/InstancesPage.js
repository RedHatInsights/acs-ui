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
import { CubesIcon } from '@patternfly/react-icons';

import usePagination from '../../hooks/usePagination';

import CreateInstanceModal from './CreateInstanceModal';
import DeleteInstanceModal from './DeleteInstanceModal';
import InstanceDetailsDrawer from './InstanceDetailsDrawer';
import ChangeOwnerModal from './ChangeOwnerModal';
import { getDateTime } from '../../utils/date';
import Status from '../../components/Status';

const defaultInstances = [
  {
    name: 'acs-instance-1',
    cloudProvider: 'Amazon Web Services',
    cloudRegion: 'US-East',
    availabilityZones: 'multi',
    owner: 'bob@redhat.com',
    status: 'READY',
    timeCreated: new Date(),
  },
];
const possibleOwners = ['alice@redhat.com', 'bob@redhat.com', 'eve@redhat.com'];

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
function InstancesPage() {
  const history = useHistory();
  const [instances, setInstances] = useState(defaultInstances);
  const { page, perPage, onSetPage, onPerPageSelect } = usePagination();
  const [creatingInstance, setCreatingInstance] = useState(null);
  const [deletingInstance, setDeletingInstance] = useState(null);
  const [viewingInstance, setViewingInstance] = useState(null);
  const [changingOwner, setChangingOwner] = useState(null);

  useEffect(() => {
    insights?.chrome?.appAction?.('sample-page');
  }, []);

  function createInstance(values) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        setInstances((prevInstances) => [...prevInstances, values]);
        resolve({ error: null });
      }, 1000);
    });
    return promise;
  }

  function closeCreateInstanceModal() {
    setCreatingInstance(null);
  }

  function deleteInstance() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        setInstances((prevInstances) =>
          prevInstances.filter((datum) => datum.name !== deletingInstance.name)
        );
        resolve({ error: null });
      }, 2000);
    });
    return promise;
  }

  function closeDeleteInstanceModal() {
    setDeletingInstance(null);
  }

  function changeOwner(newOwner) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        setInstances((prevInstances) => {
          const newInstances = prevInstances.map((instance) => {
            const modifiedInstance = { ...instance };
            if (changingOwner.instance.name === instance.name) {
              modifiedInstance.owner = newOwner;
            }
            return modifiedInstance;
          });
          return newInstances;
        });
        resolve({ error: null });
      }, 2000);
    });
    return promise;
  }

  function closeChangingOwnerModal() {
    setChangingOwner(null);
  }

  function closeInstanceDetailsDrawer() {
    setViewingInstance(null);
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
        <Card>
          {instances?.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon icon={CubesIcon} />
              <Title size="lg" headingLevel="h4">
                No ACS instances.
              </Title>
              <EmptyStateBody>Create one to get started.</EmptyStateBody>
              <EmptyStatePrimary>
                <Button
                  variant="primary"
                  onClick={() => setCreatingInstance({})}
                >
                  Create ACS instance
                </Button>
              </EmptyStatePrimary>
            </EmptyState>
          ) : (
            <>
              <Toolbar>
                <ToolbarContent>
                  <ToolbarItem>
                    <Button
                      variant="primary"
                      onClick={() => setCreatingInstance({})}
                    >
                      Create ACS instance
                    </Button>
                  </ToolbarItem>
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
                </ToolbarContent>
              </Toolbar>
              <TableComposable aria-label="ACS instances table">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Cloud Provider</Th>
                    <Th>Region</Th>
                    <Th>Owner</Th>
                    <Th>Status</Th>
                    <Th>Time Created</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  {instances.map((instance) => (
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
                        <Link to={`/instances/instance/${instance.name}`}>
                          {instance.name}
                        </Link>
                      </Td>
                      <Td dataLabel="Cloud Provider">
                        {instance.cloudProvider}
                      </Td>
                      <Td dataLabel="Region">{instance.cloudRegion}</Td>
                      <Td dataLabel="Owner">{instance.owner}</Td>
                      <Td dataLabel="Status">
                        <Status status={instance.status} />
                      </Td>
                      <Td dataLabel="Time Created<">
                        {getDateTime(instance.timeCreated)}
                      </Td>
                      <Td isActionCell>
                        <ActionsColumn
                          items={[
                            {
                              title: 'Details',
                              onClick: (event) => {
                                event.preventDefault();
                                history.push(
                                  `/instances/instance/${instance.name}`
                                );
                              },
                            },
                            {
                              title: 'Change Owner',
                              onClick: (event) => {
                                event.preventDefault();
                                setChangingOwner({
                                  instance,
                                  newOwner: null,
                                });
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
                  ))}
                </Tbody>
              </TableComposable>
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
            </>
          )}
        </Card>
        <CreateInstanceModal
          isOpen={!!creatingInstance}
          onClose={closeCreateInstanceModal}
          onRequestCreate={createInstance}
        />
        <DeleteInstanceModal
          instance={deletingInstance}
          isOpen={!!deletingInstance}
          onClose={closeDeleteInstanceModal}
          onRequestDelete={deleteInstance}
        />
        <ChangeOwnerModal
          isOpen={!!changingOwner}
          changingOwner={changingOwner}
          possibleOwners={possibleOwners}
          onClose={closeChangingOwnerModal}
          onRequestChangeOwner={changeOwner}
        />
      </Main>
    </InstanceDetailsDrawer>
  );
}

export default withRouter(InstancesPage);
