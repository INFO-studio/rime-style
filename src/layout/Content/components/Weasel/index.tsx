import { type FC, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input.tsx';
import useFontListStore from '@/stores/fontListStore.ts';
import { match } from 'ts-pattern';
import ImportFontList from '@/layout/Content/components/Weasel/components/ImportFontList';
import FontSelect from '@/components/common/FontSelect';
import useStyleStore from '@/stores/styleStore.ts';
import { AestheticFluidBg } from '@/components/common/Background/AestheticFluidBg';
import Preview from '@/components/common/Preview';

const Weasel: FC = () => {
  const { fontList } = useFontListStore();
  const { style, setStyleColorSchemeValue } = useStyleStore();
  const [backgroundColor, setBackgroundColor] = useState<string>('#aabbcc');
  const [font, setFont] = useState<string>('');

  useEffect(() => {
    const background = new AestheticFluidBg({
      dom: 'background',
      colors: [
        '#d4d4d4',
        '#ffffff',
        '#cfcfce',
        '#e8e8e8',
        '#ebebeb',
        '#f0f0f0',
      ],
      loop: true,
    });
    return () => background.destroy();
  }, []);

  return (
    <div className={'flex gap-8'}>
      <div
        id={'background'}
        className={
          'w-50 h-100 rounded-md overflow-hidden bg-white shrink-0 flex items-center justify-center'
        }
      >
        <Preview rimeStyle={style} />
      </div>
      <div className={'w-full h-full flex flex-col gap-4'}>
        配色方案
        <div className={'flex flex-col gap-2'}>
          <div className={'flex flex-col gap-1'}>
            配色代码
            <Input
              placeholder="code"
              value={style.colorScheme.code}
              onChange={e => setStyleColorSchemeValue('code', e.target.value)}
            />
          </div>
          <div className={'flex flex-col gap-1'}>
            配色名称
            <Input
              placeholder="code"
              value={style.colorScheme.name}
              onChange={e => setStyleColorSchemeValue('name', e.target.value)}
            />
          </div>
          <div className={'flex flex-col gap-1'}>
            作者
            <Input
              placeholder="code"
              value={style.colorScheme.author}
              onChange={e => setStyleColorSchemeValue('author', e.target.value)}
            />
          </div>
        </div>
        <div className={'flex items-center gap-8'}>
          <div className={'w-8 h-8 shrink-0'} style={{ backgroundColor }}></div>
          <Input
            placeholder="BackgroundColor"
            value={backgroundColor}
            onChange={e => setBackgroundColor(e.target.value)}
          />
        </div>
        <div className={'flex items-center gap-8'}>
          <div
            className={'h-8 shrink-0 whitespace-nowrap'}
            style={{ fontFamily: font }}
          >
            hello! my friend
          </div>
          {match(fontList)
            .with(null, () => <ImportFontList />)
            .otherwise(() => (
              <FontSelect value={font} onChange={setFont} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Weasel;
