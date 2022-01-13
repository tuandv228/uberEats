import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonHeaderTab} from '../../../component/button';
import {styles} from '../styles';
const HeaderTab: React.FC = props => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <View style={styles.headerTab}>
      <ButtonHeaderTab
        text="Delivery"
        bgColor="black"
        textColor="white"
        keyTab={1}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ButtonHeaderTab
        text="Pickup"
        bgColor="black"
        textColor="white"
        keyTab={2}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};
export default HeaderTab;
