import React from 'react';
import {Text } from 'react-native';

export default function Nunito({title, size, color, type = 'Regular', style,decoration}) {
  return (
    <Text
      style={{
        color,
        fontSize: size,
        fontFamily: `Nunito-${type}`,
        textDecorationLine:decoration,
        ...style,
      }}>
      {title}
    </Text>
  );
}