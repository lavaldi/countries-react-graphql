import { ChangeEvent, useState } from 'react';

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

  const [value, setValue] = useState(selectedValue);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    onChange(event);
  };
  return (
    <select
      className="px-4 py-2 text-xs font-semibold border-2 border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300"
      data-id={id}
      onChange={handleChange}
      value={value}
    >
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
