import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import V from '~/components/V';
import { Ionicons } from '@expo/vector-icons';
import HeaderTabs from './../../../components/home/HeaderTabs';
import VeneuCard from '~/components/home/VeneuCard';
const TorailImage = require("../../../assets/torail-cut.jpg")
const HawarImage = require("../../../assets/hawwar.png")
const IndoorImage = require("../../../assets/indoor.png")
const PadbolImage = require("../../../assets/padbol.png")

export default function Home() {
  return (
    <V>
      <HeaderTabs title="Hi, Adham 👋" />
      <View className='flex flex-col gap-8 pt-8'>
        <VeneuCard
          image={TorailImage}
          title="Torail Branch"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ veneuId: '1',
            courtImage: TorailImage,
           }}
        />
        <VeneuCard
          image={HawarImage}
          title="Hawar Branch"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ veneuId: '2', 
            courtImage: HawarImage,
          }}
        />
        <VeneuCard
          image={IndoorImage}
          title="Indoor Court, Manoura stadium"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ veneuId: '3',
            courtImage: IndoorImage,
           }}
        />
        <VeneuCard
          image={PadbolImage}
          title="Padbol Kick"
          numberOfCourts={4}
          onPress={() => {}}
          routeParams={{ veneuId: '4',
            courtImage: PadbolImage,
           }}
        />
      </View>
    </V>
  );
}
