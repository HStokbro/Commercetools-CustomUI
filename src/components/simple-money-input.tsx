/**
 * Simplifies use of CT MoneyInput.
 * CT MoneyInput requires a different price data format, than what CommerceTools uses (Sigh!)
 * With this component you don't have to worry about it
 * NOTE: At the moment this component only handles amount
 */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MoneyInput from '@commercetools-uikit/money-input';
import { useIntl } from 'react-intl';
import { ReduxState } from '../types';
import { ProductPrice, BaseMoney } from '../generated/graphql';

type MoneyInputValue = { amount: string; currencyCode: string };

type Props = {
  price: ProductPrice;
  onBlur: (priceValue: BaseMoney) => void;
  isDisabled: boolean;
};

const SimpleMoneyInput = (props: Props): JSX.Element => {
  // This is the language from the user profile. Use it for money formatting
  const localeForMoney = useIntl().locale;
  const { currencies } = useSelector((state: any) => (state.customAppPrices as ReduxState)?.projectQuery.project);

  const pricePropInInputFormat = () => MoneyInput.parseMoneyValue(props.price.value, localeForMoney);
  const [inputValue, setInputValue] = useState<MoneyInputValue>(pricePropInInputFormat());

  return (
    <MoneyInput
      id={props.price.id}
      name={props.price.id}
      value={inputValue}
      onChange={(event) => {
        // MoneyInput value editing only works if data is updated with onChange
        if (event.target.name.endsWith('.amount')) {
          setInputValue({ ...inputValue, amount: event.target.value });
        }
      }}
      onBlur={(event) => {
        // Is called twice. Once for currency. Once for amount.
        if (event.target.name.endsWith('.amount')) {
          const value: BaseMoney = MoneyInput.convertToMoneyValue(inputValue, localeForMoney);
          props.onBlur(value);
        }
      }}
      isDisabled={props.isDisabled}
      // currencies={currencies}
      horizontalConstraint={4}
    />
  );
};

SimpleMoneyInput.displayName = 'SimpleMoneyInput';
export default SimpleMoneyInput;
