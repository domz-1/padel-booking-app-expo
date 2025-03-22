import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function AdminTools() {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Admin Tools
        </Text>

        {/* Quick Stats */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                156
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                Total Bookings
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                8
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                Active Courts
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                45
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                Users
              </Text>
            </View>
          </View>
        </View>

        {/* Management Tools */}
        <View className="space-y-4">
          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-blue-600 dark:text-blue-400 text-lg">
                  🏟️
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Court Management
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Manage courts, availability, and pricing
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-green-600 dark:text-green-400 text-lg">
                  📅
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Booking Management
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  View and manage all bookings
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-purple-600 dark:text-purple-400 text-lg">
                  👥
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  User Management
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Manage users and permissions
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-orange-600 dark:text-orange-400 text-lg">
                  📊
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Analytics
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  View reports and statistics
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full items-center justify-center mr-4">
                <Text className="text-red-600 dark:text-red-400 text-lg">
                  ⚙️
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  System Settings
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Configure system settings
                </Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mt-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </Text>
          <View className="space-y-3">
            {[1, 2, 3].map((activity) => (
              <View
                key={activity}
                className="flex-row items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <View className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full mr-3" />
                <View className="flex-1">
                  <Text className="text-gray-900 dark:text-white">
                    New booking received
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400">
                    2 minutes ago
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 