import { Text, View, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>choose mode</Text>
        <Link href="/add" asChild>
                <Button title="add" color="blue" onPress={() => {}} />
                            </Link>
                            <Link href="/sub" asChild>
                            <Button title="sub" color="blue" onPress={() => {}} />
                            </Link>
                            <Link href="/multiply" asChild>
                            <Button title="multiply" color="blue" onPress={() => {}} />
                            </Link>
                            <Link href="/divide" asChild>
                            <Button title="divide" color="blue" onPress={() => {}} />
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
    color: 'black',
    fontSize: 28,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
  },
});
