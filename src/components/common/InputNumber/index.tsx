import type { FC, ReactNode } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ButtonGroup } from '@/components/ui/button-group.tsx';
import {
  ChevronDown as IconChevronDown,
  ChevronUp as IconChevronUp,
} from 'lucide-react';
import { match } from 'ts-pattern';

export type InputNumberProps = {
  value: number;
  onChange: (value: number) => void;
  icon?: ReactNode;
  placeholder?: string;
  max?: number;
  min?: number;
};

const InputNumber: FC<InputNumberProps> = ({
  value,
  onChange,
  icon,
  placeholder,
  max,
  min,
}) => {
  const handleChange = (value: number) =>
    onChange(
      match({ max, min })
        .with({ max: undefined, min: undefined }, () => value)
        .with({ max: undefined }, ({ min }) => Math.max(min as number, value))
        .with({ min: undefined }, ({ max }) => Math.min(max as number, value))
        .otherwise(({ max, min }) =>
          Math.max(min as number, Math.min(max as number, value))
        )
    );
  const handleIncrease = () => handleChange(value + 1);
  const handleDecrease = () => handleChange(value - 1);
  return (
    <InputGroup>
      <InputGroupInput
        placeholder={placeholder}
        value={value}
        onChange={e => handleChange(Number(e.target.value))}
      />
      {icon && <InputGroupAddon>{icon}</InputGroupAddon>}
      <InputGroupAddon align={'inline-end'}>
        <ButtonGroup orientation={'vertical'}>
          <Button
            onClick={handleIncrease}
            variant={'outline'}
            className={'w-3 h-3 p-0 flex items-center justify-center'}
          >
            <IconChevronUp className={'w-1.5 h-1.5'} />
          </Button>
          <Button
            onClick={handleDecrease}
            variant={'outline'}
            className={'w-3 h-3 p-0 flex items-center justify-center'}
          >
            <IconChevronDown className={'w-1.5 h-1.5'} />
          </Button>
        </ButtonGroup>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputNumber;
