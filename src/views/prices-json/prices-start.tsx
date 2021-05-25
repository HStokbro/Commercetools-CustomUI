import React, { useState, useEffect } from 'react';
import Text from '@commercetools-uikit/text';
import { InfoModalPage } from '@commercetools-frontend/application-components';
import { useGetProductsLazyQuery } from '../../generated/graphql';
import ProductsTable from '../../components/products-table';
import { GQLQueryOptions, GQLCurrentLocale } from '../../utils/gqlHelpers';
import { ListProduct } from '../../types';
import PricesEdit from './prices-edit';

const PricesStart = (): JSX.Element => {
  const [showPrices, setShowPrices] = useState<boolean>(false);
  const [selection, setSelection] = useState<ListProduct>(null);
  const locale = GQLCurrentLocale();

  const [getProductsQuery, { data, loading, error }] = useGetProductsLazyQuery(GQLQueryOptions);

  useEffect(() => {
    getProductsQuery({
      variables: {
        locale,
      },
    });
  }, []);

  const init = () => {
    setSelection(null);
    setShowPrices(false);
  };

  if (error) return <>{`Error! ${error.message}`}</>;
  if (loading || !data) return <>Loading...</>;
  return (
    <>
      <Text.Body isBold>Works with the &quot;CustomApp&quot; trial project</Text.Body>

      <Text.Headline as="h2">Prices</Text.Headline>
      <Text.Body>Select a product to edit its prices</Text.Body>

      <ProductsTable
        rows={data.products.results}
        setSelectedRows={(selectedRows: ListProduct[]) => {
          if (selectedRows.length) {
            setSelection(selectedRows[0]);
            setShowPrices(true);
          }
        }}
      />

      <InfoModalPage
        title={`Prices for ${selection?.masterData.current.name}`}
        isOpen={showPrices}
        onClose={() => init()}
        topBarCurrentPathLabel="Prices"
        topBarPreviousPathLabel="Back"
      >
        <PricesEdit rows={data.products.results} masterProduct={selection} />
      </InfoModalPage>
    </>
  );
};

PricesStart.displayName = 'PricesStart';
export default PricesStart;
