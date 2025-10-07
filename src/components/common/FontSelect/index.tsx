import { type FC, useEffect, useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button.tsx';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command.tsx';
import {
  Check as IconCheck,
  ChevronsUpDown as IconChevronsUpDown,
} from 'lucide-react';
import useFontListStore from '@/stores/fontListStore.ts';
import { cn } from '@/lib/utils.ts';

export type FontSelectProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const FontSelect: FC<FontSelectProps> = ({
  value,
  defaultValue = '',
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(defaultValue);
  const displayValue = value !== undefined ? value : internalValue;
  const { fontList } = useFontListStore();

  useEffect(() => {
    if (value === undefined) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, value]);

  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
    setOpen(false);
  };

  if (!fontList) {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full shrink-1 overflow-hidden flex items-center justify-between"
        >
          <div className={'flex-1 overflow-hidden text-left'}>
            {displayValue
              ? fontList.find(font => font === displayValue)
              : 'Select font...'}
          </div>
          <IconChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={'start'} className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search font..." />
          <CommandList>
            <CommandEmpty>No font found.</CommandEmpty>
            <CommandGroup>
              {fontList.map(font => (
                <CommandItem
                  key={font}
                  value={font}
                  onSelect={handleValueChange}
                  className={'flex items-center justify-between'}
                >
                  <div className={'whitespace-nowrap overflow-hidden'}>
                    {font}
                  </div>
                  <IconCheck
                    className={cn(
                      'ml-2 h-4 w-4',
                      displayValue === font ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FontSelect;
