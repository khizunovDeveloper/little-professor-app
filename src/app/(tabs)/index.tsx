import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/src/hooks/hooks';
import { increment, decrement } from '@/src/features/counter/counterSlice';
import IconButton from '@/src/components/IconButton';

export default function AboutScreen() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const play = () => {
    dispatch(increment());
  };

  const unPlay = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.text}>Welcome to little professor</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          backgroundColor: 'yellow',
          padding: '10%',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton name="play" label="Start New Game" onPress={play} />
          <IconButton name="arrow-undo-circle" label="Reset" onPress={unPlay} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  welcomeTextContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '10%',
  },
  text: {
    fontSize: 28,
  },
});
