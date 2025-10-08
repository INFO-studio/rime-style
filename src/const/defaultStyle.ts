import type { RimeStyle } from '@/types/rimeStyle.ts';

const defaultStyle: RimeStyle = {
  colorScheme: {
    code: 'example',
    name: '名称',
    author: '作者',
    backColor: {
      R: 255,
      G: 255,
      B: 255,
      A: 255,
    },
    borderColor: {
      R: 0,
      G: 0,
      B: 0,
      A: 255,
    },
    textColor: {
      R: 0,
      G: 0,
      B: 0,
      A: 255,
    },
    hilitedTextColor: {
      R: 0,
      G: 0,
      B: 0,
      A: 255,
    },
    hilitedBackColor: {
      R: 221,
      G: 221,
      B: 221,
      A: 255,
    },
    hilitedCandidateColor: {
      R: 255,
      G: 255,
      B: 255,
      A: 255,
    },
    hilitedCandidateBackColor: {
      R: 0,
      G: 0,
      B: 0,
      A: 255,
    },
    candidateTextColor: {
      R: 0,
      G: 0,
      B: 0,
      A: 255,
    },
    commentTextColor: {
      R: 221,
      G: 221,
      B: 221,
      A: 255,
    },
  },
};

export default defaultStyle;
