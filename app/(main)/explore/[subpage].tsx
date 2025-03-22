import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ExploreSubpage() {
  const { subpage } = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {subpage === 'location' ? 'Location Details' : 'Court Details'}
        </Text>

        {/* Location/Court Image */}
        {/* <Image
          source={require('../../../assets/location-placeholder.jpg')}
          className="w-full h-48 rounded-xl mb-4"
          resizeMode="cover"
        /> */}

        {/* Details Section */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {subpage === 'location' ? 'Location Name' : 'Court Name'}
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 mb-4">
            {subpage === 'location'
              ? 'Premium padel facility with multiple courts and professional equipment.'
              : 'Professional padel court with premium facilities and equipment.'}
          </Text>

          <View className="space-y-3">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full mr-3" />
              <Text className="text-gray-600 dark:text-gray-300">
                {subpage === 'location' ? '3 courts available' : 'Professional equipment provided'}
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

        {/* Pricing Section */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Pricing
          </Text>
          <View className="space-y-2">
            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-300">Weekday Rate</Text>
              <Text className="text-gray-900 dark:text-white">$25/hour</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600 dark:text-gray-300">Weekend Rate</Text>
              <Text className="text-gray-900 dark:text-white">$30/hour</Text>
            </View>
            <View className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
            <View className="flex-row justify-between">
              <Text className="text-gray-900 dark:text-white font-semibold">
                Starting from
              </Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                $25/hour
              </Text>
            </View>
          </View>
        </View>

        {/* Available Courts */}
        {subpage === 'location' && (
          <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
            <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Available Courts
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
        )}

        {/* Book Button */}
        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg">
          <Text className="text-white text-center font-semibold text-lg">
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
} 