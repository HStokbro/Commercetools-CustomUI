import React from 'react';
import {
  ApplicationShell,
  setupGlobalErrorListener,
  // InjectReducers,
} from '@commercetools-frontend/application-shell';
import { Sdk } from '@commercetools-frontend/sdk';
import { handleActionError } from '@commercetools-frontend/actions-global';
import { TNavbarMenu } from '@commercetools-frontend/application-shell/dist/declarations/src/types/generated/proxy';
import loadMessages from '../../load-messages';
import { FEATURE_FLAGS } from '../../constants';

// Here we split up the main (app) bundle with the actual application business logic.
// Splitting by route is usually recommended and you can potentially have a splitting
// point for each route. More info at https://reactjs.org/docs/code-splitting.html
const AsyncApplicationRoutes = React.lazy(() => import('../../routes'));

// Ensure to setup the global error listener before any React component renders
// in order to catch possible errors on rendering/mounting.
setupGlobalErrorListener();

// If needed. Inject reducers into Redux store here.
// Store is already created in @commercetools-frontend/application-shell
// Prefix the reducer to make sure we don't conflict with Commercetools
// Example: InjectReducers(fooReducer)

declare global {
  interface Window {
    app: any; // eslint-disable-line
  }
}

const loadMenu = (): Promise<TNavbarMenu[]> => import('../../../menu.json').then((data) => data.default || data);

const EntryPoint = (): JSX.Element => (
  <ApplicationShell
    environment={window.app}
    onRegisterErrorListeners={({ dispatch }) => {
      Sdk.Get.errorHandler = (error) => handleActionError(error)(dispatch);
    }}
    applicationMessages={loadMessages}
    DEV_ONLY__loadNavbarMenuConfig={loadMenu}
    featureFlags={FEATURE_FLAGS}
  >
    <AsyncApplicationRoutes />
  </ApplicationShell>
);
EntryPoint.displayName = 'EntryPoint';

export default EntryPoint;
