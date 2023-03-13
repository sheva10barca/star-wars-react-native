import { View, Text, Image } from 'react-native';

const CharDetails = ({ item }) => {
   console.log(item);
   return (
      <View>
         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
               style={{ height: 300, width: 300 }}
               source={{
                  uri: 'https://assets-prd.ignimgs.com/2019/12/07/screen-shot-2019-11-29-at-8-42-07-am-1575730348206.jpg',
               }}
            />
         </View>
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
