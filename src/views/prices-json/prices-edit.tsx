import React, { useState } from 'react';
import Text from '@commercetools-uikit/text';
import { InfoModalPage } from '@commercetools-frontend/application-components';
import Tag from '@commercetools-uikit/tag';
import Spacings from '@commercetools-uikit/spacings';
import PrimaryButton from '@commercetools-uikit/primary-button';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import { PlusBoldIcon } from '@commercetools-uikit/icons';
import { ListProduct } from '../../types';
import ProductsTable from '../../components/products-table';
import PricesEditPrices from './prices-edit-prices';

type Props = {
  rows: ListProduct[];
  masterProduct: ListProduct;
};

const PricesEdit = (props: Props): JSX.Element => {
  const [showReferences, setShowReferences] = useState<boolean>(false);
  const [references, setReferences] = useState<ListProduct[]>([]);

  return (
    <>
      <Spacings.Stack scale="m">
        <Text.Body>Select pricing combination</Text.Body>

        <Spacings.Inline scale="m">
          <SecondaryButton
            iconLeft={<PlusBoldIcon />}
            label="Select references"
            onClick={() => setShowReferences(true)}
          />
        </Spacings.Inline>

        <Spacings.Inline scale="s">
          {references.map((reference) => (
            <Tag
              key={reference.id}
              horizontalConstraint={5}
              onRemove={() => {
                const newReferences = references.filter((r) => r !== reference);
                setReferences(newReferences);
              }}
            >
              {reference.masterData.current.name}
            </Tag>
          ))}
        </Spacings.Inline>

        <PricesEditPrices masterProduct={props.masterProduct} references={references} />
      </Spacings.Stack>

      <InfoModalPage
        title="References"
        isOpen={showReferences}
        onClose={() => setShowReferences(false)}
        subtitle={<Text.Body>Add reference</Text.Body>}
        topBarCurrentPathLabel="References"
        topBarPreviousPathLabel="Back"
        level={2}
      >
        <Spacings.Stack scale="m">
          <ProductsTable
            rows={props.rows}
            setSelectedRows={(selectedRows: ListProduct[]) => setReferences(selectedRows)}
            multiSelect
          />
          <div>
            <PrimaryButton label="Done" onClick={() => setShowReferences(false)} />
          </div>
        </Spacings.Stack>
      </InfoModalPage>
    </>
  );
};

PricesEdit.displayName = 'PricesEdit';
export default PricesEdit;
