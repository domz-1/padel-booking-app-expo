import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import V from '~/components/V';
import TxtInput from './../../components/inputs/TxtInput';
import Btn from './../../components/genral/Btn';
import {z} from 'zod';
import { useState } from 'react';
export default function Login() {
  const handleSignIn = () => {
    router.replace('/(main)/home/index' as any);
  };
  const [hasError, setHasError] = useState<boolean>(true);
  return (
    <V>
      <View className="relative rounded-3xl">
        <Image
          source={require('../../assets/torail.jpg')}
          style={{ width: '100%', height: 200, opacity: 1 }} // Simulate brightness with opacity
          className="rounded-3xl"
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to reduce brightness
            borderRadius: 24,
          }}
        />
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 150, height: 90 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
        />
      </View>
      <View className="flex flex-col gap-4 pt-4">
        <Text className="font-regular text-2xl text-[24px] text-[#0C1421] ">Welcome Back 👋</Text>
        <Text className="font-regular text-[15px] text-[#313957]">
          Sign in to be able to Book courts and Communicate with other Players 😊
        </Text>
      </View>
      <TxtInput
        label="Mobile Number"
        value=""
        style={{}}
        placeholder="ex: 010XXXXXXXX"
        onChangeText={(text) => {}}
        schema={z.string().refine(
          (value) => {
            if (value.length < 11) {
              return false;
            }
            return /^01[0125][0-9]{8}$/.test(value);
          },
          {
            message: 'Please enter a valid Egyptian mobile number starting with 01',
          }
        )}
        hasError={hasError}
        setHasError={setHasError}
      />
      <TxtInput
        label="Password"
        value=""
        style={{}}
        placeholder="Enter your password"
        onChangeText={(text) => {}}
        schema={z.string().min(6, { message: 'Password must be at least 6 characters' })}
        hasError={hasError}
        setHasError={setHasError}
      />
      <Btn title="Login" onPress={hasError ? undefined :handleSignIn } />
    </V>
  );
}
