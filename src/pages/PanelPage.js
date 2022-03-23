import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardText, Col, Row, CardImg, CardTitle } from 'reactstrap';



const PanelPage = () => {
  return (
    <Page
      title="Panel"
      breadcrumbs={[{ name: 'panel', active: true }]}
    >
       <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
              <CardBody>
                <CardTitle>Hello Panel!</CardTitle>
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

export default PanelPage;
