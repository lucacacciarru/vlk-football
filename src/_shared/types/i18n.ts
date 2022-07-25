import { Normalize, Resources } from 'react-i18next';

export type Locale = 'it' | 'en';

type KeyWithPrefix = Normalize<Resources>;

export type TranslationKey = {
  [K in KeyWithPrefix]: K extends `${Locale}.${infer A}` ? A : never;
}[KeyWithPrefix];
