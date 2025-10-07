import type { FC } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/theme';
import { match } from 'ts-pattern';
import {
  Moon as IconMoon,
  Sun as IconSun,
  SunMoon as IconSunMoon,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip.tsx';
import { useTranslation } from '@/translation';

const ThemeChange: FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={'bg-input!'}
          variant={'outline'}
          size={'icon'}
          onClick={toggleTheme}
        >
          {match(theme)
            .with('system', () => <IconSunMoon />)
            .with('light', () => <IconSun />)
            .with('dark', () => <IconMoon />)
            .exhaustive()}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="TooltipContent" side={'bottom'}>
        {match(theme)
          .with('system', () => t('theme_system'))
          .with('light', () => t('theme_light'))
          .with('dark', () => t('theme_dark'))
          .exhaustive()}
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeChange;
