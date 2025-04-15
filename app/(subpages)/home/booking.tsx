import { View, Text, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import V from '~/components/V';

const imageMapping = {
  '1': require('../../../assets/torail-cut.jpg'),
  '2': require('../../../assets/hawwar.png'),
  '3': require('../../../assets/indoor.png'),
  '4': require('../../../assets/padbol.png'),
};

const Booking = () => {
  const { id } = useLocalSearchParams();
  const image = imageMapping[id as keyof typeof imageMapping];

  return (
    <>
      <Image source={image} style={{ width: '100%', height: 250, opacity: 1 }} />
      <V>
        <Text>{id}</Text>
      </V>
    </>
  );
};

export default Booking;
