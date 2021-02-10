import React from 'react';
import Text from '@commercetools-uikit/text';
import messages from './messages';

const ViewOne = (): JSX.Element => <Text.Body intlMessage={messages.title} />;
ViewOne.displayName = 'ViewOne';

export default ViewOne;
