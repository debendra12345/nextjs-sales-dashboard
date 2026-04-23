import React, { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Search } from "lucide-react";

interface FilterInputProps {
  onFilter: (threshold: number) => void;
}

export const FilterInput: React.FC<FilterInputProps> = ({ onFilter }) => {
  const [value, setValue] = useState("");

  const handleApply = () => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
      onFilter(numValue);
    } else if (value === "") {
      onFilter(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleApply();
    }
  };

  return (
    <div className="flex items-end gap-3">
      <Input
        label="Minimum Sales"
        type="number"
        placeholder="e.g. 50000"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-48"
      />
      <Button onClick={handleApply} className="flex items-center gap-2">
        <Search size={18} />
        Filter
      </Button>
    </div>
  );
};
