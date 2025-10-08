import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { FC } from 'react';
import { useTranslation } from '@/translation';
import Weasel from '@/layout/Content/components/Weasel';

const Content: FC = () => {
  const { t } = useTranslation();
  return (
    <Tabs
      defaultValue="weasel"
      className={'py-4 w-full flex flex-col items-center'}
    >
      <TabsList>
        <TabsTrigger value="weasel">{t('weasel')}</TabsTrigger>
        <TabsTrigger value="squirrel">{t('squirrel')}</TabsTrigger>
      </TabsList>
      <TabsContent value="weasel" className={'p-4'}>
        <Weasel />
      </TabsContent>
      <TabsContent value="squirrel">{t('coming_soon')}</TabsContent>
    </Tabs>
  );
};

export default Content;
