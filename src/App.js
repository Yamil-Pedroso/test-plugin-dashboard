import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/plugtest.scss';

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const PointsPage = React.lazy(() => import('pages/PointsPage'));
const ReferralsPage = React.lazy(() => import('pages/ReferralsPage'));
const VipPage = React.lazy(() => import('pages/VipPage'));
const ActivityPage = React.lazy(() => import('pages/ActivityPage'));
const OverviewPage = React.lazy(() => import('pages/OverviewPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const PanelPage = React.lazy(() => import('pages/PanelPage'));
const ThemePage = React.lazy(() => import('pages/ThemePage'));
const CustomerPage = React.lazy(() => import('pages/CustomerPage'));
const LauncherPage = React.lazy(() => import('pages/LauncherPage'));
const NudgesPage = React.lazy(() => import('pages/NudgesPage'));
const CustomerEmailPage = React.lazy(() => import('pages/CustomerEmailPage'));
const IntegrationPage = React.lazy(() => import('pages/IntegrationPage'));
const SettingPage = React.lazy(() => import('pages/SettingPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/points" component={PointsPage} />
                <Route exact path="/referrals" component={ReferralsPage} />
                <Route exact path="/vip" component={VipPage} />
                <Route exact path="/activity" component={ActivityPage} />
                <Route exact path="/overview" component={OverviewPage} />
                <Route exact path="/theme" component={ThemePage} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/customer-emails" component={CustomerEmailPage} />
                <Route exact path="/nudges" component={NudgesPage} />
                <Route
                  exact
                  path="/panel"
                  component={PanelPage}
                />
                <Route exact path="/launcher" component={LauncherPage} />
                <Route exact path="/customers" component={CustomerPage} />
                <Route exact path="/integrations" component={IntegrationPage} />
                <Route exact path="/settings" component={SettingPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
