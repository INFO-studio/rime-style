import type { Translation } from '@/translation/type.ts';

const zh_tw: Translation = {
  title: '中州韻 - 飾毫',
  theme_system: '系統',
  theme_light: '亮色',
  theme_dark: '暗色',
  cancel: '取消',
  confirm: '確認',
  import: '匯入',
  menu_font: '字型',
  menu_clear_font_data: '清除字型列表資料',
  menu_clear_font_data_confirm_title: '確認清除字型列表資料',
  menu_clear_font_data_confirm_detail:
    '請確認，這將導致該網站在您瀏覽器本機儲存空間中的字型列表被刪除。您可以稍後再次取得，但此過程不可逆',
  menu_change_font_data: '修改字型列表資料',
  no_content_in_input: '輸入方塊中無內容',
  rime_seeme: 'Rime 西米',
  weasel: '小狼毫',
  squirrel: '鼠鬚管',
  import_font_list: '匯入字型列表',
  import_font_list_description:
    '用於取得您系統已安裝的字型列表，這些資訊僅儲存在您的瀏覽器本機儲存空間中，不會上傳。您可以隨時清除瀏覽器資料來刪除這些資訊',
  import_font_list_guide_1: '複製下方指令放入終端並按下 Enter',
  import_font_list_guide_2:
    '這會自動將您的系統字型列表複製到剪貼簿。現在，請在下面的輸入方塊中貼上',
  import_success: '匯入成功',
  coming_soon: '敬請期待……',
  footer_note: config => (
    <>
      {config.replace.copyright}
      {' | '}
      {config.replace.inspired}
    </>
  ),
  footer_copyright: config =>
    config.replace.startYear === config.replace.endYear
      ? `© ${config.replace.startYear} by ${config.replace.author}`
      : `© ${config.replace.startYear}-${config.replace.endYear} by ${config.replace.author}`,
  footer_inspired: config => (
    <>
      {'灵感来源于'}
      {config.replace.inspiredBy}
    </>
  ),
  footer_author: '茵符草',
  footer_powered: config => (
    <>
      {'使用'}
      {config.replace.poweredBy}
      {'搭建'}
    </>
  ),
};

export default zh_tw;
