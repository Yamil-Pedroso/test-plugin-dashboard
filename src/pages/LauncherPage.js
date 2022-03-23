import Page from 'components/Page';
import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  CardImg,
  CardText,
  CardTitle
} from 'reactstrap';

const LauncherPage = () => {
  return (
    <Page title="Launcher" breadcrumbs={[{ name: 'Launcher', active: true }]}>
       <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
              <CardBody>
                <CardTitle>Hello Launcher!</CardTitle>
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

export default LauncherPage;
