import React from 'react';
import {
  Button,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  List,
  ListComponent,
  ListItem,
  OrderType,
  Stack,
  StackItem,
  Text,
  TextContent,
  TextVariants,
  Title,
} from '@patternfly/react-core';

import AppLink from '../../../components/AppLink';
import HeaderExternalLink from './HeaderExternalLink';

import { ExternalLinkAltIcon } from '@patternfly/react-icons';

const InitialSetup = () => {
  return (
    <Stack hasGutter>
      <StackItem>
        <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
          <FlexItem>
            <Title headingLevel="h1">Initial Setup</Title>
          </FlexItem>
          <FlexItem>
            <HeaderExternalLink />
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem>
        <Grid hasGutter>
          <GridItem sm={2} xl2={1}>
            <TextContent>
              <Text component={TextVariants.h3}>Step 1:</Text>
            </TextContent>
          </GridItem>
          <GridItem sm={10} xl2={11}>
            <TextContent>
              <Text component={TextVariants.h3}>
                Create an ACS Central Instance
              </Text>
            </TextContent>
            <Button
              variant="secondary"
              icon={<ExternalLinkAltIcon />}
              iconPosition="right"
              className="pf-v5-u-my-md"
              component={(props) => <AppLink {...props} to={'instances'} />}
              aria-label="Create Instance"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Create Instance
            </Button>
            <List component={ListComponent.ol} type={OrderType.number}>
              <ListItem>Choose a name for your instance.</ListItem>
              <ListItem>
                Follow the rest of the guidelines and click{' '}
                <span className="pf-v5-u-font-weight-bold">Create Instance</span>.
                <br />
                It will take about 10 minutes to spin up your instance.
              </ListItem>
            </List>
          </GridItem>

          <GridItem sm={2} xl2={1}>
            <TextContent>
              <Text component={TextVariants.h3}>Step 2:</Text>
            </TextContent>
          </GridItem>
          <GridItem sm={10} xl2={11}>
            <TextContent className="pf-v5-u-mb-sm">
              <Text component={TextVariants.h3}>
                Access the ACS Central Interface
              </Text>
            </TextContent>
            <List component={ListComponent.ol} type={OrderType.number}>
              <ListItem>
                When your instance is in the{' '}
                <span className="pf-v5-u-font-weight-bold">ready</span> status,
                click the name for details.
              </ListItem>
              <ListItem>
                Click the{' '}
                <span className="pf-v5-u-font-weight-bold">Open ACS Console</span>{' '}
                button.
              </ListItem>
              <ListItem>Sign in using your Red Hat credentials.</ListItem>
            </List>
          </GridItem>
        </Grid>
      </StackItem>
    </Stack>
  );
};

export default InitialSetup;
