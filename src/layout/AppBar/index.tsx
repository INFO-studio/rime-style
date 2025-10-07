import type { FC } from 'react';
import ThemeChange from '@/layout/AppBar/components/ThemeChange';
import TranslationChange from '@/layout/AppBar/components/TranslationChange';
import { useTranslation } from '@/translation';
import Menu from '@/layout/AppBar/components/Menu';

const AppBar: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={'p-4 bg-[var(--accent)] flex items-center justify-between'}>
      <div className={'sarasa'}>{t('title')}</div>
      <div className={'flex items-center gap-2'}>
        <ThemeChange />
        <TranslationChange />
        <Menu />
      </div>
    </div>
  );
};

export default AppBar;
