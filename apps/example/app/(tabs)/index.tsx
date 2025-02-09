import { Paragraph, Test } from '@acme/ui';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeMessage } from '@acme/feature-home';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500 text-xl font-bold">Hello from Nativewind</Text>
      <Paragraph className="text-blue-500">Hello from UI</Paragraph>
      <Test />
      <HomeMessage />
    </View>
  );
}
