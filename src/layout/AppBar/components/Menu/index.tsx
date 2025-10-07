import { type FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical as IconEllipsisVertical } from 'lucide-react';
import { useTranslation } from '@/translation';
import useFontListStore from '@/stores/fontListStore.ts';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx';
import CodeBlock from '@/components/common/CodeBlock';
import { Textarea } from '@/components/ui/textarea.tsx';
import { toast } from 'sonner';
import { match } from 'ts-pattern';

const Menu: FC = () => {
  const { t } = useTranslation();
  const { fontList, setFontList } = useFontListStore();
  const [clearFontDataDialogOpen, setClearFontDataDialogOpen] =
    useState<boolean>(false);
  const [changeFontDataDialogOpen, setChangeFontDataDialogOpen] =
    useState<boolean>(false);
  const [fontListTextarea, setFontListTextarea] = useState<string>(
    fontList === null ? '' : fontList.join('\n')
  );
  const handleClearFontData = () => {
    setFontList(null);
    setClearFontDataDialogOpen(false);
    setFontListTextarea('');
  };
  const handleImportFontList = () => {
    if (fontListTextarea.trim() === '') {
      toast.error('输入框中无内容');
    } else {
      setFontList(fontListTextarea.split('\n'));
      toast.success('导入成功');
      setChangeFontDataDialogOpen(false);
    }
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size={'icon'} className={'bg-input!'}>
            <IconEllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuGroup>
            <DropdownMenuLabel>{t('menu_font')}</DropdownMenuLabel>
            {match(fontList)
              .with(null, () => (
                <DropdownMenuItem
                  onClick={() => setChangeFontDataDialogOpen(true)}
                  className={'pl-6'}
                >
                  {t('import_font_list')}
                </DropdownMenuItem>
              ))
              .otherwise(() => (
                <>
                  <DropdownMenuItem
                    onClick={() => setClearFontDataDialogOpen(true)}
                    className={'pl-6'}
                  >
                    {t('menu_clear_font_data')}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setChangeFontDataDialogOpen(true)}
                    className={'pl-6'}
                  >
                    {t('menu_change_font_data')}
                  </DropdownMenuItem>
                </>
              ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog
        open={clearFontDataDialogOpen}
        onOpenChange={setClearFontDataDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('menu_clear_font_data_confirm_title')}</DialogTitle>
          </DialogHeader>
          {t('menu_clear_font_data_confirm_detail')}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t('cancel')}</Button>
            </DialogClose>
            <Button variant={'destructive'} onClick={handleClearFontData}>
              {t('confirm')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={changeFontDataDialogOpen}
        onOpenChange={setChangeFontDataDialogOpen}
      >
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
            <Button onClick={handleImportFontList}>{t('import')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Menu;
