import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Spacings from '@commercetools-uikit/spacings';
import BundleStart from '../bundle';
import PriceProducts from '../prices';
import ReferencesStart from '../references';

type Props = {
  match: {
    path: string;
    url: string;
    params: {
      projectKey: string;
    };
  };
};

const MainView = (props: Props): JSX.Element => (
  <Spacings.Inset scale="m">
    <Spacings.Stack scale="m">
      <Switch>
        <Route path={`${props.match.path}/references`} component={ReferencesStart} />
        <Route path={`${props.match.path}/bundle`} component={BundleStart} />
        <Route path={`${props.match.path}/prices`} component={PriceProducts} />
      </Switch>
    </Spacings.Stack>
  </Spacings.Inset>
);

MainView.displayName = 'MainView';
export default MainView;
