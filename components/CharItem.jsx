import { View, Text, StyleSheet, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const CharItem = ({ name, gender, addToFavorites, item, favorites }) => {
   const pressHandler = () => {
      addToFavorites(item);
   };

   function trunc(text) {
      return text.length > 14 ? `${text.substr(0, 14)}..` : text;
   }

   return (
      <View style={styles.container}>
         <Text style={styles.name}>{trunc(name)}</Text>
         <Text style={styles.gender}>{gender}</Text>
         <Pressable style={styles.btn} onPress={() => pressHandler()}>
            {favorites.includes(item) ? (
               <Ionicons name='md-heart-sharp' size={24} color='rgb(235, 179, 60)' />
            ) : (
               <Ionicons name='md-heart-outline' size={24} color='black' />
            )}
         </Pressable>
      </View>
   );
};

export default CharItem;

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgb(51,78,48)',
      borderRadius: 5,
      marginHorizontal: 5,
      marginVertical: 14,
      height: 40,
   },
   name: {
      fontWeight: '600',
      color: 'white',
      width: 120,
      marginRight: 50,
      marginLeft: 20,
   },
   gender: {
      width: 60,
      marginRight: 75,
      fontWeight: '500',
      color: 'rgb(231, 164, 62)',
   },
   btn: {
      width: 40,
   },
});
