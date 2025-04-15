import { View, ScrollView } from 'react-native'
import React, { Children } from 'react'

const V = ({children}: {children: React.ReactNode}) => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="bg-whit flex p-8 pb-[48px] pt-12">{children}</View>
    </ScrollView>
  );
}

export default V