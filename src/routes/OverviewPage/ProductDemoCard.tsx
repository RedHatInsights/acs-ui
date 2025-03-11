import React from 'react';
import { Card } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardBody } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardTitle } from '@patternfly/react-core/dist/dynamic/components/Card';
import { Content } from '@patternfly/react-core/dist/dynamic/components/Content';

function ProductDemoCard() {
  return (
    <Card>
      <CardTitle>
        <Content>
          <Content component="h2">Product demo</Content>
        </Content>
      </CardTitle>
      <CardBody>
        <div className="marketing-video">
          <iframe
            src="https://www.youtube.com/embed/uPjvVGjoiZw"
            title="Short Demo of Red Hat Advanced Cluster Security Cloud Service"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductDemoCard;
