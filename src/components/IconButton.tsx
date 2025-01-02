import FontAwesome from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';

interface Props {
  name: string;
  label: string;
  onPress: () => void;
}

export default function IconButton({ name, label, onPress }: Props) {
  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name={name}
        onPress={onPress}
        borderRadius={30}
        size={30}
        iconStyle={{ marginRight: 0 }}
        style={styles.button}>
        {/* {label} */}
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    justifyContent: 'center',
  },
});
