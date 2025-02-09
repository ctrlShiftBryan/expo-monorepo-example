import { Paragraph, Test, Button } from '@acme/ui';
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
      <Button>Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </View>
  );
}
