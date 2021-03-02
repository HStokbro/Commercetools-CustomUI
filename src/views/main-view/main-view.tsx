import React from 'react';
import PropTypes from 'prop-types';
// import { useIntl } from 'react-intl';
import { Route, Switch, Link } from 'react-router-dom';
// import { ListIcon, TableIcon } from '@commercetools-uikit/icons';
import Text from '@commercetools-uikit/text';
import Spacings from '@commercetools-uikit/spacings';
// import FlatButton from '@commercetools-uikit/flat-button';
// import ViewOne from '../view-one';
// import ViewTwo from '../view-two';
import messages from './messages';
// import styles from './main-view.mod.css';
import BundleStart from '../bundle';
import PriceProducts from '../prices';

type Props = {
  match: {
    path: string;
    url: string;
    params: {
      projectKey: string;
    };
  };
};

/* eslint-disable arrow-body-style */
const MainView = (props: Props): JSX.Element => {
  // const intl = useIntl();

  return (
    <Spacings.Inset scale="m">
      <Spacings.Stack scale="m">
        <Switch>
          <Route path={`${props.match.path}/bundle`} component={BundleStart} />
          <Route path={`${props.match.path}/prices`} component={PriceProducts} />
        </Switch>
      </Spacings.Stack>
    </Spacings.Inset>
  );
};

MainView.displayName = 'MainView';
MainView.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      projectKey: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MainView;
