import { type FC, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input.tsx';
import useFontListStore from '@/stores/fontListStore.ts';
import { match } from 'ts-pattern';
import ImportFontList from '@/layout/Content/components/Weasel/components/ImportFontList';
import FontSelect from '@/components/common/FontSelect';
import useStyleStore from '@/stores/styleStore.ts';
import { AestheticFluidBg } from '@/components/common/Background/AestheticFluidBg';
import Preview from '@/components/common/Preview';
import ColorPicker from '@/components/common/ColorPicker';
import rgba from '@/utils/rgba.ts';
import {
  MoveHorizontal as IconMoveHorizontal,
  MoveVertical as IconMoveVertical,
  SquircleDashed as IconSquircleDashed,
} from 'lucide-react';
import InputNumber from '@/components/common/InputNumber';
import ColorChecker from '@/components/common/ColorChecker';

const Weasel: FC = () => {
  const { fontList } = useFontListStore();
  const {
    style,
    setStyleStyleLayoutValue,
    setStyleColorSchemeValue,
    styleTemp,
    onChangeColor,
  } = useStyleStore();
  const [font, setFont] = useState<string>('');

  useEffect(() => {
    const background = new AestheticFluidBg({
      dom: 'background',
      colors: [
        '#ee0000',
        '#00ee00',
        '#0000ee',
        '#eeee00',
        '#00eeee',
        '#ee00ee',
        '#eeeeee',
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
      <div className={'w-full h-full flex flex-col gap-4 max-w-125'}>
        配色方案
        <div className={'flex flex-col gap-2'}>
          <div className={'flex flex-col gap-1'}>
            配色代码
            <Input
              placeholder="code"
              value={styleTemp.colorScheme.code}
              onChange={e => setStyleColorSchemeValue('code', e.target.value)}
            />
          </div>
          <div className={'flex flex-col gap-1'}>
            配色名称
            <Input
              placeholder="code"
              value={styleTemp.colorScheme.name}
              onChange={e => setStyleColorSchemeValue('name', e.target.value)}
            />
          </div>
          <div className={'flex flex-col gap-1'}>
            作者
            <Input
              placeholder="code"
              value={styleTemp.colorScheme.author}
              onChange={e => setStyleColorSchemeValue('author', e.target.value)}
            />
          </div>
          <div className={'flex flex-col gap-1'}>
            输入文字颜色
            <div className={'flex items-center gap-4'}>
              <div
                className={
                  'w-8 h-8 shrink-0 rounded-md border border-2 dark:border-input'
                }
                style={{ backgroundColor: rgba(style.colorScheme.textColor) }}
              />
              <Input
                placeholder="textColor"
                value={styleTemp.colorScheme.textColor}
                onChange={e => onChangeColor('textColor', e.target.value)}
              />
            </div>
          </div>
          <div className={'flex flex-col gap-1'}>
            标签颜色
            <div className={'flex items-center gap-4'}>
              <div
                className={
                  'w-8 h-8 shrink-0 rounded-md border border-2 dark:border-input'
                }
                style={{ backgroundColor: rgba(style.colorScheme.labelColor) }}
              />
              <Input
                placeholder="labelColor"
                value={styleTemp.colorScheme.labelColor}
                onChange={e => onChangeColor('labelColor', e.target.value)}
              />
            </div>
          </div>
          <div className={'flex flex-col gap-1'}>
            注释颜色
            <div className={'flex items-center gap-4'}>
              <ColorChecker color={style.colorScheme.commentTextColor} />
              <Input
                placeholder="commentTextColor"
                value={styleTemp.colorScheme.commentTextColor}
                onChange={e =>
                  onChangeColor('commentTextColor', e.target.value)
                }
              />
            </div>
          </div>
          <div className={'flex flex-col gap-1'}>
            边框颜色
            <div className={'flex items-center gap-4'}>
              <ColorChecker color={style.colorScheme.borderColor} />
              <Input
                placeholder="borderColor"
                value={styleTemp.colorScheme.borderColor}
                onChange={e => onChangeColor('borderColor', e.target.value)}
              />
            </div>
          </div>
          <div className={'flex flex-col gap-1'}>
            阴影颜色
            <div className={'flex items-center gap-4'}>
              <ColorChecker color={style.colorScheme.shadowColor} />
              <Input
                placeholder="shadowColor"
                value={styleTemp.colorScheme.shadowColor}
                onChange={e => onChangeColor('shadowColor', e.target.value)}
              />
            </div>
          </div>
          <div className={'flex flex-col gap-1'}>
            背景颜色
            <div className={'flex items-center gap-4'}>
              <ColorChecker color={style.colorScheme.backColor} />
              <Input
                placeholder="backColor"
                value={styleTemp.colorScheme.backColor}
                onChange={e => onChangeColor('backColor', e.target.value)}
              />
            </div>
          </div>
          <div className={'flex flex-col gap-1'}>
            背景位移 & 背景扩散收缩
            <div className={'flex items-center gap-4'}>
              <InputNumber
                value={style.style.layout.shadowOffsetX}
                onChange={value =>
                  setStyleStyleLayoutValue('shadowOffsetX', value)
                }
                icon={<IconMoveHorizontal />}
                placeholder={'shadowOffsetX'}
              />
              <InputNumber
                value={style.style.layout.shadowOffsetY}
                onChange={value =>
                  setStyleStyleLayoutValue('shadowOffsetY', value)
                }
                icon={<IconMoveVertical />}
                placeholder={'shadowOffsetY'}
              />
              <InputNumber
                value={style.style.layout.shadowRadius}
                onChange={value =>
                  setStyleStyleLayoutValue('shadowRadius', value)
                }
                icon={<IconSquircleDashed />}
                placeholder={'shadowRadius'}
              />
            </div>
          </div>
        </div>
        <div className={'flex items-center gap-8'}>
          <div
            className={'h-8 shrink-0 whitespace-nowrap'}
            style={{ fontFamily: font }}
          >
            hello! 字体测试!
          </div>
          {match(fontList)
            .with(null, () => <ImportFontList />)
            .otherwise(() => (
              <FontSelect value={font} onChange={setFont} />
            ))}
        </div>
      </div>
      <div className={'flex items-center justify-center'}>
        <ColorPicker
          color={style.colorScheme.textColor}
          onChange={color => onChangeColor('textColor', color)}
        />
      </div>
    </div>
  );
};

export default Weasel;
