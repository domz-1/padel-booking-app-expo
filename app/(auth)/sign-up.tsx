import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-4">
      <View className="flex-1 justify-center items-center">
        {/* <Image
          source={require('../../../assets/logo.png')}
          className="w-32 h-32 mb-8"
          resizeMode="contain"
        /> */}
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Create Account
        </Text>
        
        <View className="w-full space-y-4">
          <TextInput
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg"
            placeholder="Full Name"
            placeholderTextColor="#9CA3AF"
            value={name}
            onChangeText={setName}
          />
          
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
          
          <TextInput
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg"
            placeholder="Confirm Password"
            placeholderTextColor="#9CA3AF"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          
          <TouchableOpacity className="w-full bg-blue-600 p-4 rounded-lg">
            <Text className="text-white text-center font-semibold text-lg">
              Sign Up
            </Text>
          </TouchableOpacity>
          
          <View className="flex-row justify-center">
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text className="text-blue-600 dark:text-blue-400">
                  Already have an account? Sign In
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
} 