import type { FC } from 'react';
import { useTranslation } from '@/translation';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={'p-4 bg-[var(--accent)] sarasa'}>
      <div
        className={'flex flex-col items-center md:justify-between md:flex-row'}
      >
        <div>
          {t('footer_note', {
            replace: {
              copyright: t('footer_copyright', {
                replace: {
                  startYear: '2025',
                  endYear: '2025',
                  author: t('footer_author'),
                },
              }),
              inspired: t('footer_inspired', {
                replace: {
                  inspiredBy: (
                    <a
                      className={'px-1'}
                      href={'https://bennyyip.github.io/Rime-See-Me/'}
                      target={'_blank'}
                    >
                      {t('rime_seeme')}
                    </a>
                  ),
                },
              }),
            },
          })}
        </div>
        <div>
          {t('footer_powered', {
            replace: {
              poweredBy: (
                <div className={'inline-flex gap-1 mx-1'}>
                  <a href={'https://vite.dev/'} target={'_blank'}>
                    Vite
                  </a>
                  {'/'}
                  <a href={'https://react.dev/'} target={'_blank'}>
                    React
                  </a>
                  {'/'}
                  <a href={'https://ui.shadcn.com/'} target={'_blank'}>
                    shadcn
                  </a>
                  {'/'}
                  <a href={'https://lucide.dev/'} target={'_blank'}>
                    Lucide
                  </a>
                </div>
              ),
            },
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
