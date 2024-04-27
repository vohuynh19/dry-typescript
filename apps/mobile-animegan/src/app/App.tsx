import { SafeAreaView, View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View>
          <Text>Hello there,</Text>
          <Text testID="heading" role="heading">
            Welcome MobileAnimegan 👋
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
