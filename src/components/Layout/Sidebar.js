import { IconContext } from "react-icons";
import plugestLogoImg from 'assets/img/logo/plugtest-logo.png';
import SourceLink from 'components/SourceLink';
import React from 'react';
import {
  MdBorderAll,
  MdKeyboardArrowDown,
  MdBrandingWatermark,
  MdLaunch,
} from 'react-icons/md';

import { AiOutlineHome, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { RiVipDiamondLine, RiCustomerService2Line } from 'react-icons/ri';
import { FaThemeisle, FaSolarPanel, FaConnectdevelop } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { BiGlasses } from 'react-icons/bi';


import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const navItemsHome = [
  { to: '/', name: 'home', exact: true, Icon: AiOutlineHome },
];

const navItemsCustomers = [
  { to: '/customers', name: 'customers', exact: false, Icon: RiCustomerService2Line },
];
const navComponentsPerformance = [
  { to: '/overview', name: 'Overview', exact: false, Icon: BiGlasses },
];

const navComponentsProgram = [
  { to: '/points', name: 'Points', exact: false, Icon: FaThemeisle },
  {to: '/referrals',name: 'Referrals',exact: false, Icon: FaSolarPanel,},
  { to: '/vip', name: 'VIP', exact: false, Icon: RiVipDiamondLine },
  { to: '/activity', name: 'Activity', exact: false, Icon: FiActivity },
];
const navComponentsBranding = [
  { to: '/theme', name: 'Theme', exact: false, Icon: FaThemeisle },
  {to: '/panel',name: 'Panel',exact: false, Icon: FaSolarPanel,},
  { to: '/launcher', name: 'Launcher', exact: false, Icon: MdLaunch },
];

const navContents = [
  { to: '/customer-emails', name: 'customer emails', exact: false, Icon: AiOutlineMail },
  { to: '/nudges', name: 'nudges', exact: false, Icon: MdBorderAll },
  { to: '/integrations', name: 'integrations', exact: false, Icon: FaConnectdevelop },
];

const settingsItems = [
  { to: '/settings', name: 'settings', exact: false, Icon: AiOutlineSetting },
];

{/*const pageContents = [
  { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
  {
    to: '/login-modal',
    name: 'login modal',
    exact: false,
    Icon: MdViewCarousel,
  },
];*/}

const bem = bn.create('sidebar');
class Sidebar extends React.Component {
  state = {
    isOpenComponentsProgram: false,
    isOpenComponentsBranding: false,
    isOpenComponentsPerformance: false,
    isOpenContents: true,
    isOpenContentesSettings: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image="">
        <div className={bem.e('background')} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={plugestLogoImg}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                PLUGTEST
              </span>
            </SourceLink>
          </Navbar>

          {/* START DASHBOARD-HOME SECTION*/}
          <Nav vertical>
            {navItemsHome.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            {/* END DASHBOARD-HOME SECTION*/}

            {/* START PROGRAM SECTION*/}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('ComponentsProgram')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdBrandingWatermark className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">PROGRAM</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponentsProgram
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponentsProgram}>
              {navComponentsProgram.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className=""
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            {/*END PROGRAM SECTION*/}

            {/* START CUSTOMERS SECTION*/}
            {navItemsCustomers.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            {/* END CUSTOMERS SECTION*/}

            {/* START PERFORMANCE SECTION*/}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('ComponentsPerformance')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdBrandingWatermark className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">PERFORMANCE</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponentsPerformance
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponentsPerformance}>
              {navComponentsPerformance.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className=""
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon style={{color: '#fff'}} className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            {/* END PERFORMANCE SECTION*/}

            {/* START BRANDING SECTION*/}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('ComponentsBranding')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdBrandingWatermark className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">BRANDING</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponentsBranding
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponentsBranding}>
              {navComponentsBranding.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className=""
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            {/*END BRANDING SECTION*/}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
             
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            <Collapse style={{bottom: "0", position: "absolute"}} isOpen={this.state.isOpenContentesSettings}>
                {settingsItems.map(({ to, name, exact, Icon }, index) => (
                  <NavItem key={index} className={bem.e('nav-item')}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      className="text-uppercase"
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}
                    >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                    </BSNavLink>
                  </NavItem>
                ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
