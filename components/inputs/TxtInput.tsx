import { View, Text, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { z } from 'zod';
type TxtInputProps = {
  placeholder: string;
  value: string;
  style?: any;
  label: string;
  onChangeText: (text: string) => void;
  schema: z.ZodType<any>;
  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
};
const TxtInput = ({ placeholder, value, style, label, onChangeText, schema, hasError, setHasError }: TxtInputProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [error, setError] = useState<string | null>(null);
  const validateInput = (text: string) => {
    try {
      schema.parse(text);
      setError(null);
      setHasError(false); // Set parent error state to false when validation passes
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
        setHasError(true); // Set parent error state to true when validation fails
      }
    }
  };
  const handleTextChange = (text: string) => {
    setInputValue(text);
    validateInput(text);
    onChangeText(text);
  };
  return (
    <View className="flex flex-col gap-[8px] py-2">
      <Text className="font-regular text-[14px] text-[#0C1421]">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={inputValue}
        style={[
          style,
          inputValue && !error
            ? { backgroundColor: '#e9f1ea', borderColor: '#009E20' }
            : error
              ? { backgroundColor: '#FFEBEB', borderColor: '#FF0000' }
              : {},
        ]}
        placeholderTextColor="rgba(58, 59, 60, 0.5)"
        onChangeText={handleTextChange}
        className="font-regular rounded-xl border-[1px] border-[#9C9D9D] p-4 text-[14px] text-[#0C1421]"
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};
export default TxtInput;
