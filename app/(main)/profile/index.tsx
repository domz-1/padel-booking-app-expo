import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        {/* Profile Header */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <View className="flex-row items-center">
            {/* <Image
              source={require('../../../assets/profile-placeholder.jpg')}
              className="w-20 h-20 rounded-full mr-4"
              resizeMode="cover"
            /> */}
            <View>
              <Text className="text-xl font-semibold text-gray-900 dark:text-white">
                John Doe
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                john.doe@example.com
              </Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                Bookings
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                4.8
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                Rating
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                24
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                Hours
              </Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className="space-y-4">
          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-blue-600 dark:text-blue-400 text-lg">
                  📅
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  My Bookings
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  View and manage your bookings
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-green-600 dark:text-green-400 text-lg">
                  ⭐
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Reviews
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Your reviews and ratings
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-purple-600 dark:text-purple-400 text-lg">
                  💳
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Payment Methods
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Manage your payment options
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-orange-600 dark:text-orange-400 text-lg">
                  ⚙️
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Settings
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  App preferences and notifications
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-red-600 dark:text-red-400 text-lg">
                  ❓
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Help & Support
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Get help and contact support
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-6">
          <Text className="text-red-600 dark:text-red-400 text-center font-semibold">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
} 