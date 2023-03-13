import { useEffect } from 'react';
import { View } from 'react-native';
import CharDetails from '../components/CharDetails';

const CharScreen = ({ route, navigation }) => {
   const { item } = route.params;

   useEffect(() => {
      navigation.setOptions({
         title: item.name,
      });
   }, []);

   return (
      <View>
         <CharDetails item={item} />
      </View>
   );
};

export default CharScreen;
