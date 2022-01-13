import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
interface ButtonTab {
  text: string;
  textColor: string;
  bgColor: string;
  keyTab: number;
  activeTab?: number;
  setActiveTab?: any;
}
const ButtonHeaderTab: React.FC<ButtonTab> = props => {
  const {text, textColor, bgColor, keyTab, activeTab, setActiveTab} = props;
  return (
    <TouchableOpacity
      style={[
        styles.btnHeaderTab,
        {backgroundColor: activeTab === keyTab ? bgColor : textColor},
      ]}
      onPress={() => setActiveTab(keyTab)}>
      <Text
        style={{
          color: activeTab === keyTab ? textColor : bgColor,
          fontWeight: '700',
          fontSize: 16,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export {ButtonHeaderTab};
