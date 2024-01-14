import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store/store';
import AppNavigation from './navigation/AppNavigation';
import { colors } from './assets/constants/colors';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation/>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
