import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function HomeSubpage() {
  const { subpage } = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {subpage === 'book' ? 'Book a Court' : 'Court Details'}
        </Text>

        {/* Court Details */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          {/* <Image
            source={require('../../../assets/court-placeholder.jpg')}
            className="w-full h-48 rounded-lg mb-4"
            resizeMode="cover"
          /> */}
          <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Court 1
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 mb-4">
            Professional padel court with premium facilities and equipment.
          </Text>
          
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-gray-500 dark:text-gray-400">Price per hour</Text>
              <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                $25
              </Text>
            </View>
            <View>
              <Text className="text-gray-500 dark:text-gray-400">Rating</Text>
              <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                4.8/5
              </Text>
            </View>
          </View>

          {/* Time Slots */}
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Available Time Slots
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map((time) => (
              <TouchableOpacity
                key={time}
                className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg"
              >
                <Text className="text-blue-600 dark:text-blue-400 font-medium">
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Book Button */}
          <TouchableOpacity className="bg-blue-600 p-4 rounded-lg mt-6">
            <Text className="text-white text-center font-semibold text-lg">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>

        {/* Additional Information */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Additional Information
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full mr-3" />
              <Text className="text-gray-600 dark:text-gray-300">
                Professional equipment provided
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full mr-3" />
              <Text className="text-gray-600 dark:text-gray-300">
                Changing rooms available
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full mr-3" />
              <Text className="text-gray-600 dark:text-gray-300">
                Parking available
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 