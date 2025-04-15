import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import V from '~/components/V';
import { Ionicons } from '@expo/vector-icons';

type HeaderTabsProps = {
  title: string;
  onNotificationPress?: () => void;
}

const HeaderTabs = ({ title, onNotificationPress }: HeaderTabsProps) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="text-[20px] font-bold text-[#333]">{title}</Text>
      <View className="flex flex-row items-center gap-4">
        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Image
          source={ require('../../assets/padelHlogo.png')}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default HeaderTabs;
