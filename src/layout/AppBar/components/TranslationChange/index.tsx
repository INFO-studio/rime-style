import type { FC } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx';
import type { TranslationImplement } from '@/translation/type.ts';
import { implementList } from '@/translation/const.ts';
import { useTranslation } from '@/translation';
import styles from './index.module.scss';

const TranslationChange: FC = () => {
  const { language, setLanguage } = useTranslation();
  return (
    <ToggleGroup
      type={'single'}
      variant={'outline'}
      value={language}
      onValueChange={newLanguage =>
        setLanguage(
          (implementList as readonly string[]).includes(newLanguage)
            ? (newLanguage as TranslationImplement)
            : language
        )
      }
      className={styles.translationChange}
    >
      <ToggleGroupItem value={'zh_cn'}>简</ToggleGroupItem>
      <ToggleGroupItem value={'zh_tw'}>繁</ToggleGroupItem>
      <ToggleGroupItem value={'en_us'}>En</ToggleGroupItem>
    </ToggleGroup>
  );
};

export default TranslationChange;
