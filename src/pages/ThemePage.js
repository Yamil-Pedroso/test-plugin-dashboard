import React from 'react';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
} from 'reactstrap';

import Page from 'components/Page';

class ThemePage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Page
        className="ThemePage"
        title="Theme"
        breadcrumbs={[{ name: 'theme', active: true }]}
      >
        <Row>
          <Col md={6} sm={6} xs={12} className="mb-3">
            <Card className="flex-row">
              <CardBody>
                <CardTitle>Hello Theme!</CardTitle>
                <CardText>
                  ...
                </CardText>
              </CardBody>
            </Card>
        </Col>
      </Row>
      </Page>
    );
  }
}

export default ThemePage;
