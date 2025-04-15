import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type btnProps = {
  title: string;
} & TouchableOpacityProps;

 const Btn = forwardRef<View, btnProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`items-center bg-[#3A3B3C] rounded-xl shadow-md py-4 my-8 ${touchableProps.className}`}>
      <Text className="text-white text-lg font-medium text-center text-[16px]">{title}</Text>
    </TouchableOpacity>
  );
});
export default Btn;