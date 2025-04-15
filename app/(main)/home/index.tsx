import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import V from '~/components/V';
import { Ionicons } from '@expo/vector-icons';
import HeaderTabs from './../../../components/home/HeaderTabs';
import CourtCard from '~/components/home/CourtCard';
const TorailImage = require("../../../assets/torail-cut.jpg")
const HawarImage = require("../../../assets/hawwar.png")
const IndoorImage = require("../../../assets/indoor.png")
const PadbolImage = require("../../../assets/padbol.png")

export default function Home() {
  return (
    <V>
      <HeaderTabs title="Welcome, Adham 👋" />
      <View className='flex flex-col gap-8 pt-8'>
        <CourtCard
          image={TorailImage}
          title="Torail Branch"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ courtId: '1',
            courtImage: TorailImage,
           }}
        />
        <CourtCard
          image={HawarImage}
          title="Hawar Branch"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ courtId: '2', 
            courtImage: HawarImage,
          }}
        />
        <CourtCard
          image={IndoorImage}
          title="Indoor Court, Manoura stadium"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ courtId: '3',
            courtImage: IndoorImage,
           }}
        />
        <CourtCard
          image={PadbolImage}
          title="Padbol Kick"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ courtId: '4',
            courtImage: PadbolImage,
           }}
        />
      </View>
    </V>
  );
}
