import type { FC } from 'react';
import type { RimeStyle } from '@/types/rimeStyle.ts';
import rgba from '@/utils/rgba.ts';
import { match } from 'ts-pattern';

export type PreviewProps = {
  rimeStyle: RimeStyle;
};

const Preview: FC<PreviewProps> = ({ rimeStyle }) => {
  return (
    <div className={'z-1'}>
      <div
        style={{
          borderWidth: `${rimeStyle.style.layout.borderWidth}px`,
          paddingTop: `${rimeStyle.style.layout.marginY}px`,
          paddingBottom: `${rimeStyle.style.layout.marginY}px`,
          paddingLeft: `${rimeStyle.style.layout.marginX}px`,
          paddingRight: `${rimeStyle.style.layout.marginX}px`,
          maxWidth: match(rimeStyle.style.layout.maxWidth)
            .with(0, () => 'unset')
            .otherwise(maxWidth => `${maxWidth}px`),
          minWidth: match(rimeStyle.style.layout.minWidth)
            .with(0, () => 'unset')
            .otherwise(minWidth => `${minWidth}px`),
          maxHeight: match(rimeStyle.style.layout.maxHeight)
            .with(0, () => 'unset')
            .otherwise(maxWidth => `${maxWidth}px`),
          minHeight: match(rimeStyle.style.layout.minHeight)
            .with(0, () => 'unset')
            .otherwise(minHeight => `${minHeight}px`),
          overflow: 'hidden',
          borderColor: rgba(rimeStyle.colorScheme.borderColor),
          backgroundColor: rgba(rimeStyle.colorScheme.backColor),
          boxShadow: [
            `${rimeStyle.style.layout.shadowOffsetX}px`,
            `${rimeStyle.style.layout.shadowOffsetY}px`,
            '0',
            `${rimeStyle.style.layout.shadowRadius}px`,
            `${rgba(rimeStyle.colorScheme.shadowColor)}`,
          ].join(' '),
          borderRadius: `${rimeStyle.style.layout.cornerRadius}px`,
        }}
      >
        <div
          style={{
            marginBottom: `10px`,
            display: 'flex',
            alignItems: 'center',
            color: rgba(rimeStyle.colorScheme.textColor),
          }}
        >
          <div>小狼毫</div>
          {'\u00A0'}
          <div
            style={{
              borderRadius: `5px`,
              backgroundColor: rgba(rimeStyle.colorScheme.hilitedBackColor),
              paddingTop: `1px`,
              paddingBottom: `1px`,
              paddingLeft: `2px`,
              paddingRight: `2px`,
            }}
          >
            pei se
          </div>
          {'\u00A0'}
          <div
            style={{
              color: rgba(rimeStyle.colorScheme.textColor),
            }}
          >
            {'‸'}
          </div>
        </div>
        <div
          style={{
            borderRadius: `5px`,
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            backgroundColor: rgba(
              rimeStyle.colorScheme.hilitedCandidateBackColor
            ),
            color: rgba(rimeStyle.colorScheme.hilitedCandidateTextColor),
          }}
        >
          1. 配色(pei se)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          2. 陪(pei)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          3. 配(pei)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          4. 賠(pei)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          5. 培(pei)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          6. 佩(pei)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          7. 裴(pei)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          8. 斐(pei)
        </div>
        <div
          style={{
            marginTop: `4px`,
            marginBottom: `4px`,
            paddingTop: `1px`,
            paddingBottom: `1px`,
            paddingLeft: `2px`,
            paddingRight: `2px`,
            color: rgba(rimeStyle.colorScheme.candidateTextColor),
          }}
        >
          9. 呸(pei)
        </div>
      </div>
    </div>
  );
};

export default Preview;
