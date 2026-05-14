import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'black', fontSize: 30 }}>
        FUNCIONA
      </Text>
    </View>
  );
}