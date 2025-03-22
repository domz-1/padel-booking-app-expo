import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome Back!
        </Text>
        
        {/* Featured Section */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Featured Courts
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} className="w-48">
                {/* <Image
                  source={require('../../../assets/court-placeholder.jpg')}
                  className="w-48 h-32 rounded-lg mb-2"
                  resizeMode="cover"
                /> */}
                <Text className="text-gray-900 dark:text-white font-medium">
                  Court {item}
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Available Slots: 3
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="w-[48%] bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <Text className="text-blue-600 dark:text-blue-400 font-medium">
                Book a Court
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <Text className="text-green-600 dark:text-green-400 font-medium">
                View Schedule
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <Text className="text-purple-600 dark:text-purple-400 font-medium">
                My Bookings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <Text className="text-orange-600 dark:text-orange-400 font-medium">
                Invite Friends
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </Text>
          {[1, 2, 3].map((item) => (
            <View key={item} className="flex-row items-center mb-4">
              <View className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full mr-4" />
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Booking Confirmed
                </Text>
                <Text className="text-gray-500 dark:text-gray-400">
                  Court 1 • Tomorrow, 2:00 PM
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
} 