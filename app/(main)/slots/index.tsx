import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function Slots() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Available Slots
        </Text>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {[1, 2, 3, 4, 5].map((day) => (
            <TouchableOpacity
              key={day}
              className={`mr-3 px-4 py-2 rounded-lg ${
                day === 1
                  ? 'bg-blue-600'
                  : 'bg-white dark:bg-gray-800'
              }`}
              onPress={() => setSelectedDate(new Date())}
            >
              <Text
                className={`${
                  day === 1
                    ? 'text-white'
                    : 'text-gray-900 dark:text-white'
                } font-medium`}
              >
                {day === 1 ? 'Today' : `Day ${day}`}
              </Text>
              <Text
                className={`${
                  day === 1
                    ? 'text-white'
                    : 'text-gray-500 dark:text-gray-400'
                } text-sm`}
              >
                {day === 1 ? 'Mar 22' : 'Mar ' + (22 + day - 1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Time Slots */}
        <View className="space-y-4">
          {[1, 2, 3, 4, 5].map((hour) => (
            <TouchableOpacity
              key={hour}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
              onPress={() => {}}
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                    {hour + 9}:00 - {hour + 10}:00
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400">
                    Court 1 • Available
                  </Text>
                </View>
                <View className="bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
                  <Text className="text-green-600 dark:text-green-400 font-medium">
                    Available
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="mt-6 space-y-3">
          <TouchableOpacity className="bg-blue-600 p-4 rounded-lg">
            <Text className="text-white text-center font-semibold text-lg">
              Book Selected Slot
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Text className="text-gray-900 dark:text-white text-center font-semibold text-lg">
              View All Courts
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
} 