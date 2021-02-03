import {
  NOTIFICATION_DOMAINS,
  NOTIFICATION_KINDS_SIDE,
} from '@commercetools-frontend/constants';
import { useShowNotification } from '@commercetools-frontend/actions-global';

/**
 * Custom hook (wrapper) to show notifications
 * Use example:
 *
 * const { notifySuccess, notifyError } = useNotify();
 * notifySuccess('test');
 * notifyError('test');
 */
const useNotify = () => {
  const notifySuccess = useShowNotification({
    domain: NOTIFICATION_DOMAINS.SIDE,
    kind: NOTIFICATION_KINDS_SIDE.success,
  });

  const notifyError = useShowNotification({
    domain: NOTIFICATION_DOMAINS.SIDE,
    kind: NOTIFICATION_KINDS_SIDE.error,
  });

  return {
    notifySuccess: (text) => notifySuccess({ text }),
    notifyError: (text) => notifyError({ text }),
  };
};

export default useNotify;
