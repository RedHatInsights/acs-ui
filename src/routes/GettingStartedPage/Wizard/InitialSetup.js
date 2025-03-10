import React from 'react';
import {
  Button,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  List,
  ListItem,
  Stack,
  StackItem,
  Content,
  ContentVariants,
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
            <Content>
              <Content component={ContentVariants.h3}>Step 1:</Content>
            </Content>
          </GridItem>
          <GridItem sm={10} xl2={11}>
            <Content>
              <Content component={ContentVariants.h3}>
                Create an ACS Central Instance
              </Content>
            </Content>
            <Button
              variant="secondary"
              icon={<ExternalLinkAltIcon />}
              iconPosition="right"
              className="pf-v6-u-my-md"
              component={(props) => <AppLink {...props} to={'instances'} />}
              aria-label="Create Instance"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Create Instance
            </Button>
            <List component="ol" type="1">
              <ListItem>Choose a name for your instance.</ListItem>
              <ListItem>
                Follow the rest of the guidelines and click{' '}
                <span className="pf-v6-u-font-weight-bold">
                  Create Instance
                </span>
                .
                <br />
                It will take about 10 minutes to spin up your instance.
              </ListItem>
            </List>
          </GridItem>

          <GridItem sm={2} xl2={1}>
            <Content>
              <Content component={ContentVariants.h3}>Step 2:</Content>
            </Content>
          </GridItem>
          <GridItem sm={10} xl2={11}>
            <Content className="pf-v6-u-mb-sm">
              <Content component={ContentVariants.h3}>
                Access the ACS Central Interface
              </Content>
            </Content>
            <List component="ol" type="1">
              <ListItem>
                When your instance is in the{' '}
                <span className="pf-v6-u-font-weight-bold">ready</span> status,
                click the name for details.
              </ListItem>
              <ListItem>
                Click the{' '}
                <span className="pf-v6-u-font-weight-bold">
                  Open ACS Console
                </span>{' '}
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
