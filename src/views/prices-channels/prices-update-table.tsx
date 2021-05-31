/**
 * Handles showing variant prices in a table
 * Columns are storage types
 * Rows are channels
 * This is a prototype and needs some work :-)
 */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from '@commercetools-uikit/data-table';
import DateRangeInput from '@commercetools-uikit/date-range-input';
import CollapsiblePanel from '@commercetools-uikit/collapsible-panel';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import { PlusBoldIcon, BinLinearIcon } from '@commercetools-uikit/icons';
import SpacingsStack from '@commercetools-uikit/spacings-stack';
import SpacingsInsetSquish from '@commercetools-uikit/spacings-inset-squish';
import { GQLCurrentLocale, GQLQueryOptions } from '../../utils/gqlHelpers';
import { ReduxState } from '../../types';
import { GetChannelsQueryVariables, ProductPrice, useGetChannelsLazyQuery } from '../../generated/graphql';
import SimpleMoneyInput from '../../components/simple-money-input';

const PricesUpdateTable = (): JSX.Element => {
  const locale = GQLCurrentLocale();

  const [showTimeLimitedPrices, setShowTimeLimitedPrices] = useState<boolean>(false);

  const product = useSelector((state: any) => (state.customAppPrices as ReduxState)?.productPrices);
  const variants = product?.masterData.current?.allVariants;
  const storages = variants.map((variant) => variant.attributesRaw.find((x) => x.name === 'Storage')?.value);
  const uniqueStorages = Array.from(new Set(storages));

  // Setup channel fetching
  const [getChannelsQuery, channelsState] = useGetChannelsLazyQuery(GQLQueryOptions);

  // Start channel fetch
  useEffect(() => {
    const subscriptionIds = variants
      .map((variant) => variant.attributesRaw.find((x) => x.name === 'Subscriptions')?.value)
      .flat(1)
      .filter((x) => !!x)
      .map((x) => x.id);

    if (!subscriptionIds.length) return;

    const uniqueSubscriptionIds = Array.from(new Set(subscriptionIds));
    const uniqueSubscriptionIdsAsQueryString = `"${uniqueSubscriptionIds.join('", "')}"`;

    const variables: GetChannelsQueryVariables = {
      locale,
      where: `custom(fields(Products(id in (${uniqueSubscriptionIdsAsQueryString}))))`,
    };
    getChannelsQuery({ variables });
  }, []);

  // Quick channel state handling. Should be changed.
  if (!channelsState.called || channelsState.loading || channelsState.error) return null;

  // Columns
  const subscriptionColumn = {
    key: 'subscription',
    label: '',
    renderItem: (item) => item.subscription,
    width: '250px',
  };
  const storageColumns = uniqueStorages.map((storage) => ({
    key: storage,
    label: storage,
    renderItem: (item) => {
      const price = { ...item.price, id: Math.random().toString() }; // Quick hack to make id unique
      return <SimpleMoneyInput price={price as ProductPrice} onValueUpdated={() => {}} />;
    },
    width: '250px',
  }));
  const columns = [subscriptionColumn, ...storageColumns];

  // Rows
  const rows = channelsState.data.channels.results.map((x) => ({
    id: x.id,
    subscription: x.name,
    price: {
      // A hardcoded price
      value: {
        type: 'centPrecision',
        currencyCode: 'DKK',
        centAmount: 12300,
        fractionDigits: 2,
      },
    },
  }));

  // UI
  if (!variants) return null;
  return (
    <>
      <DataTable rows={rows} columns={columns} maxHeight={'max(300px, calc(100vh - 150px))'} />

      {/* Quick UI to illustrate that prices could be time limited */}
      <br />
      <SecondaryButton
        iconLeft={<PlusBoldIcon />}
        label="Add campaign prices"
        onClick={() => setShowTimeLimitedPrices(true)}
      />
      <br />
      <br />
      {showTimeLimitedPrices && (
        <>
          <CollapsiblePanel isClosed={false} onToggle={() => {}} header="Time limited prices">
            <SpacingsStack>
              <DateRangeInput
                placeholder="Select a date..."
                value={['2021-05-20', '2021-05-31']}
                onChange={() => {}}
                horizontalConstraint={6}
              />
              <DataTable rows={rows} columns={columns} maxHeight={'max(300px, calc(100vh - 150px))'} />
              <SpacingsInsetSquish scale="s">
                <SecondaryButton
                  iconLeft={<BinLinearIcon />}
                  label="Delete these time limited prices"
                  onClick={() => setShowTimeLimitedPrices(false)}
                />
              </SpacingsInsetSquish>
            </SpacingsStack>
          </CollapsiblePanel>
        </>
      )}
      <br />
      <br />
      <br />
    </>
  );
};

PricesUpdateTable.displayName = 'PricesUpdateTable';
export default PricesUpdateTable;
