import { View, Text, StyleSheet, Pressable } from 'react-native';

const Favorites = ({ maleFav, femaleFav, othersFav, resetHandler }) => {
   return (
      <View style={styles.favoritesContainer}>
         <Text style={styles.favoritesTitle}>Favorite Characters</Text>
         <View style={styles.gendersContainer}>
            <View>
               <Text style={styles.gender}>Male</Text>
               <Text style={styles.number}>{maleFav}</Text>
            </View>
            <View>
               <Text style={styles.gender}>Female</Text>
               <Text style={styles.number}>{femaleFav}</Text>
            </View>
            <View>
               <Text style={styles.gender}>Others</Text>
               <Text style={styles.number}>{othersFav}</Text>
            </View>
         </View>
         <View style={styles.btnContainer}>
            <Pressable onPress={() => resetHandler()} style={styles.resetBtn}>
               <Text style={styles.resetBtnText}>Reset</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default Favorites;

const styles = StyleSheet.create({
   favoritesContainer: {
      backgroundColor: 'lightblue',
      height: 140,
      marginTop: 50
   },
   favoritesTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 10,
      fontSize: 18,
   },
   gendersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginHorizontal: 20,
      // backgroundColor: 'gray'
   },
   gender: {
      textAlign: 'center',
      fontSize: 17,
   },
   number: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 15,
   },
   btnContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
   },
   resetBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      backgroundColor: 'darkblue',
      width: 80,
      height: 40,
   },
   resetBtnText: {
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
   },
});
