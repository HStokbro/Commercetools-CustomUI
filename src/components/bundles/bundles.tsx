import React, { useState } from 'react';
import Text from '@commercetools-uikit/text';
// import messages from './messages';
import { InfoModalPage } from '@commercetools-frontend/application-components';
import { useGetProductsQuery } from '../../generated/graphql';
import ProductsTable from './products-table';
import AddTable from './add-table';
// import { useIntl } from 'react-intl';
import getCurrentLocale from '../../utils/getCurrentLocale';
import { GQLTarget } from '../../constants';
import { ListProduct } from '../../types';

const Bundles = (): JSX.Element => {
  const [showLvl2, setShowLvl2] = useState<boolean>(false);
  const [selectionLvl1, setSelectionLvl1] = useState<ListProduct[]>([]);

  const subscriptionTypeId = 'a641f681-7923-45fc-8652-190a43b2d433';

  const { data, loading, error } = useGetProductsQuery({
    variables: {
      locale: getCurrentLocale(),
      where: `productType(id!="${subscriptionTypeId}")`,
    },
    ...GQLTarget,
  });

  if (loading) return <>Loading...</>;
  if (error) {
    return <>{`Error! ${error.message}`}</>;
  }

  const returnSelectionLvl1 = (selection) => {
    setSelectionLvl1(selection);
    setShowLvl2(true);
  };

  return (
    <>
      <Text.Body>Select products to add to</Text.Body>
      <ProductsTable rows={data.products.results} returnSelection={returnSelectionLvl1} />
      <InfoModalPage
        title="Additions"
        isOpen={showLvl2}
        onClose={() => setShowLvl2(false)}
        subtitle={<Text.Body>Add to bundle</Text.Body>}
        topBarCurrentPathLabel="Additions"
        topBarPreviousPathLabel="Back"
      >
        <AddTable rows={data.products.results} selectionLvl1={selectionLvl1} />
      </InfoModalPage>
    </>
  );
};

Bundles.displayName = 'Bundles';
export default Bundles;
