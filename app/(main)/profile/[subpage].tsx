import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProfileSubpage() {
  const { subpage } = useLocalSearchParams();

  const getTitle = () => {
    switch (subpage) {
      case 'bookings':
        return 'My Bookings';
      case 'reviews':
        return 'Reviews';
      case 'payments':
        return 'Payment Methods';
      case 'settings':
        return 'Settings';
      case 'help':
        return 'Help & Support';
      default:
        return 'Profile';
    }
  };

  const renderContent = () => {
    switch (subpage) {
      case 'bookings':
        return (
          <View className="space-y-4">
            {[1, 2, 3].map((booking) => (
              <TouchableOpacity
                key={booking}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
              >
                <View className="flex-row justify-between items-start mb-2">
                  <View>
                    <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                      Court {booking}
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400">
                      Tomorrow, 2:00 PM - 3:00 PM
                    </Text>
                  </View>
                  <View className="bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
                    <Text className="text-green-600 dark:text-green-400 font-medium">
                      Confirmed
                    </Text>
                  </View>
                </View>
                <View className="flex-row justify-between items-center">
                  <Text className="text-gray-900 dark:text-white font-medium">
                    $25
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-blue-600 dark:text-blue-400 font-medium">
                      View Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'reviews':
        return (
          <View className="space-y-4">
            {[1, 2, 3].map((review) => (
              <View
                key={review}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
              >
                <View className="flex-row items-center mb-2">
                  {/* <Image
                    source={require('../../../assets/court-placeholder.jpg')}
                    className="w-12 h-12 rounded-lg mr-3"
                    resizeMode="cover"
                  /> */}
                  <View>
                    <Text className="text-gray-900 dark:text-white font-medium">
                      Court {review}
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400">
                      Played on Mar 20, 2024
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-600 dark:text-gray-300 mb-2">
                  Great court with professional equipment. Staff was very friendly and helpful.
                </Text>
                <View className="flex-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Text key={star} className="text-yellow-400">⭐</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        );

      case 'payments':
        return (
          <View className="space-y-4">
            <TouchableOpacity className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full items-center justify-center mr-4">
                  <Text className="text-blue-600 dark:text-blue-400 text-lg">
                    💳
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-900 dark:text-white font-medium">
                    Add New Card
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400">
                    Add a new payment method
                  </Text>
                </View>
                <Text className="text-gray-400">›</Text>
              </View>
            </TouchableOpacity>

            <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Saved Cards
              </Text>
              <View className="space-y-3">
                {[1, 2].map((card) => (
                  <View
                    key={card}
                    className="flex-row items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <View>
                      <Text className="text-gray-900 dark:text-white font-medium">
                        •••• •••• •••• 4242
                      </Text>
                      <Text className="text-gray-500 dark:text-gray-400">
                        Expires 12/25
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text className="text-red-600 dark:text-red-400">
                        Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        );

      case 'settings':
        return (
          <View className="space-y-4">
            <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Notifications
              </Text>
              <View className="space-y-3">
                {['Booking Reminders', 'Special Offers', 'News & Updates'].map((setting) => (
                  <View
                    key={setting}
                    className="flex-row items-center justify-between"
                  >
                    <Text className="text-gray-900 dark:text-white">
                      {setting}
                    </Text>
                    <TouchableOpacity className="w-12 h-6 bg-blue-600 rounded-full">
                      <View className="w-4 h-4 bg-white rounded-full m-1" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>

            <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                App Settings
              </Text>
              <View className="space-y-3">
                {['Dark Mode', 'Language', 'Currency'].map((setting) => (
                  <View
                    key={setting}
                    className="flex-row items-center justify-between"
                  >
                    <Text className="text-gray-900 dark:text-white">
                      {setting}
                    </Text>
                    <Text className="text-gray-400">›</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        );

      case 'help':
        return (
          <View className="space-y-4">
            <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contact Support
              </Text>
              <TouchableOpacity className="bg-blue-600 p-4 rounded-lg">
                <Text className="text-white text-center font-semibold">
                  Send Message
                </Text>
              </TouchableOpacity>
            </View>

            <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                FAQ
              </Text>
              <View className="space-y-3">
                {[
                  'How do I book a court?',
                  'What is the cancellation policy?',
                  'How do I change my payment method?',
                  'How do I leave a review?',
                ].map((faq) => (
                  <TouchableOpacity
                    key={faq}
                    className="flex-row items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <Text className="text-gray-900 dark:text-white">
                      {faq}
                    </Text>
                    <Text className="text-gray-400">›</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {getTitle()}
        </Text>
        {renderContent()}
      </View>
    </ScrollView>
  );
} 