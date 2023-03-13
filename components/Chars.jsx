import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, ActivityIndicator } from 'react-native';
import CharItem from './CharItem';
import Favorites from './Favorites';

const Chars = ({ onPress }) => {
   const [chars, setChars] = useState([]);
   const [favorites, setFavorites] = useState([]);

   const [maleFav, setMaleFav] = useState(0);
   const [femaleFav, setFemaleFav] = useState(0);
   const [othersFav, setOthersFav] = useState(0);

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

   useEffect(() => {
      fetchChars();
      // console.log('render');
   }, [currentPage]);

   const loadMoreChars = () => {
      if (chars.length > 0 && currentPage < 10 && !isLoading) {
         setCurrentPage((prev) => prev + 1);
         // console.log('load more chars');
      }
   };
   const renderLoader = () => {
      return (
         isLoading && (
            <View style={{ marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
               <Text
                  style={{
                     color: 'white',
                     marginBottom: 20,
                     fontWeight: 'bold',
                     fontSize: 24,
                  }}
               >
                  Characters are loading
               </Text>
               <ActivityIndicator size={'large'} color='white' />
            </View>
         )
      );
   };

   function resetHandler() {
      setMaleFav(0);
      setFemaleFav(0);
      setOthersFav(0);
      setFavorites([]);
      // console.log('reset');
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
   // console.log(currentPage);

   return (
      <View style={styles.container}>
         <Favorites
            maleFav={maleFav}
            femaleFav={femaleFav}
            othersFav={othersFav}
            resetHandler={resetHandler}
         />
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
      backgroundColor: 'black',
   },
});
