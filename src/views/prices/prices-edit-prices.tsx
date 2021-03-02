import React, { useEffect } from 'react';
import { GetVariantsQuery, useGetVariantsLazyQuery } from '../../generated/graphql';
import { GQLQueryOptions } from '../../constants';
import { ListProduct } from '../../types';

type Props = {
  masterProduct: ListProduct;
  references: ListProduct[];
};

const PricesEditPrices = (props: Props): JSX.Element => {
  const allListProducts = [props.masterProduct, ...props.references];
  const where = allListProducts.map((r) => `id="${r.id}"`).join(' or ');
  const [getAllVariants, variantState] = useGetVariantsLazyQuery({
    variables: {
      where,
    },
    ...GQLQueryOptions,
  });

  useEffect(() => {
    getAllVariants();
  }, [props.references]);

  if (variantState.error) {
    return <>{`Error! ${variantState.error?.message || ''}`}</>;
  }
  if (variantState.loading || !variantState.data) {
    return <>Loading...</>;
  }

  const getVariantsArray = (data?: GetVariantsQuery) =>
    data?.products.results.map((result) => result.masterData.current.allVariants);
  const variantsArray = getVariantsArray(variantState.data);

  return <>{variantsArray.map((variants) => variants.map((variant) => <p key={variant.key}>{variant.key}</p>))}</>;
};

PricesEditPrices.displayName = 'PricesEditPrices';
export default PricesEditPrices;
