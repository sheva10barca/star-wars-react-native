import { View, Text, StyleSheet, Pressable } from 'react-native';

const CharItem = ({ name, birth_year, gender, addToFavorites, item, favorites }) => {
   const pressHandler = () => {
      addToFavorites(item);
   };

   return (
      <View style={styles.container}>
         <Text>{name}</Text>
         <Text>{birth_year}</Text>
         <Text>{gender}</Text>
         <Pressable
            onPress={() => pressHandler()}
            style={[favorites.includes(item) ? styles.liked : styles.likeBtn]}
         >
            <Text style={styles.likeBtnText}>Like</Text>
         </Pressable>
      </View>
   );
};

export default CharItem;

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginHorizontal: 5,
      marginVertical: 15,
   },
   likeBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      backgroundColor: 'darkblue',
      width: 60,
      height: 40,
   },
   likeBtnText: {
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
   },
   liked: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      backgroundColor: 'darkred',
      width: 60,
      height: 40,
   },
});
