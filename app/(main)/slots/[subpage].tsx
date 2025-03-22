import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function SlotsSubpage() {
  const { subpage } = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {subpage === 'book' ? 'Book a Slot' : 'Slot Details'}
        </Text>

        {/* Court Selection */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Select Court
          </Text>
          <View className="space-y-3">
            {[1, 2, 3].map((court) => (
              <TouchableOpacity
                key={court}
                className="flex-row items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <View>
                  <Text className="text-gray-900 dark:text-white font-medium">
                    Court {court}
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400">
                    Indoor • Professional
                  </Text>
                </View>
                <View className="bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
                  <Text className="text-green-600 dark:text-green-400 font-medium">
                    Available
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Time Selection */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Select Time
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
        </View>

        {/* Duration Selection */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Select Duration
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {['1 hour', '2 hours', '3 hours'].map((duration) => (
              <TouchableOpacity
                key={duration}
                className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
              >
                <Text className="text-gray-900 dark:text-white font-medium">
                  {duration}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Price Summary */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Price Summary
          </Text>
          <View className="space-y-2">
            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-300">Court Rental</Text>
              <Text className="text-gray-900 dark:text-white">$25/hour</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-300">Duration</Text>
              <Text className="text-gray-900 dark:text-white">1 hour</Text>
            </View>
            <View className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
            <View className="flex-row justify-between">
              <Text className="text-gray-900 dark:text-white font-semibold">
                Total
              </Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                $25
              </Text>
            </View>
          </View>
        </View>

        {/* Book Button */}
        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg">
          <Text className="text-white text-center font-semibold text-lg">
            Confirm Booking
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
} 