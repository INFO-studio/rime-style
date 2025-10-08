import type { RimeStyle, RimeStyleTemp } from '@/types/rimeStyle.ts';
import hexa from '@/utils/hexa.ts';

const toTemp = (style: RimeStyle): RimeStyleTemp => ({
  ...style,
  colorScheme: {
    ...style.colorScheme,
    textColor: hexa(style.colorScheme.textColor),
    labelColor: hexa(style.colorScheme.labelColor),
    commentTextColor: hexa(style.colorScheme.commentTextColor),
    borderColor: hexa(style.colorScheme.borderColor),
    shadowColor: hexa(style.colorScheme.shadowColor),
    backColor: hexa(style.colorScheme.backColor),
    candidateTextColor: hexa(style.colorScheme.candidateTextColor),
    candidateBorderColor: hexa(style.colorScheme.candidateBorderColor),
    candidateBackColor: hexa(style.colorScheme.candidateBackColor),
    candidateShadowColor: hexa(style.colorScheme.candidateShadowColor),
    hilitedTextColor: hexa(style.colorScheme.hilitedTextColor),
    hilitedLabelColor: hexa(style.colorScheme.hilitedLabelColor),
    hilitedMarkColor: hexa(style.colorScheme.hilitedMarkColor),
    hilitedCommentTextColor: hexa(style.colorScheme.hilitedCommentTextColor),
    hilitedBackColor: hexa(style.colorScheme.hilitedBackColor),
    hilitedShadowColor: hexa(style.colorScheme.hilitedShadowColor),
    hilitedCandidateTextColor: hexa(
      style.colorScheme.hilitedCandidateTextColor
    ),
    hilitedCandidateBorderColor: hexa(
      style.colorScheme.hilitedCandidateBorderColor
    ),
    hilitedCandidateBackColor: hexa(
      style.colorScheme.hilitedCandidateBackColor
    ),
    hilitedCandidateShadowColor: hexa(
      style.colorScheme.hilitedCandidateShadowColor
    ),
    prevpageColor: hexa(style.colorScheme.prevpageColor),
    nextpageColor: hexa(style.colorScheme.nextpageColor),
  },
});

export default toTemp;
