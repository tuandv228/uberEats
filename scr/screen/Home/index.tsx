import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Categories from './component/Categories';
import HeaderTab from './component/HeaderTab';
import SearchBar from './component/SearchBar';

const Home = (props: any) => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://kenh14cdn.com/thumb_w/620/2018/11/29/uongnuoc3-1543491586068195632866.jpg',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={20}
      />
      <View>
        <HeaderTab />
        <SearchBar />
      </View>
      <Categories />
    </View>
  );
};

export default Home;
