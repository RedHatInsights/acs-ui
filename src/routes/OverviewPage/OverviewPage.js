import React from 'react';
import { Grid } from '@patternfly/react-core/dist/dynamic/layouts/Grid';
import { GridItem } from '@patternfly/react-core/dist/dynamic/layouts/Grid';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page';
import Header from './Header';
import GetStartedCard from './GetStartedCard';
import DescriptionsCard from './DescriptionsCard';
import ProductDocumentationCard from './ProductDocumentationCard';
import PricingSection from './PricingSection';
import ProductDemoCard from './ProductDemoCard';

function OverviewPage() {
  return (
    <div>
      <PageSection hasBodyWrapper={false}>
        <Header />
      </PageSection>
      <PageSection hasBodyWrapper={false}>
        <Grid hasGutter>
          <GridItem>
            <GetStartedCard />
          </GridItem>
          <GridItem>
            <DescriptionsCard />
          </GridItem>
          <GridItem>
            <PricingSection />
          </GridItem>
          <GridItem span={6}>
            <ProductDocumentationCard />
          </GridItem>
          <GridItem span={6}>
            <ProductDemoCard />
          </GridItem>
        </Grid>
      </PageSection>
    </div>
  );
}

export default OverviewPage;
