import React, { useEffect } from 'react';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Spacings from '@commercetools-uikit/spacings';
import { useSetProductAttributesMutation } from '../../generated/graphql';
import useNotify from '../../utils/useNotify';
import { GQLContext } from '../../constants';
import { ListProduct } from '../../types';

type Props = {
  selection: ListProduct[];
  selectionAddon: ListProduct[];
  onSuccess: () => void;
};

const BundleAsAttributeButton = (props: Props): JSX.Element => {
  const [setProductAttributesMutation, { loading, error }] = useSetProductAttributesMutation({
    ...GQLContext,
  });
  const { notifySuccess, notifyError } = useNotify();

  useEffect(() => {
    if (error) notifyError(`Error: "${error.message}"`);
  }, [error]);

  const createBundleAsString = async (fieldName: string) => {
    const selected = props.selectionAddon.map((row) => ({
      name: row.masterData.current.name,
    }));

    const result = await setProductAttributesMutation({
      variables: {
        id: props.selection[0].id,
        version: props.selection[0].version,
        fieldName,
        // String values need to be wrapped in quotes
        value: `"${JSON.stringify(selected).replaceAll('"', '\\"')}"`,
      },
    });

    if (result) {
      notifySuccess('Bundle created and published');
      props.onSuccess();
    }
  };

  const noneSelected = props.selection.length === 0 || props.selectionAddon.length === 0;
  return (
    <Spacings.Inline scale="m">
      <PrimaryButton
        label="Create bundle - set attribute on product"
        onClick={() => createBundleAsString('product-bundle-data')}
        isDisabled={noneSelected}
      />
      <PrimaryButton
        label="- on variants"
        onClick={() => createBundleAsString('variant-bundle-data')}
        isDisabled={noneSelected}
      />
      {loading && <span>Loading...</span>}
    </Spacings.Inline>
  );
};

BundleAsAttributeButton.displayName = 'BundleAsAttributeButton';
export default BundleAsAttributeButton;
