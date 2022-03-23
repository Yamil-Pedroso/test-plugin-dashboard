import Page from 'components/Page';
import Typography from 'components/Typography';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, CardImg, CardTitle, CardText } from 'reactstrap';

const CustomerEmailPage = () => {
  return (
    <Page
      title="Customer Emails"
      breadcrumbs={[{ name: 'customer emails', active: true }]}>
       <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
              <CardBody>
                <CardTitle>Hello Customer Emails!</CardTitle>
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

export default CustomerEmailPage;
