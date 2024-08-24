import { Text, View, ScrollView } from "react-native";
import Header from "../components/header";
import Constants from 'expo-constants'
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import TredingFoods from "../components/trending";
import Restaurants from "../components/restaurants";
import VerticalList from "../components/list";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView style={{flex: 1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>

      <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
        <Header />

        <Banner />
        
        <Search />
      </View>

      <Section 
      name={"Comidas em alta"}
      label="Veja mais" 
      action={() => console.log("Clicou no veja mais")} 
      size={"text-2xl"}
      />

      <TredingFoods />
      
      <Section 
      name={"Famosos no DevFood"}
      label="Veja todas" 
      action={() => console.log("Clicou no veja todas")} 
      size={"text-2xl"}
      />

      <Restaurants />

      <Section 
      name={"Restaurantes"}
      label="Veja todos" 
      action={() => console.log("Clicou no veja todos")} 
      size={"text-2xl"}
      />

      <VerticalList />

    </ScrollView>
  );
} 