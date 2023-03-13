import { View, Text } from 'react-native';

const CharDetails = ({ item }) => {
   console.log(item);
   return (
      <View>
         <View>
            <Text>{item.name}</Text>
         </View>
         <View>
            <Text>{item.birth_year}</Text>
         </View>
         <View>
            <Text>{item.gender}</Text>
         </View>
         <View>
            <Text>{item.mass}</Text>
         </View>
      </View>
   );
};

export default CharDetails;
