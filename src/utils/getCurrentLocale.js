import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';

const getCurrentLocale = () => {
  const { locale } = useApplicationContext((applicationContext) => ({
    locale: applicationContext.dataLocale,
  }));
  return locale;
};

export default getCurrentLocale;
