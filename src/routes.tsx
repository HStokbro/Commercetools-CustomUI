import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useIsAuthorized } from '@commercetools-frontend/permissions';
import { InjectReducers } from '@commercetools-frontend/application-shell';
import LockedDiamondSVG from '@commercetools-frontend/assets/images/locked-diamond.svg';
import { MaintenancePageLayout } from '@commercetools-frontend/application-components';
import MainView from './views/main-view';
import { PERMISSIONS } from './constants';
import customAppPrices from './redux/customAppPrices';

const PageUnauthorized = () => (
  <MaintenancePageLayout
    imageSrc={LockedDiamondSVG}
    title="Not enough permissions to access this resource"
    paragraph1="We recommend to contact your project administrators for further questions."
  />
);

const ApplicationRoutes = (): JSX.Element => {
  const match = useRouteMatch();
  const canManageProducts = useIsAuthorized({
    demandedPermissions: [PERMISSIONS.ManageProducts],
  });

  if (!canManageProducts) {
    return <PageUnauthorized />;
  }

  return (
    <InjectReducers id="state-machines" reducers={{ customAppPrices }}>
      <Switch>
        <Route path={`${match.path}/some-other-route`} render={() => <div>Nothing to see</div>} />
        <Route render={(routerProps) => <MainView match={routerProps.match} />} />
      </Switch>
    </InjectReducers>
  );
};
ApplicationRoutes.displayName = 'ApplicationRoutes';

export default ApplicationRoutes;
