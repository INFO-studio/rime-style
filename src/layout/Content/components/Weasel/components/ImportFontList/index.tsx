import { type FC, useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { useTranslation } from '@/translation';
import CodeBlock from '@/components/common/CodeBlock';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import useFontListStore from '@/stores/fontListStore.ts';
import { toast } from 'sonner';

const ImportFontList: FC = () => {
  const { t } = useTranslation();
  const { fontList, setFontList } = useFontListStore();
  const [fontListTextarea, setFontListTextarea] = useState<string>(
    fontList === null ? '' : fontList.join('\n')
  );
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleImport = () => {
    setFontList(fontListTextarea.split('\n'));
    toast.success('已复制到剪贴板');
    setDialogOpen(false);
  };
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setDialogOpen(true)}
          className={'w-full shrink-1'}
        >
          {t('import_font_list')}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('import_font_list')}</DialogTitle>
          <DialogDescription>
            {t('import_font_list_description')}
          </DialogDescription>
        </DialogHeader>
        <div>{t('import_font_list_guide_1')}</div>
        <Tabs className={'w-full overflow-hidden'}>
          <TabsList>
            <TabsTrigger value={'powershell'}>Powershell</TabsTrigger>
            <TabsTrigger value={'cmd'}>cmd</TabsTrigger>
          </TabsList>
          <TabsContent value={'powershell'}>
            <CodeBlock
              code={
                '[System.Drawing.Text.InstalledFontCollection]::new().Families.Name | Sort-Object | Set-Clipboard'
              }
              canCopy
            />
          </TabsContent>
          <TabsContent value={'cmd'}>
            <CodeBlock
              code={
                'powershell -Command "[System.Drawing.Text.InstalledFontCollection]::new().Families.Name | Sort-Object | Out-File fonts_list.txt"'
              }
              canCopy
            />
          </TabsContent>
        </Tabs>
        <div>{t('import_font_list_guide_2')}</div>
        <Textarea
          className={'resize-none'}
          value={fontListTextarea}
          onChange={e => setFontListTextarea(e.target.value)}
          rows={5}
        />
        <DialogFooter>
          <Button onClick={handleImport}>保存</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImportFontList;
