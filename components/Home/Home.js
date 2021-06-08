import React from 'react';
import { Text, View,Button,StyleSheet, ScrollView, SafeAreaView, Image, ImageBackground } from 'react-native';
import colors from "../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';
import activitiesData from "../../assets/data/activitiesData";
import discoverCategoriesData from '../../assets/data/discoverCategoriesData';
import learnMoreData from '../../assets/data/learnMoreData';
import discoverData from '../../assets/data/discoverData';
import profile from "../../assets/images/emon.JPG";
import Entypo from 'react-native-vector-icons/Entypo';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';


Entypo.loadFont();
Feather.loadFont()
const Home = ({navigation}) => {
    const renderDiscoverItem = ({item}) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                item: item,
              })
            }>
            <ImageBackground
              source={item.image}
              style={[
                styles.discoverItem,
                {marginLeft: item.id === 'discover-1' ? 20 : 0},
              ]}
              imageStyle={styles.discoverItemImage}>
              <Text style={styles.discoverItemTitle}>{item.title}</Text>
              <View style={styles.discoverItemLocationWrapper}>
                <Entypo name="location-pin" size={18} color={colors.white} />
                <Text style={styles.discoverItemLocationText}>{item.location}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      };
    return (
        <View style={styles.container}>
           <ScrollView>
               <SafeAreaView>
               <View style={styles.menuWrapper}>
                    <Feather
                    name="menu"
                    size={32}
                    color={colors.black}
                    style={styles.menuIcon}
                    />
                  <Image source={profile} style={styles.profileImage} />
                </View>
               </SafeAreaView>
                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>
                        All
                        </Text>
                        <Text style={styles.discoverCategoryText}>Destinations</Text>
                        <Text style={styles.discoverCategoryText}>Cities</Text>
                        <Text style={styles.discoverCategoryText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                        data={discoverData}
                        renderItem={renderDiscoverItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
           </ScrollView>
        </View>
    );
};
const styles=StyleSheet.create({
  container:{
      flex: 1,
      color: colors.white
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white,
  },
})
export default Home;