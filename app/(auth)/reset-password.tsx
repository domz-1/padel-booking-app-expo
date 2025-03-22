import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-4">
      <View className="flex-1 justify-center items-center">
        {/* <Image
          source={require('../../../assets/logo.png')}
          className="w-32 h-32 mb-8"
          resizeMode="contain"
        /> */}
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Reset Password
        </Text>
        <Text className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Enter your email address and we'll send you instructions to reset your password.
        </Text>
        
        <View className="w-full space-y-4">
          <TextInput
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg"
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TouchableOpacity className="w-full bg-blue-600 p-4 rounded-lg">
            <Text className="text-white text-center font-semibold text-lg">
              Send Reset Link
            </Text>
          </TouchableOpacity>
          
          <View className="flex-row justify-center">
            <TouchableOpacity onPress={() => router.push('/(auth)/login' as any)}>
              <Text className="text-blue-600 dark:text-blue-400">
                Back to Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
} 