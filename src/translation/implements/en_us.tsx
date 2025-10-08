import type { Translation } from '@/translation/type.ts';

const en_us: Translation = {
  title: 'Rime - StyleCreator',
  theme_system: 'System',
  theme_light: 'Light',
  theme_dark: 'Dark',
  cancel: 'Cancel',
  confirm: 'Confirm',
  import: 'Import',
  menu_font: 'Font',
  menu_clear_font_data: 'Clear Font List',
  menu_clear_font_data_confirm_title: 'Confirm to Clear Font List Data',
  menu_clear_font_data_confirm_detail:
    "Please confirm that this will delete the font list stored in your browser's local storage for this website. You can retrieve it again later, but this process is irreversible.",
  menu_change_font_data: 'Modify Font List',
  no_content_in_input: 'No content in the input box',
  rime_seeme: 'Rime See Me',
  weasel: 'Weasel',
  squirrel: 'Squirrel',
  import_font_list: 'Import Font List',
  import_font_list_description:
    "Used to retrieve a list of fonts installed on your system. This information is stored only in your browser's local storage and is not uploaded. You can delete this information at any time by clearing your browser data.",
  import_font_list_guide_1:
    'Copy the command below and paste it into your terminal, then press Enter.',
  import_font_list_guide_2:
    'The command will automatically copy your system font list to the clipboard. Now, paste it in the input box below.',
  import_success: 'Import Successful',
  coming_soon: 'Coming Soon...',
  footer_note: config => (
    <>
      {config.replace.copyright}
      {', '}
      {config.replace.inspired}
    </>
  ),
  footer_copyright: config =>
    config.replace.startYear === config.replace.endYear
      ? `© ${config.replace.startYear} by ${config.replace.author}`
      : `© ${config.replace.startYear}-${config.replace.endYear} by ${config.replace.author}`,
  footer_inspired: config => (
    <>
      {'Inspired By: '}
      {config.replace.inspiredBy}
    </>
  ),
  footer_author: 'info-c',
  footer_powered: config => (
    <>
      {'Powered By: '}
      {config.replace.poweredBy}
    </>
  ),
};

export default en_us;
