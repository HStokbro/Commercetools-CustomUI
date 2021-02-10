import { NOTIFICATION_DOMAINS, NOTIFICATION_KINDS_SIDE } from '@commercetools-frontend/constants';
import { useShowNotification } from '@commercetools-frontend/actions-global';

/**
 * Custom hook (wrapper) to show notifications
 * Use example:
 *
 * const { notifySuccess, notifyError } = useNotify();
 * notifySuccess('test');
 * notifyError('test');
 *
 * Note: "showNotification" without hooks does not work for some reason, so need to do this hooks workaround.
 */

type UseNotify = {
  notifySuccess: (text: string) => void;
  notifyError: (text: string) => void;
};

const useNotify = (): UseNotify => {
  const show = useShowNotification();

  return {
    notifySuccess: (text: string) =>
      show({
        id: 0,
        text,
        domain: NOTIFICATION_DOMAINS.SIDE,
        kind: NOTIFICATION_KINDS_SIDE.success,
      }),
    notifyError: (text: string) =>
      show({
        id: 0,
        text,
        domain: NOTIFICATION_DOMAINS.SIDE,
        kind: NOTIFICATION_KINDS_SIDE.error,
      }),
  };
};

export default useNotify;
