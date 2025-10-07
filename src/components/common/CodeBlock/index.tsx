import type { CSSProperties, FC } from 'react';
import { cn } from '@/lib/utils.ts';
import { Copy as IconCopy } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { toast } from 'sonner';

export type CodeBlockProps = {
  code: string;
  canCopy?: boolean;
  onCopy?: (code: string) => void;
  className?: string;
  style?: CSSProperties;
};

const CodeBlock: FC<CodeBlockProps> = ({
  code,
  canCopy,
  onCopy,
  className,
  style,
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      onCopy?.(code);
      toast.success('已复制到剪贴板');
    } catch (error) {
      console.error('复制失败:', error);
      toast.error('复制失败');
    }
  };
  return (
    <div className={'flex gap-2 w-full max-w-full overflow-hidden'}>
      <div
        className={cn(
          'flex-1 relative p-2 rounded-md text-sm whitespace-nowrap overflow-x-auto scrollbar-hide w-full border bg-background shadow-xs dark:bg-input/30 dark:border-input font-mono',
          className
        )}
        style={style}
      >
        {code}
      </div>
      {canCopy && (
        <Button
          variant={'outline'}
          onClick={handleCopy}
          className={'h-full aspect-square'}
        >
          <IconCopy className={'w-[14px]! h-[14px]!'} />
        </Button>
      )}
    </div>
  );
};

export default CodeBlock;
