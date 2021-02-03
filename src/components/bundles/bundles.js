import React, { useState } from 'react';
import { useMcQuery } from '@commercetools-frontend/application-shell';
import Text from '@commercetools-uikit/text';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import messages from './messages';
import { FetchProductsQuery } from '../../graphql/fetchProductsQuery.graphql';
import ProductsTable from './products-table';
import AddTable from './add-table';
import { InfoModalPage } from '@commercetools-frontend/application-components';
import { useIntl } from 'react-intl';
import getCurrentLocale from '../../utils/getCurrentLocale';

const Bundles = () => {
  const [showNext, setShowNext] = useState(false);
  const [selectionLvl1, setSelectionLvl1] = useState([]);

  const subscriptionTypeId = 'a641f681-7923-45fc-8652-190a43b2d433';

  const getProducts = () =>
    useMcQuery(FetchProductsQuery, {
      variables: {
        locale: getCurrentLocale(),
        where: `productType(id!="${subscriptionTypeId}")`,
      },
      context: {
        target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
      },
    });

  const products = getProducts();

  const subscriptions = useMcQuery(FetchProductsQuery, {
    variables: {
      locale: getCurrentLocale(),
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  if (products.loading || subscriptions.loading) return 'Loading...';
  if (products.error || subscriptions.error)
    return `Error! ${products.error.message}`;

  const returnSelectionLvl1 = (selectionLvl1) => {
    setSelectionLvl1(selectionLvl1);
    setShowNext(true);
  };

  return (
    <>
      <Text.Body>Select products to add to</Text.Body>
      <ProductsTable
        rows={products.data.products.results}
        returnSelection={returnSelectionLvl1}
      />
      <InfoModalPage
        title="Additions"
        isOpen={showNext}
        onClose={() => setShowNext(false)}
        subtitle={<Text.Body>{'Add to bundle'}</Text.Body>}
        topBarCurrentPathLabel="Additions"
        topBarPreviousPathLabel="Back"
      >
        <AddTable
          rows={subscriptions.data.products.results}
          selectionLvl1={selectionLvl1}
        />
      </InfoModalPage>
    </>
  );
};

Bundles.displayName = 'Bundles';
export default Bundles;
