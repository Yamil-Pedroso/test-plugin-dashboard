import Page from 'components/Page';
import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  CardText,
  CardTitle
} from 'reactstrap';

const SettingPage = () => {
  return (
    <Page title="Settings" breadcrumbs={[{ name: 'settings', active: true }]}>
       <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
              <CardBody>
                <CardTitle>Hello Setting!</CardTitle>
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

export default SettingPage;
