import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';
import i18Data from 'src/i18n/i18Data';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'fa',
    messages:i18Data,
  });

  // Set i18n instance on app
  app.use(i18n);
});
