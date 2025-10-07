import { type FC, useState } from 'react';
import { Input } from '@/components/ui/input.tsx';
import useFontListStore from '@/stores/fontListStore.ts';
import { match } from 'ts-pattern';
import ImportFontList from '@/layout/Content/components/Weasel/components/ImportFontList';
import FontSelect from '@/components/common/FontSelect';

const Weasel: FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#aabbcc');
  const [font, setFont] = useState<string>('');
  const { fontList } = useFontListStore();

  return (
    <div className={'w-full h-full flex flex-col gap-4'}>
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
  );
};

export default Weasel;
