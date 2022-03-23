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

const ActivityPage = () => {
  return (
    <Page title="Activity" breadcrumbs={[{ name: 'activity', active: true }]}>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardBody>
              <CardTitle>Hello Activity!</CardTitle>
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

export default ActivityPage;