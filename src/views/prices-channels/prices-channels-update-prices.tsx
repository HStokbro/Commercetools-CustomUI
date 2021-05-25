import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MoneyInput from '@commercetools-uikit/money-input';
import { Immutable, produce, Draft } from 'immer';
import { GQLCurrentLocale } from '../../utils/gqlHelpers';
import { ReduxState } from '../../types';

type UIPrice = {
  id: string;
  amount: string;
  currency: string;
};
type UIPrices = Immutable<UIPrice[]>;

const PricesChannelsUpdatePrices = (): JSX.Element => {
  const locale = GQLCurrentLocale();
  const currencies = useSelector((state) => (state.customAppPrices as ReduxState)?.projectQuery.project.currencies);
  const variants = useSelector(
    (state) => (state.customAppPrices as ReduxState)?.pricesQuery.product?.masterData.current?.allVariants,
  );

  // Build draft state
  const getOriginalPrices = (): UIPrices =>
    variants
      .map((variant) =>
        variant.prices.map((price) => ({
          id: price.id,
          ...MoneyInput.parseMoneyValue(price.value, locale),
        })),
      )
      .flat(1);
  const [uiPrices, setUIPrices] = useState<UIPrices>(getOriginalPrices());

  const save = () => {
    // TODO - MoneyInput conversions should be done when saving
    // const newValue = MoneyInput.convertToMoneyValue({ amount: price, currencyCode: 'DKK' }, locale);
  };
  console.log('draftPrices', uiPrices);

  return (
    <>
      {variants.map((variant) => {
        const storage = variant.attributesRaw.find((x) => x.name === 'Storage')?.value;
        const color = variant.attributesRaw.find((x) => x.name === 'ColorDescription')?.value[locale];

        return (
          <div key={variant.id}>
            <br />
            <div>
              SKU:
              {variant.sku}
              <br />
              Storage:
              {storage}
              <br />
              Color:
              {color}
              <br />
            </div>
            <br />

            {variant.prices.map((price) => {
              return (
                <div key={price.id}>
                  <p>{`${price.id} - Channel: ${price.channel?.name} - validFrom: ${price.validFrom} - validTo: ${price.validUntil}`}</p>
                  <MoneyInput
                    id={price.id}
                    name={price.id}
                    value={uiPrices.find((x) => x.id === price.id)}
                    onChange={(event) => {
                      // Field value editing only works if data is updated on change
                      setUIPrices(
                        produce((draft: Draft<UIPrices>) => {
                          draft.find((x) => x.id === price.id).amount = event.target.value;
                        }),
                      );
                    }}
                    currencies={currencies}
                    key={price.id}
                    horizontalConstraint={4}
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

PricesChannelsUpdatePrices.displayName = 'PricesChannelsUpdatePrices';
export default PricesChannelsUpdatePrices;
