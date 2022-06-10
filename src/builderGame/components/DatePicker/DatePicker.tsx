//TODO: Add input Onchange
import {
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import { Control, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import { PlaceAndDate } from '../SelectPlaceAndDateForm';

type Props = {
  control: Control<PlaceAndDate, any>;
};

export const DatePicker: React.FC<Props> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="date"
      rules={{ required: true }}
      render={({ field: { onChange, name, value } }) => (
        <Popover>
          <PopoverTrigger>
            <Input
              value={format(value, 'dd/MM/yyyy')}
              name={name}
              onChange={() => {}}
            />
          </PopoverTrigger>
          <PopoverContent _focus={{ borderColor: 'none' }} borderRadius="none">
            <PopoverArrow />
            <PopoverBody color="white.0" bg="black.0">
              <DayPicker
                mode="single"
                selected={value}
                onSelect={onChange}
                modifiersStyles={{
                  selected: {
                    background: '#05C46B',
                  },
                }}
                styles={{
                  button: { background: 'none', border: 'none' },
                }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    />
  );
};
