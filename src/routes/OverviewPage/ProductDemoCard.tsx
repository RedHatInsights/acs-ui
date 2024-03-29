import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Text,
  TextContent,
} from '@patternfly/react-core';

function ProductDemoCard() {
  return (
    <Card>
      <CardTitle>
        <TextContent>
          <Text component="h2">Product demo</Text>
        </TextContent>
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
