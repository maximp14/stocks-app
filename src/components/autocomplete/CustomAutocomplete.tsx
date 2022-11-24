import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import React from "react";

interface AutocompleteProps {
  placeholder?: string;
  options: any[] | null | undefined;
  value?: any;
  autocompleteOnChange?: (event: any, newValue: any) => void;
  optionColumnName: string;
  optionSelected?: any;
  setOptionSelected?: React.Dispatch<React.SetStateAction<any>>;
  startSearchLength?: number;
  optionsSuggestionLimit?: number;
  onChange?: (event: any) => void;
}

const CustomAutocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  optionsSuggestionLimit,
  value,
  options,
  optionColumnName,
  autocompleteOnChange,
  onChange,
}) => {
  const defaultFilterOptions = createFilterOptions();
  const filterOptions = (options: any, state: any) => {
    return defaultFilterOptions(options, state).slice(
      0,
      optionsSuggestionLimit
    );
  };

  return (
    <Autocomplete
      placeholder={placeholder}
      filterOptions={filterOptions}
      value={value}
      options={options ? options : []}
      id="combo-box-demo"
      //   getOptionSelected={(option:any, value:any) =>
      //     option[optionColumnName] === value[optionColumnName]
      //   }
      getOptionLabel={(option) => option[optionColumnName] || ""}
      onChange={autocompleteOnChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    />
  );
};

export default CustomAutocomplete;
