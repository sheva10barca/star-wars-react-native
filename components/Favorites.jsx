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
            <Pressable
               onPress={() => resetHandler()}
               style={({ pressed }) =>
                  pressed ? [styles.resetBtn, styles.pressed] : styles.resetBtn
               }
            >
               <Text style={styles.resetBtnText}>Reset</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default Favorites;

const styles = StyleSheet.create({
   favoritesContainer: {
      backgroundColor: 'rgb(173,125,55)',
      height: 160,
      marginTop: 50,
      borderRadius: 10,
      marginBottom: 10,
   },
   favoritesTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 14,
      fontSize: 20,
      color: 'white',
   },
   gendersContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 12,

      // backgroundColor: 'gray'
   },
   gender: {
      textAlign: 'center',
      fontSize: 17,
      marginHorizontal: 40,
      fontWeight: '600',
      color: 'rgb(51,78,48)',
      width: 60,
   },
   number: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 15,
      fontWeight: '500',
   },
   btnContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
   },
   resetBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(0,0,0, 1)',
      width: 75,
      height: 35,
      marginTop: 6,
   },
   resetBtnText: {
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#ddceceff',
   },
   pressed: {
      opacity: 0.7,
   },
});
