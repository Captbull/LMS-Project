import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
];

const DropdownWithCheckboxes = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <h2>Select Fruits</h2>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
      />
      <div>
        <h3>Selected Fruits:</h3>
        {selectedOptions.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
    </div>
  );
};

export default DropdownWithCheckboxes;
