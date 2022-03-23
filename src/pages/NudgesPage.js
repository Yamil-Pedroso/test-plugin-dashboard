import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, Col, Row, CardImg, CardTitle, CardText } from 'reactstrap';

const NudgesPage = () => {
  return (
    <Page
      title="Nudges"
      breadcrumbs={[{ name: 'nudges', active: true }]}
      className="TablePage"
    >
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
              <CardBody>
                <CardTitle>Hello Nudges!</CardTitle>
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

export default NudgesPage;
