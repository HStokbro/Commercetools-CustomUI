/**
 * Helper for getting the user selected locale
 * Locale is used for querying data
 */
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';

const getCurrentLocale = (): string | null => {
  const { locale } = useApplicationContext((applicationContext) => ({
    locale: applicationContext.dataLocale,
  }));
  return locale;
};

export default getCurrentLocale;
