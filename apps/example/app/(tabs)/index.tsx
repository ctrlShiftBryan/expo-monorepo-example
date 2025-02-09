import { Paragraph, Test, Button, Text } from '@acme/ui';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeMessage } from '@acme/feature-home';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500 text-xl font-bold">Hello from Nativewind</Text>
      <Paragraph className="text-blue-500">Hello from UI</Paragraph>
      <Test />
      <HomeMessage />
      <Button>
        <Text>Primary</Text>
      </Button>
      <Button variant="destructive">
        <Text>Destructive</Text>
      </Button>
      <Button variant="secondary">
        <Text>Secondary</Text>
      </Button>
      <Button variant="outline">
        <Text>Outline</Text>
      </Button>
      <Button variant="ghost">
        <Text>Ghost</Text>
      </Button>
      <Button variant="link">
        <Text>Link</Text>
      </Button>
    </View>
  );
}
