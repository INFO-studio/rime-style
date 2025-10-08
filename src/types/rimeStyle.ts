import type { Color } from '@/types/color.ts';

export type Layout = {
  baseline: number;
  linespacing: number;
  alignType: 'top' | 'center' | 'bottom';
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  borderWidth: number;
  marginX: number;
  marginY: number;
  candidateSpacing: number;
  hiliteSpacing: number;
  hilitePadding: number;
  hilitePaddingX: number | null;
  hilitePaddingY: number | null;
  shadowRadius: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  cornerRadius: number;
  roundCorner: number;
};

export type Style = {
  fontFace: string;
  labelFontFace: string;
  commentFontFace: string;
  fontPoint: number;
  labelFontPoint: number;
  inlinePreedit: boolean;
  preeditType: 'composition' | 'preview' | 'preview_all';
  fullscreen: boolean;
  verticalText: boolean;
  candidateListLayout: 'stacked' | 'linear';
  horizontal: boolean;
  verticalTextLeftToRight: boolean;
  verticalTextWithWrap: boolean;
  verticalAutoReverse: boolean;
  labelFormat: string;
  markText: string;
  asciiTipFollowCursor: boolean;
  enhancedPosition: boolean;
  displayTrayIcon: boolean;
  antialiasMode:
    | 'default'
    | 'force_dword'
    | 'cleartype'
    | 'grayscale'
    | 'aliased';
  candidateAbbreviationLength: number;
  pagingOnScroll: boolean;
  clickToCapture: boolean;
  layout: Layout;
};

export type ColorScheme = {
  code: string;
  name: string;
  author: string;
  colorFormat: 'rgba' | 'argb' | 'abgr';
  textColor: Color;
  labelColor: Color;
  commentTextColor: Color;
  borderColor: Color;
  shadowColor: Color;
  backColor: Color;
  candidateTextColor: Color;
  candidateBorderColor: Color;
  candidateBackColor: Color;
  candidateShadowColor: Color;
  hilitedTextColor: Color;
  hilitedLabelColor: Color;
  hilitedMarkColor: Color;
  hilitedCommentTextColor: Color;
  hilitedBackColor: Color;
  hilitedShadowColor: Color;
  hilitedCandidateTextColor: Color;
  hilitedCandidateBorderColor: Color;
  hilitedCandidateBackColor: Color;
  hilitedCandidateShadowColor: Color;
  inlinePreedit: boolean;
  prevpageColor: Color;
  nextpageColor: Color;
};

export type RimeStyle = {
  style: Style;
  colorScheme: ColorScheme;
};

export type ColorSchemeTemp = {
  code: string;
  name: string;
  author: string;
  colorFormat: 'rgba' | 'argb' | 'abgr';
  textColor: string;
  labelColor: string;
  commentTextColor: string;
  borderColor: string;
  shadowColor: string;
  backColor: string;
  candidateTextColor: string;
  candidateBorderColor: string;
  candidateBackColor: string;
  candidateShadowColor: string;
  hilitedTextColor: string;
  hilitedLabelColor: string;
  hilitedMarkColor: string;
  hilitedCommentTextColor: string;
  hilitedBackColor: string;
  hilitedShadowColor: string;
  hilitedCandidateTextColor: string;
  hilitedCandidateBorderColor: string;
  hilitedCandidateBackColor: string;
  hilitedCandidateShadowColor: string;
  inlinePreedit: boolean;
  prevpageColor: string;
  nextpageColor: string;
};

export type RimeStyleTemp = {
  style: Style;
  colorScheme: ColorSchemeTemp;
};
