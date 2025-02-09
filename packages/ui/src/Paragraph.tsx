import { Text, TextProps, View } from 'react-native';

export const Paragraph = ({ children, style, ...props }: TextProps) => {
  return (
    <View>
      <Text {...props}>{children}</Text>
      <Text className="text-green-500">{children}</Text>
    </View>
  );
};
