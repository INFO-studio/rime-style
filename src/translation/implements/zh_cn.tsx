import type { Translation } from '@/translation/type.ts';

const zh_cn: Translation = {
  title: '中州韵 - 饰毫',
  theme_system: '系统',
  theme_light: '亮色',
  theme_dark: '暗色',
  cancel: '取消',
  confirm: '确认',
  import: '导入',
  menu_font: '字体',
  menu_clear_font_data: '清除字体列表数据',
  menu_clear_font_data_confirm_title: '确认清除字体列表数据',
  menu_clear_font_data_confirm_detail:
    '请确认，这将导致该网站在您浏览器本地存储的字体列表被删除，您可以稍后进行再次获取，但该过程不可逆',
  menu_change_font_data: '修改字体列表数据',
  no_content_in_input: '输入框中无内容',
  rime_seeme: 'Rime 西米',
  weasel: '小狼毫',
  squirrel: '鼠须管',
  import_font_list: '导入字体列表',
  import_font_list_description:
    '用于获取您系统安装的字体列表，信息仅存储在您的浏览器本地存储中，不会上传。您可以随时清除浏览器数据来删除这些信息',
  import_font_list_guide_1: '复制下方命令放入终端并回车',
  import_font_list_guide_2:
    '这会自动将你的系统字体列表复制到剪贴板上，现在，在下面的输入框粘贴',
  import_success: '导入成功',
  coming_soon: '敬请期待……',
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

export default zh_cn;
