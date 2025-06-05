import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import V from '~/components/V';
import venues from './../../../database/bookings';

const imageMapping = {
  '1': require('../../../assets/torail-cut.jpg'),
  '2': require('../../../assets/hawwar.png'),
  '3': require('../../../assets/indoor.png'),
  '4': require('../../../assets/padbol.png'),
};

const Booking = () => {
  const { id } = useLocalSearchParams();
  const image = imageMapping[id as keyof typeof imageMapping];
  const venueData = venues.find(venue => venue.id === Number(id));

  if (!venueData) {
    return (
      <V>
        <Text>Venue not found</Text>
      </V>
    );
  }

  return (
    <ScrollView>
      <Image source={image} style={{ width: '100%', height: 250, opacity: 1 }} />
      <V>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          {venueData.name}
        </Text>
        
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
          Available Courts:
        </Text>
        {venueData.courts.map(court => (
          <Text key={court.id} style={{ marginBottom: 4 }}>
            {court.name}
          </Text>
        ))}

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
          Current Bookings:
        </Text>
        {/* {venueData.bookings.map((booking, index) => (
          <View key={index} style={{ marginBottom: 12, padding: 8, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
            <Text>Name: {booking.holderName}</Text>
            <Text>Court: {booking.court.name}</Text>
            <Text>Time: {new Date(booking.startTime).toLocaleTimeString()} - {new Date(booking.endTime).toLocaleTimeString()}</Text>
            <Text>Date: {new Date(booking.startTime).toLocaleDateString()}</Text>
          </View>
        ))} */}
      </V>
    </ScrollView>
  );
};

export default Booking;
