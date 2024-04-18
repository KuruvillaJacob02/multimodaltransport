import { StyleSheet, View } from 'react-native';
import registerNNPushToken from 'native-notify';
import Translator from './src';
export default function App() {
  registerNNPushToken(20676, 'qokgHbBtqedMbz1GCk9bSy');
  return (
    <View style={styles.container}>
      <Translator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
