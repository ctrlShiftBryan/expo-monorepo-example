import { Paragraph } from '@acme/ui';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text className="text-red-500 text-xl font-bold">Hello from Nativewind</Text>
      <Paragraph className="text-blue-500">Hello from UI</Paragraph>
    </View>
  );
}
