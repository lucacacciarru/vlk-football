import {
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import { Control, Controller } from 'react-hook-form';
import { InputContainer } from '../InputContainer';
import { format } from 'date-fns';
import { PlaceAndDate } from '../SelectPlaceAndDateForm/useSelectPlaceAndDateForm';

type Props = {
  control: Control<PlaceAndDate, any>;
};

export const DatePicker: React.FC<Props> = ({ control }) => {
  return (
    <InputContainer label="test">
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
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody color="white.0" bg="black.0">
                <DayPicker mode="single" selected={value} onSelect={onChange} />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      />
    </InputContainer>
  );
};
