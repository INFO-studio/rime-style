import keys from '@/translation/keys';
import { implementList } from '@/translation/const.ts';
import type { ReactNode } from 'react';

export type TranslationNoReplacement = 'none';

export type TranslationWithReplacement = {
  [key: string]: 'string' | 'number' | 'react';
};

export type TranslationReplacements =
  | TranslationWithReplacement
  | TranslationNoReplacement;

export type TranslationKeysType = {
  [key: string]: TranslationReplacements;
};

export type TranslationKeys = typeof keys;

export type TranslationKey = keyof TranslationKeys;

export type TranslationConfig<T extends TranslationKey> =
  TranslationKeys[T] extends TranslationNoReplacement
    ? undefined
    : {
        replace: {
          [K in keyof TranslationKeys[T]]: TranslationKeys[T][K] extends 'string'
            ? string
            : TranslationKeys[T][K] extends 'number'
              ? number
              : TranslationKeys[T][K] extends 'react'
                ? ReactNode
                : never;
        };
      };

export type TranslationFunctionReturnType<T extends TranslationKey> =
  TranslationKeys[T] extends TranslationWithReplacement
    ? 'react' extends TranslationKeys[T][keyof TranslationKeys[T]]
      ? ReactNode
      : string
    : string;

export type TranslationValue<T extends TranslationKey> =
  TranslationKeys[T] extends TranslationNoReplacement
    ? string
    : TranslationKeys[T] extends TranslationWithReplacement
      ? (config: TranslationConfig<T>) => TranslationFunctionReturnType<T>
      : never;

export type TranslationImplement = (typeof implementList)[number];

export type Translation = {
  [K in TranslationKey]: TranslationValue<K>;
};

export type TFunction = <T extends TranslationKey>(
  key: T,
  ...args: TranslationConfig<T> extends undefined
    ? [config?: undefined, implement?: TranslationImplement]
    : [config: TranslationConfig<T>, implement?: TranslationImplement]
) => TranslationFunctionReturnType<T>;
