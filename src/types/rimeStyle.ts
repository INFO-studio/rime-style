import type { Color } from '@/types/color.ts';

export type ColorScheme = {
  code: string;
  name: string;
  author: string;
  backColor: Color;
  borderColor: Color;
  textColor: Color;
  hilitedTextColor: Color;
  hilitedBackColor: Color;
  hilitedCandidateColor: Color;
  hilitedCandidateBackColor: Color;
  candidateTextColor: Color;
  commentTextColor: Color;
};

export type RimeStyle = {
  colorScheme: ColorScheme;
};
