import { it } from "./_shared/i18n/it";

declare module "react-i18next" {
  interface Resources {
    it: typeof it["translation"];
    en: typeof it["translation"];
  }
}
