import { ChangeEvent } from 'react';

type SelectProps = {
  defaultOption: string;
  options: any[] | undefined;
  keyValue: string;
  onChange(value: string): void;
};

const Select = ({ options, keyValue, defaultOption, onChange }: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <select onChange={handleChange}>
      <option value="">{defaultOption}</option>
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
