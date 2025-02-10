import { Paragraph, Strong, Test } from '@acme/ui';
import { ComponentProps } from 'react';
import { Test2 } from '~/src/not/in/root/test2';
type HomeMessageProps = ComponentProps<typeof Paragraph>;

export const HomeMessage = (props: HomeMessageProps) => (
  <Paragraph {...props}>
    Hello from an <Strong>Expo monorepo</Strong>! test
    <Test />
    <Test2 />
  </Paragraph>
);
