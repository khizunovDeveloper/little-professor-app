import { Link } from 'expo-router';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>chose diffic</Text>
      <Link href="/lvl one" asChild>
      <Button title="lvl one" color="blue" onPress={() => {}} />
            </Link>
            <Link href="/lvl two" asChild>
            <Button title="lvl two" color="blue" onPress={() => {}} />
            </Link>
            <Link href="/lvl three" asChild>
            <Button title="lvl three" color="blue" onPress={() => {}} />
            </Link>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: 'black',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
  },
});
