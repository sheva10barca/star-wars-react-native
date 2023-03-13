import { View, StyleSheet } from 'react-native';
import Chars from '../components/Chars';

const HomeScreen = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Chars
            onPress={(item) =>
               navigation.navigate('CharScreen', {
                  item: item,
               })
            }
         />
      </View>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
