import React from 'react';
import Page from 'components/Page';
import styled from '@emotion/styled'
import { NumberWidgetButton } from '../components/Widget/NumberWidget'
import { NumberWidget } from '../components/Widget'
import MindImg from '../assets/img/mind.png';

import { 
  FiGift, 
  FiSend, 
  FiUserPlus 
} from 'react-icons/fi';

import {
  Col,
  Row,
} from 'reactstrap';

import { getColor } from 'utils/colors';

const ImgWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 4em;
`;

const CustomizeButton = styled.button`
    width: 70%;
    height: 50px;
    color: #fff;
    background-color: #5f308a;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
`;

class DashboardPage extends React.Component {
   
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Page
        className="DashboardPage"
        title="Welcome to Plugin Test"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              icon={<FiUserPlus />}
              title="New Members"
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              icon={<FiGift />}
              title="Rewards given"
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              icon={<FiSend />}
              title="Brand advocate traffic"
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidgetButton title="Panel opens" />
          </Col>
        </Row>
        <ImgWrapper>
          <img src={MindImg} width="8%" alt="Mind" />
        </ImgWrapper>
      </Page>
    );
  }
}
export default DashboardPage;
