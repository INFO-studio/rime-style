import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type FC, useState } from 'react';
import { useTranslation } from '@/translation';
import Weasel from '@/layout/Content/components/Weasel';
import { cn } from '@/lib/utils.ts';

const Content: FC = () => {
  type Tab = 'weasel' | 'squirrel';
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState<Tab>('weasel');
  return (
    <Tabs
      defaultValue="weasel"
      value={tabValue}
      onValueChange={value => setTabValue(value as Tab)}
      className={'py-4 w-full flex flex-col items-center'}
    >
      <TabsList>
        <TabsTrigger value="weasel">{t('weasel')}</TabsTrigger>
        <TabsTrigger value="squirrel">{t('squirrel')}</TabsTrigger>
      </TabsList>
      <TabsContent
        value="weasel"
        forceMount
        className={cn('p-4', { hidden: tabValue !== 'weasel' })}
      >
        <Weasel />
      </TabsContent>
      <TabsContent
        value="squirrel"
        forceMount
        className={cn('p-4', { hidden: tabValue !== 'squirrel' })}
      >
        {t('coming_soon')}
      </TabsContent>
    </Tabs>
  );
};

export default Content;
