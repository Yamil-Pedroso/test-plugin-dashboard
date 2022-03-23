import Page from 'components/Page';
import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

const OverviewPage = () => {
  return (
    <Page title="Overview" breadcrumbs={[{ name: 'overview', active: true }]}>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardBody>
              <CardTitle>Hello Overview!</CardTitle>
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

export default OverviewPage;