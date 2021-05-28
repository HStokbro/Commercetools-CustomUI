/**
 * Handles showing all variant prices in fields for easy editing
 * Can save updated prices
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Text from '@commercetools-uikit/text';
import PrimaryButton from '@commercetools-uikit/primary-button';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { GQLCurrentLocale, GQLContext } from '../../utils/gqlHelpers';
import { ReduxState } from '../../types';
import {
  ProductPrice,
  ProductPriceDataInput,
  PublishScope,
  useSetProductPricesMutation,
} from '../../generated/graphql';
import useNotify from '../../utils/useNotify';
import SimpleMoneyInput from '../../components/simple-money-input';
import { setProductPrices, updatePriceValue } from '../../redux/customAppPrices';

const PricesUpdate = (): JSX.Element => {
  const dispatch = useDispatch();
  const locale = GQLCurrentLocale();

  const product = useSelector((state: any) => (state.customAppPrices as ReduxState)?.productPrices);
  const variants = product?.masterData.current?.allVariants;

  // Save handling
  const [setProductPricesMutation, { loading, error }] = useSetProductPricesMutation(GQLContext);
  const { notifySuccess, notifyError } = useNotify();

  useEffect(() => {
    if (error) notifyError(`Error: "${error.message}"`);
  }, [error]);

  const save = async () => {
    const setPriceActions = variants.map((variant) => ({
      setPrices: {
        variantId: variant.id,
        prices: variant.prices.map((price) => {
          const priceData: ProductPriceDataInput = {
            channel: { id: price.channel?.id },
            validFrom: price.validFrom,
            validUntil: price.validUntil,
            value: {
              centPrecision: {
                currencyCode: price.value.currencyCode,
                centAmount: price.value.centAmount,
              },
            },
          };
          return priceData;
        }),
      },
    }));

    const result = await setProductPricesMutation({
      variables: {
        id: product.id,
        version: product.version,
        actions: [...setPriceActions, { publish: { scope: PublishScope.Prices } }],
        locale,
      },
    });

    if (result) {
      notifySuccess('Prices saved');
      dispatch(setProductPrices(result.data.updateProduct));
    }
  };

  // UI
  if (!variants) return null;
  return (
    <>
      {loading && <LoadingSpinner scale="s">Saving prices</LoadingSpinner>}

      <PrimaryButton label="Save" onClick={() => save()} isDisabled={loading} />

      {variants.map((variant) => {
        const storage = variant.attributesRaw.find((x) => x.name === 'Storage')?.value;
        const color = variant.attributesRaw.find((x) => x.name === 'ColorDescription')?.value[locale];

        return (
          <div key={variant.id}>
            <br />
            <br />
            <Text.Body isBold>{`${storage} - ${color}`}</Text.Body>

            {variant.prices.map((price) => {
              return (
                <div key={price.id}>
                  <br />
                  <p>
                    {`Channel: ${price.channel?.name || '---'}`}
                    {price.validFrom && (
                      <>
                        <br />
                        {`valid from: ${price.validFrom}`}
                      </>
                    )}
                    {price.validUntil && (
                      <>
                        <br />
                        {`valid until: ${price.validUntil}`}
                      </>
                    )}
                  </p>
                  <SimpleMoneyInput
                    price={price as ProductPrice}
                    isDisabled={loading}
                    onBlur={(priceValue) => {
                      dispatch(updatePriceValue({ variantId: variant.id, priceId: price.id, priceValue }));
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

PricesUpdate.displayName = 'PricesUpdate';
export default PricesUpdate;
