import { FlatList, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import RestaurantItem from './horizontal';

export interface RestaurantsProps{
  "id": string, 
  "name": string, 
  "image": string
}

export default function Restaurants() {

  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods(){
      const response = await fetch("http://192.168.0.170:3000/restaurants")
      const data = await response.json()
      setRestaurants(data);
    }
    getFoods();
  },[])

  return (
    <View>
      <FlatList
      data={restaurants}
      renderItem={({item}) => <RestaurantItem item={item}/>}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
      showsHorizontalScrollIndicator={false}
      />
    </View>
    );
}