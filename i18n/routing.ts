import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en'],

  // Used when no locale matches
  defaultLocale: 'fr',

  // Prefix the default locale as well (e.g., /fr/about instead of /about)
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
