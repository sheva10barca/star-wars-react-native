import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CharDetails = ({ item }) => {
   console.log(item);
   return (
      <ScrollView style={styles.container}>
         <View style={styles.imgContainer}>
            <Image
               style={styles.img}
               source={{
                  uri: 'https://i.guim.co.uk/img/media/7f461faef1a1f1601fca37eb6e865e248ca7f791/50_0_1133_680/master/1133.jpg?width=445&quality=85&dpr=1&s=none',
               }}
            />
            <Text style={styles.imgText}>
               There is no photo of {item.name} ... so enjoy the Baby Yoda's photo and May the Force
               be with you!
            </Text>
         </View>
         <View style={styles.infoContainer}>
            <View>
               <Text style={styles.infoTitle}>Birth year</Text>
               <Text style={styles.infoData}>{item.birth_year}</Text>
            </View>
            <View>
               <Text style={styles.infoTitle}>Gender</Text>
               <Text style={styles.infoData}>{item.gender}</Text>
            </View>
            <View>
               <Text style={styles.infoTitle}>Mass</Text>
               <Text style={styles.infoData}>{item.mass}</Text>
            </View>
            <View>
               <Text style={styles.infoTitle}>Hair Color</Text>
               <Text style={styles.infoData}>{item.hair_color}</Text>
            </View>
            <View>
               <Text style={styles.infoTitle}>Skin Color</Text>
               <Text style={styles.infoData}>{item.skin_color}</Text>
            </View>
         </View>
      </ScrollView>
   );
};

export default CharDetails;

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'black',
      height: '100%',
   },
   infoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
   },
   infoTitle: {
      fontSize: 22,
      color: 'rgb(216, 154, 60)',
      fontWeight: '700',
   },
   infoData: {
      color: 'white',
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      marginTop: 6,
      marginBottom: 20,
   },
   imgText: {
      color: 'white',
      marginTop: 10,
      textAlign: 'center',
      marginHorizontal: 10,
      fontSize: 12,
   },
   imgContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
   },
   img: {
      height: 200,
      width: 300,
      borderRadius: 10,
   },
});
