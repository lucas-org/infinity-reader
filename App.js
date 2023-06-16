import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout, IconRegistry } from '@ui-kitten/components';
import LoginPage from './src/pages/Login';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" translucent={Platform.OS === 'android' ? false : true} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <LoginPage />
        </Layout>
      </ApplicationProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  }
});
