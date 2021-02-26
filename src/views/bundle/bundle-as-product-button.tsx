import React, { useEffect } from 'react';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Spacings from '@commercetools-uikit/spacings';
import { useAddProductBundleMutation } from '../../generated/graphql';
import useNotify from '../../utils/useNotify';
import { GQLTarget } from '../../constants';
import { ListProduct } from '../../types';

type Props = {
  selection: ListProduct[];
  selectionAddon: ListProduct[];
  onSuccess: () => void;
};

const BundleAsProductButton = (props: Props): JSX.Element => {
  const [addProductBundleMutation, { loading, error }] = useAddProductBundleMutation({
    ...GQLTarget,
  });
  const { notifySuccess, notifyError } = useNotify();

  useEffect(() => {
    if (error) notifyError(`Error: "${error.message}"`);
  }, [error]);

  const createBundleAsNewProduct = async () => {
    const selectedAsRef = props.selectionAddon.map((row) => ({
      id: row.id,
      typeId: 'product',
    }));

    const result = await addProductBundleMutation({
      variables: {
        name: `bundle-${props.selection[0].masterData.current.name}`,
        slug: `slug-${props.selection[0].masterData.current.name.replaceAll(' ', '-')}`,
        // Need to stringify custom field value, as type is string
        productReferences: JSON.stringify(selectedAsRef),
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
        label="Create bundle - new product"
        onClick={() => createBundleAsNewProduct()}
        isDisabled={noneSelected}
      />
      {loading && <span>Loading...</span>}
    </Spacings.Inline>
  );
};

BundleAsProductButton.displayName = 'BundleAsProductButton';
export default BundleAsProductButton;
