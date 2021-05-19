import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Spacings from '@commercetools-uikit/spacings';
import ReferencesStart from '../references';
import BundleStart from '../bundle';
import PriceProducts from '../prices-json';
import PricesChannels from '../prices-channels';

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
        <Route path={`${props.match.path}/prices-json`} component={PriceProducts} />
        <Route path={`${props.match.path}/prices-channels`} component={PricesChannels} />
      </Switch>
    </Spacings.Stack>
  </Spacings.Inset>
);

MainView.displayName = 'MainView';
export default MainView;
