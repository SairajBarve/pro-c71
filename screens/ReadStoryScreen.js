import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        
          <Text style={styles.headerText}>Story Hub App</Text>
          <Text style={styles.headerText}>Click on the text</Text>
        

        <Text style={styles.displayText} onPress={() => Linking.openURL('https://byjus.com/kids-learning/moral-stories-the-boy-who-cried-wolf/')}>
          1) ππ·π΄ π±πΎπ ππ·πΎ π²ππΈπ΄π³ ππΎπ»π΅
        </Text>
        <Text style={styles.displayText} onPress={() => Linking.openURL('https://byjus.com/kids-learning/moral-stories-the-lion-and-the-mouse/')}>
        2) ππ·π΄ π»πΈπΎπ½ π°π½π³ ππ·π΄ πΌπΎπππ΄
        </Text>
        <Text style={styles.displayText} onPress={() => Linking.openURL('https://byjus.com/kids-learning/moral-stories-belling-the-cat/')}>
        3) π±π΄π»π»πΈπ½πΆ ππ·π΄ π²π°π
        </Text>
         <Text style={styles.displayText} onPress={() => Linking.openURL('https://byjus.com/kids-learning/moral-stories-the-tortoise-and-the-hare/')}>
        4) ππ·π΄ ππΎπππΎπΈππ΄ π°π½π³ ππ·π΄ π·π°ππ΄
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'blue',
    border: 'dashed',
  },
  displayText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 20,
    padding: 15,
  },
});
