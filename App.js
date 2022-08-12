import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Game from './components/Game';

export default function App() {
  const [screen, setScreen] = useState('invader');
  return (
    <TouchableOpacity onPress={setScreen( screen === 'flag'? 'invader' : 'flag' )}>
      <View style={styles.container}>
        {screen === 'invader'?
          <Game randomNumbers={6} />
        :
          <StatusBar style="auto" />
        }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 50,
  },
});
