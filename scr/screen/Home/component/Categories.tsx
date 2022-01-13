import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {text, textStyle} from '../../../styles';
export const dataCate = [
  {
    key: 1,
    title: 'Pick-up',
    image: require('../../../assets/images/shopping-bag.png'),
  },
  {
    key: 2,
    title: 'Soft Drinks',
    image: require('../../../assets/images/soft-drink.png'),
  },
  {
    key: 3,
    title: 'Bakery Items',
    image: require('../../../assets/images/bread.png'),
  },
  {
    key: 4,
    title: 'Fast Food',
    image: require('../../../assets/images/fast-food.png'),
  },
  {key: 5, title: 'Coffe', image: require('../../../assets/images/coffee.png')},
  {key: 6, title: 'Deals', image: require('../../../assets/images/deals.png')},
  {
    key: 7,
    title: 'Desserts',
    image: require('../../../assets/images/desserts.png'),
  },
];
const ITEM_IMG_SIZE = 50;
const Categories: React.FC = props => {
  return (
    <View style={{paddingRight: 20, paddingVertical: 20}}>
      <FlatList
        data={dataCate}
        keyExtractor={item => item.key.toString()}
        horizontal
        contentContainerStyle={{
          justifyContent: 'space-between',
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{marginHorizontal: 20, alignItems: 'center'}}>
              <Image
                source={item.image}
                style={{
                  width: ITEM_IMG_SIZE,
                  height: ITEM_IMG_SIZE,
                  resizeMode: 'cover',
                }}
              />
              <Text style={[textStyle.title14, {color: 'white'}]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
