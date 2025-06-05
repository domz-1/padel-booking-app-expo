import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

type CourtCardProps = {
  image: ImageSourcePropType;
  title: string;
  numberOfCourts: number;
  onPress: () => void;
  routeParams: {
    veneuId: string;
    courtImage: ImageSourcePropType;
  };
};

const VeneuCard = ({ image, title, numberOfCourts, onPress, routeParams }: CourtCardProps) => {
  return (
    <Link
      href={{
        pathname: '/(subpages)/home/booking',
        params: {
          id: routeParams.veneuId,
        },
      }}>
      <TouchableOpacity
        className="relative mb-4 w-full overflow-hidden rounded-3xl"
        onPress={onPress}>
        <Image
          source={image}
          className=" rounded-3xl"
          style={{ aspectRatio: 16 / 9, width: '100%' }}
        />
        <View className="absolute bottom-0 left-0 right-0 flex flex-row justify-between rounded-b-3xl bg-black/50 p-2 px-4">
          <Text className="text-md font-medium text-white">{title}</Text>
          <Text className="text-md font-medium text-white">
            {numberOfCourts} {numberOfCourts === 1 ? 'Court' : 'Courts'}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default VeneuCard;
