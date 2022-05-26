import React, { ReactElement } from 'react';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { useParams, useHistory } from 'react-router-dom';
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Bullseye,
  Button,
  Card,
  CardBody,
  CardTitle,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Spinner,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import BreadcrumbItemLink from '../../components/BreadcrumbItemLink';
import useInstance from '../../hooks/apis/useInstance';
import useDeleteInstance from '../../hooks/apis/useDeleteInstance';
import Status from '../../components/Status';

const instanceBaseUrl = "/instances";

function cleanDate(dateString: string) {
  return new Date(dateString).toDateString();
}

function InstanceDetailsPage(): ReactElement {
  const { instanceId } = useParams();
  const { data: instance, isFetching } = useInstance(instanceId);
  const deleteInstance = useDeleteInstance();
  const history = useHistory();

  if (isFetching) {
    return (
      <Bullseye>
        <Spinner />
      </Bullseye>
    );
  }

  return (
    <div>
      <PageHeader>
        <Flex direction={{ default: 'column' }}>
          <FlexItem>
            <Breadcrumb>
              <BreadcrumbItemLink to={instanceBaseUrl}>
                ACS instances
              </BreadcrumbItemLink>
              <BreadcrumbItem isActive>{instance.name}</BreadcrumbItem>
            </Breadcrumb>
          </FlexItem>
          <FlexItem>
            <Split>
              <SplitItem isFilled><PageHeaderTitle title={instance.name} /></SplitItem>
              <Button variant='danger' disabled={deleteInstance.isLoading} onClick={
                () => deleteInstance.mutate(instanceId, {
                  onSuccess: () => {
                    history.push(instanceBaseUrl);
                  },
                  onError: () => {
                    // TODO Alert
                  },
                })
              }>Delete</Button>
            </Split>
          </FlexItem>
        </Flex>
      </PageHeader>
      <Main>
        <Grid hasGutter>
            <GridItem span={6}>
              <Card>
                <CardTitle>
                  <Split>
                  <SplitItem isFilled>{instance.name} Instance<Badge className='pf-u-mx-sm' isRead>{instance.instance_type}</Badge><Badge>v{instance.version}</Badge></SplitItem>
                  <a href={'http://' + instance.host}>View</a>
                  </Split>
                </CardTitle>
                <Divider component='div' className='pf-u-py-sm'></Divider>
                <CardBody>
                  <DescriptionList className="pf-u-mb-sm" isHorizontal>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Type</DescriptionListTerm>
                      <DescriptionListDescription><span>{instance.kind}</span></DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Created</DescriptionListTerm>
                      <DescriptionListDescription>{cleanDate(instance.created_at)}</DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Last Updated</DescriptionListTerm>
                      <DescriptionListDescription>{cleanDate(instance.updated_at)}</DescriptionListDescription>
                    </DescriptionListGroup>
                  </DescriptionList>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem span={6}>
              <Card>
                <CardTitle>
                  <Split>
                    <SplitItem isFilled><p>Cloud Information</p></SplitItem>
                    <Status status={instance.status} />
                  </Split>
                </CardTitle>
                <Divider component='div' className='pf-u-py-sm'></Divider>
                <CardBody>
                  {
                    instance.cloud_provider === 'aws'
                    ? <img style={{ width: '48px' }} src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" />
                    : <p>{instance.cloud_provider}</p>
                  }
                  <DescriptionList className="pf-u-mt-md" isHorizontal>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Region</DescriptionListTerm>
                      <DescriptionListDescription>{instance.region}</DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Availability Zones</DescriptionListTerm>
                      <DescriptionListDescription>{instance.multi_az ? "Multiple" : "Single"}</DescriptionListDescription>
                    </DescriptionListGroup>
                  </DescriptionList>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Main>
    </div>
  );
}

export default InstanceDetailsPage;
