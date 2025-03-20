import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Bem vindo ao meu aplicativo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBBD0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  },
});
