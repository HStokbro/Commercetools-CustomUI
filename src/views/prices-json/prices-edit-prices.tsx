import React, { useEffect } from 'react';
import Text from '@commercetools-uikit/text';
import MoneyField from '@commercetools-uikit/money-field';
import Card from '@commercetools-uikit/card';
import Spacings from '@commercetools-uikit/spacings';
import Grid from '@commercetools-uikit/grid';
import { useGetProjectQuery, useGetVariantsLazyQuery } from '../../generated/graphql';
import { GQLContext, GQLQueryOptions, GQLCurrentLocale } from '../../utils/gqlHelpers';
import { ListProduct } from '../../types';

type Props = {
  masterProduct: ListProduct;
  references: ListProduct[];
};

const PricesEditPrices = (props: Props): JSX.Element => {
  const readyToLoad = props.references.length;
  const locale = GQLCurrentLocale();

  const project = useGetProjectQuery(GQLContext);

  const [getMaster, masterState] = useGetVariantsLazyQuery(GQLQueryOptions);
  useEffect(() => {
    if (readyToLoad) {
      getMaster({
        variables: {
          locale,
          where: `id="${props.masterProduct.id}"`,
        },
      });
    }
  }, [props.references]);

  const [getReferences, referencesState] = useGetVariantsLazyQuery(GQLQueryOptions);
  useEffect(() => {
    if (readyToLoad) {
      const where = props.references.map((r) => `id="${r.id}"`).join(' or ');
      getReferences({
        variables: {
          locale,
          where,
        },
      });
    }
  }, [props.references]);

  if (masterState.error || referencesState.error) {
    return <>{`Error! ${masterState.error?.message || ''} ${referencesState.error?.message || ''}`}</>;
  }
  if (masterState.loading || referencesState.loading) {
    return <>Loading...</>;
  }

  console.log(masterState.data, referencesState.data);

  if (!props.masterProduct || !props.references.length || !masterState.data || !referencesState.data) return null;

  const { currencies } = project.data.project;
  const master = masterState.data.products.results[0];
  const references = referencesState.data.products.results;
  const masterVariants = master.masterData.current.allVariants;

  const buildVariantReference = (item) => {
    const { id, key } = item;
    return { id, key };
  };

  const buildProductReference = (item) => {
    const { id } = item;
    const { name } = item.masterData.current;
    return { id, name };
  };

  const buildVariantPrices = (masterVariant) => {
    const reference = references[0];
    const referenceVariants = reference.masterData.current.allVariants;

    const referencePrices = referenceVariants.map((variant) => {
      return {
        price: { amount: '', currencyCode: currencies[0] },
        references: [
          {
            product: buildProductReference(reference),
            variant: buildVariantReference(variant),
          },
        ],
      };
    });

    return {
      variant: buildVariantReference(masterVariant),
      referencePrices,
    };
  };

  const priceObject = {
    product: buildProductReference(props.masterProduct),
    references: references.map((r) => buildProductReference(r)),
    variantPrices: masterVariants.map((masterVariant) => buildVariantPrices(masterVariant)),
  };

  console.log('prices', priceObject, masterState);

  return (
    <>
      <Grid gridGap="16px" gridAutoColumns="1fr" gridTemplateColumns="repeat(3, 1fr)">
        {priceObject.variantPrices.map((variantPrice, variantPriceIndex) => (
          <Grid.Item key={variantPrice.variant.id}>
            <Card theme="light" type="raised">
              <Spacings.Stack scale="s">
                <Text.Headline as="h2">{variantPrice.variant.key}</Text.Headline>
                {variantPrice.referencePrices.map((referencePrice, referencePriceIndex) => {
                  const key = referencePrice.references.map((ref) => `${ref.product.id}-${ref.variant.id}`).join('+');
                  const label = referencePrice.references
                    .map((ref) => `${ref.variant.key} - ${ref.product.name}`)
                    .join(' + ');
                  return (
                    <MoneyField
                      title={label}
                      value={referencePrice.price}
                      onChange={(event) => {
                        console.log(
                          priceObject.variantPrices[variantPriceIndex].referencePrices[referencePriceIndex].price
                            .amount,
                          event.target.value,
                        );

                        priceObject.variantPrices[variantPriceIndex].referencePrices[referencePriceIndex].price.amount =
                          event.target.value;

                        console.log(
                          priceObject.variantPrices[variantPriceIndex].referencePrices[referencePriceIndex].price
                            .amount,
                          event.target.value,
                        );
                      }}
                      currencies={currencies}
                      key={key}
                    />
                  );
                })}
              </Spacings.Stack>
            </Card>
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
};

PricesEditPrices.displayName = 'PricesEditPrices';
export default PricesEditPrices;
