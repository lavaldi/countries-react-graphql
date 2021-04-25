import { ChangeEvent } from 'react';

type SelectProps = {
  id: string;
  emptyOption: string;
  selectedValue: string;
  options: any[] | undefined;
  keyValue: string;
  onChange(event: ChangeEvent<HTMLSelectElement>): void;
};

const Select = ({
  id,
  options,
  keyValue,
  emptyOption,
  selectedValue,
  onChange,
}: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
  };
  return (
    <select data-id={id} onChange={handleChange} value={selectedValue}>
      <option value="">{emptyOption}</option>
      {options &&
        options.map((option, index) => (
          <option key={index} value={option.node[keyValue]}>
            {option.node.name}
          </option>
        ))}
    </select>
  );
};

export default Select;
