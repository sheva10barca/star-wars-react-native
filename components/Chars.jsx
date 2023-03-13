import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, ActivityIndicator } from 'react-native';
import CharItem from './CharItem';

const Chars = ({ onPress }) => {
   const [chars, setChars] = useState([]);
   const [maleFav, setMaleFav] = useState(0);
   const [femaleFav, setFemaleFav] = useState(0);
   const [othersFav, setOthersFav] = useState(0);

   const [favorites, setFavorites] = useState([]);

   const [currentPage, setCurrentPage] = useState(1);
   const [isLoading, setIsLoading] = useState(false);

   function fetchChars() {
      setIsLoading(true);
      axios
         .get(`https://swapi.dev/api/people/?page=${currentPage}`)
         .then((res) => {
            setIsLoading(false);
            setChars([...chars, ...res.data.results]);
         })
         .catch((e) => {
            setIsLoading(false);
            console.log(e.message);
         });
      console.log('fetching chars');
   }

   const loadMoreChars = () => {
      if (chars.length > 0 && currentPage < 10 && !isLoading) {
         setCurrentPage((prev) => prev + 1);
         console.log('load more chars');
      }
   };
   const renderLoader = () => {
      return (
         isLoading && (
            <View style={{ marginTop: 10 }}>
               <ActivityIndicator size={'large'} color='blue' />
            </View>
         )
      );
   };

   useEffect(() => {
      fetchChars();
      console.log('render');
   }, [currentPage]);

   function resetHandler() {
      setMaleFav(0);
      setFemaleFav(0);
      setOthersFav(0);
      setFavorites([]);
      console.log('reset');
   }

   function addToFavorites(item) {
      if (!favorites.find((el) => el.name === item.name)) {
         setFavorites([...favorites, item]);

         if (item.gender === 'male') {
            setMaleFav((prevState) => prevState + 1);
         } else if (item.gender === 'female') {
            setFemaleFav((prevState) => prevState + 1);
         } else if (item.gender !== 'male' && item.gender !== 'female') {
            setOthersFav((prevState) => prevState + 1);
         }
      } else if (favorites.find((el) => el.name === item.name)) {
         setFavorites([...favorites].filter((char) => char !== item));

         if (item.gender === 'male') {
            setMaleFav((prevState) => prevState - 1);
         } else if (item.gender === 'female') {
            setFemaleFav((prevState) => prevState - 1);
         } else if (item.gender !== 'male' && item.gender !== 'female') {
            setOthersFav((prevState) => prevState - 1);
         }
      }
   }
   // console.log(favorites);
   console.log(currentPage);

   return (
      <View style={styles.container}>
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
         <FlatList
            data={chars}
            renderItem={({ item }) => (
               <Pressable onPress={() => onPress(item)}>
                  <CharItem
                     favorites={favorites}
                     addToFavorites={addToFavorites}
                     item={item}
                     name={item.name}
                     birth_year={item.birth_year}
                     gender={item.gender}
                  />
               </Pressable>
            )}
            ListFooterComponent={renderLoader}
            onEndReachedThreshold={0}
            onEndReached={loadMoreChars}
         />
      </View>
   );
};

export default Chars;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   favoritesContainer: {
      backgroundColor: 'lightblue',
      height: 140,
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
