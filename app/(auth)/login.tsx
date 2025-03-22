import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Here you would typically validate credentials
    // For now, we'll just navigate to main home screen
    router.replace('/(main)/home/index' as any);
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-4">
      <View className="flex-1 justify-center items-center">
        {/* <Image
          source={require('../../../assets/logo.png')}
          className="w-32 h-32 mb-8"
          resizeMode="contain"
        /> */}
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome Back
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
          
          <TextInput
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg"
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity className="w-full bg-blue-600 p-4 rounded-lg" onPress={handleSignIn}>
            <Text className="text-white text-center font-semibold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>
          
          <View className="flex-row justify-between">
            <TouchableOpacity onPress={() => router.push('/sign-up' as any)}>
              <Text className="text-blue-600 dark:text-blue-400">
                Create Account
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => router.push('/reset-password' as any)}>
              <Text className="text-blue-600 dark:text-blue-400">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
} 