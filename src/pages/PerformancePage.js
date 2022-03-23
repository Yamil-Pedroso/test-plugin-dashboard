import React from 'react';

import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import Page from 'components/Page';

const PerformancePage = () => {
  return (
    <Page
      className="Performance"
      title="Performance"
      breadcrumbs={[{ name: 'performance', active: true }]}
    >
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
              <CardBody>
                <CardTitle>Hello Performances!</CardTitle>
                <CardText>
                  ...
                </CardText>
              </CardBody>
            </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default PerformancePage;
