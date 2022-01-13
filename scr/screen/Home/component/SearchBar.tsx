import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const SearchBar: React.FC = props => {
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          container: {
            backgroundColor: '#eee',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginHorizontal: 20,
            paddingVertical: 5,
          },
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            // marginTop: 7,
            fontWeight: '700',
          },
          textInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 7,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{marginLeft: 10}}>
              <Icon name="location-sharp" size={24} color="black" />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View
              style={{
                marginLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 20,
                marginRight: 20,
                padding: 5,
              }}>
              <Icon name="search-sharp" size={24} color="black" />
              <Text style={{fontWeight: '700', marginHorizontal: 5}}>
                Search
              </Text>
            </View>
          );
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />
    </View>
  );
};

export default SearchBar;
