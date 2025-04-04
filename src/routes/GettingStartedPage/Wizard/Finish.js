import React from 'react';
import { Card } from '@patternfly/react-core/dist/dynamic/components/Card';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { Grid } from '@patternfly/react-core/dist/dynamic/layouts/Grid';
import { GridItem } from '@patternfly/react-core/dist/dynamic/layouts/Grid';
import { Stack } from '@patternfly/react-core/dist/dynamic/layouts/Stack';
import { StackItem } from '@patternfly/react-core/dist/dynamic/layouts/Stack';
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title';

import HeaderExternalLink from './HeaderExternalLink';

const Finish = () => {
  return (
    <div>
      <Stack hasGutter>
        <StackItem>
          <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
            <FlexItem>
              <Title headingLevel="h1">Finishing Up</Title>
            </FlexItem>
            <FlexItem>
              <HeaderExternalLink />
            </FlexItem>
          </Flex>
        </StackItem>
        <StackItem>
          <Title headingLevel="h4">Watch a deep dive demo</Title>
        </StackItem>
        <StackItem>
          <Grid hasGutter>
            <GridItem md={9} xl2={7}>
              <Card className="marketing-video">
                <iframe
                  src="https://www.youtube.com/embed/lFBFW3HmgsA"
                  title="Advanced Cluster Security in 2 Minutes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Card>
            </GridItem>
          </Grid>
        </StackItem>
      </Stack>
    </div>
  );
};

export default Finish;
