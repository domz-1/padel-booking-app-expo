import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Explore() {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Explore
        </Text>

        {/* Search Bar */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
            <Text className="text-gray-500 dark:text-gray-400 ml-2">
              Search courts, locations...
            </Text>
          </View>
        </View>

        {/* Featured Locations */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Featured Locations
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
            {[1, 2, 3].map((location) => (
              <TouchableOpacity key={location} className="w-64">
                {/* <Image
                  source={require('../../../assets/location-placeholder.jpg')}
                  className="w-64 h-40 rounded-xl mb-2"
                  resizeMode="cover"
                /> */}
                <Text className="text-gray-900 dark:text-white font-medium">
                  Location {location}
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  3 courts available
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Courts */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Courts
          </Text>
          <View className="space-y-4">
            {[1, 2, 3].map((court) => (
              <TouchableOpacity
                key={court}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
              >
                <View className="flex-row">
                  {/* <Image
                    source={require('../../../assets/court-placeholder.jpg')}
                    className="w-24 h-24 rounded-lg mr-4"
                    resizeMode="cover"
                  /> */}
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                      Court {court}
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400 mb-2">
                      Indoor • Professional
                    </Text>
                    <View className="flex-row items-center">
                      <View className="bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full mr-2">
                        <Text className="text-green-600 dark:text-green-400 font-medium">
                          Available
                        </Text>
                      </View>
                      <Text className="text-gray-900 dark:text-white font-medium">
                        $25/hour
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Categories */}
        <View>
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Categories
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {['Indoor', 'Outdoor', 'Professional', 'Beginner', 'Tournament'].map((category) => (
              <TouchableOpacity
                key={category}
                className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg"
              >
                <Text className="text-gray-900 dark:text-white font-medium">
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 