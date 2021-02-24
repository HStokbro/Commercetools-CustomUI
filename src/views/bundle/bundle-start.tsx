import React, { useState, useEffect } from 'react';
import Text from '@commercetools-uikit/text';
// import messages from './messages';
import { InfoModalPage } from '@commercetools-frontend/application-components';
import PrimaryButton from '@commercetools-uikit/primary-button';
import { useGetProductsLazyQuery } from '../../generated/graphql';
import ProductsTable from '../../components/products-table';
import BundleAdd from './bundle-add';
// import { useIntl } from 'react-intl';
import getCurrentLocale from '../../utils/getCurrentLocale';
import { GQLTarget } from '../../constants';
import { ListProduct } from '../../types';

const BundleStart = (): JSX.Element => {
  const [showLvl2, setShowLvl2] = useState<boolean>(false);
  const [selection, setSelection] = useState<ListProduct[]>([]);

  // const subscriptionTypeId = 'a641f681-7923-45fc-8652-190a43b2d433';
  const [getProductsQuery, { data, loading, error }] = useGetProductsLazyQuery({
    variables: {
      locale: getCurrentLocale(),
      // where: `productType(id!="${subscriptionTypeId}")`,
    },
    ...GQLTarget,
  });

  useEffect(() => {
    getProductsQuery();
  }, []);

  if (loading || !data) return <>Loading...</>;
  if (error) {
    return <>{`Error! ${error.message}`}</>;
  }

  return (
    <>
      <Text.Body>Start bundle with a product</Text.Body>

      <ProductsTable
        rows={data.products.results}
        setSelectedRows={(selectedRows: ListProduct[]) => setSelection(selectedRows)}
      />
      <div>
        <PrimaryButton label="Next" onClick={() => setShowLvl2(true)} isDisabled={selection.length === 0} />
      </div>

      <InfoModalPage
        title="Additions"
        isOpen={showLvl2}
        onClose={() => setShowLvl2(false)}
        subtitle={<Text.Body>Add to bundle</Text.Body>}
        topBarCurrentPathLabel="Additions"
        topBarPreviousPathLabel="Back"
      >
        <BundleAdd rows={data.products.results} selection={selection} />
      </InfoModalPage>
    </>
  );
};

BundleStart.displayName = 'BundleStart';
export default BundleStart;
