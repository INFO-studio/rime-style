import type {
  TFunction,
  Translation,
  TranslationConfig,
  TranslationFunctionReturnType,
  TranslationImplement,
  TranslationKey,
} from '@/translation/type.ts';
import { match } from 'ts-pattern';
import { createGlobalStore } from 'hox';
import { useEffect, useMemo, useState } from 'react';
import { isString } from 'lodash';
import { en_us, implementList, zh_cn, zh_tw } from '@/translation';

const getTranslation = <T extends TranslationKey>(
  translation: Translation,
  key: T,
  config: TranslationConfig<T>
): TranslationFunctionReturnType<T> =>
  isString(translation[key]) ? translation[key] : translation[key](config);

export const [useTranslationStore] = createGlobalStore(() => {
  const localStorageTranslationImplement = localStorage.getItem(
    'translation_implement'
  );
  const [language, setLanguage] = useState<TranslationImplement>(
    isString(localStorageTranslationImplement) &&
      (implementList as readonly string[]).includes(
        localStorageTranslationImplement
      )
      ? (localStorageTranslationImplement as TranslationImplement)
      : 'zh_cn'
  );
  useEffect(() => {
    const root = window.document.documentElement;
    const rootLang: Record<TranslationImplement, string> = {
      en_us: 'en-US',
      zh_cn: 'zh-CN',
      zh_tw: 'zh-TW',
    };
    root.lang = rootLang[language];
    root.classList.remove(...implementList);
    root.classList.add(language);
    localStorage.setItem('translation_implement', language);
  }, [language]);
  const t = useMemo<TFunction>(
    () =>
      <T extends TranslationKey>(
        key: T,
        config?: unknown,
        implement?: TranslationImplement
      ): TranslationFunctionReturnType<T> => {
        const newConfig = config as TranslationConfig<T>;
        return match<TranslationImplement | undefined>(implement)
          .with('zh_cn', () => getTranslation(zh_cn, key, newConfig))
          .with('zh_tw', () => getTranslation(zh_tw, key, newConfig))
          .with('en_us', () => getTranslation(en_us, key, newConfig))
          .otherwise(() =>
            getTranslation(
              match(language)
                .with('zh_cn', () => zh_cn)
                .with('zh_tw', () => zh_tw)
                .with('en_us', () => en_us)
                .exhaustive(),
              key,
              newConfig
            )
          );
      },
    [language]
  );
  return {
    language,
    setLanguage,
    t,
  };
});
