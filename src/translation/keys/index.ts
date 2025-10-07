import type { TranslationKeysType } from '@/translation/type.ts';
import { n } from '@/translation/const.ts';

export const keys = {
  title: n,
  theme_system: n,
  theme_light: n,
  theme_dark: n,
  cancel: n,
  confirm: n,
  import: n,
  menu_font: n,
  menu_clear_font_data: n,
  menu_clear_font_data_confirm_title: n,
  menu_clear_font_data_confirm_detail: n,
  menu_change_font_data: n,
  no_content_in_input: n,
  rime_seeme: n,
  weasel: n,
  squirrel: n,
  import_font_list: n,
  import_font_list_description: n,
  import_font_list_guide_1: n,
  import_font_list_guide_2: n,
  import_success: n,
  coming_soon: n,
  footer_note: {
    copyright: 'string',
    inspired: 'react',
  },
  footer_copyright: {
    startYear: 'string',
    endYear: 'string',
    author: 'string',
  },
  footer_inspired: {
    inspiredBy: 'react',
  },
  footer_author: n,
  footer_powered: {
    poweredBy: 'react',
  },
} as const satisfies TranslationKeysType;

export default keys;
